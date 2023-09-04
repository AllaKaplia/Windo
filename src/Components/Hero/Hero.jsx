import { useCallback, useEffect, useState } from "react";
import { Form, Formik } from 'formik';
import emailjs from 'emailjs-com';
import ModalMenu from "../ModalMenu/ModalMenu";
import * as yup from 'yup';
import { TfiClose } from 'react-icons/tfi';
import { FaViber } from 'react-icons/fa';
import { RiTelegramLine } from 'react-icons/ri';
import { iconSize } from "../../constants";
import { BigFormBox, BoxContext, BoxHeroText, BoxSocialForm, ButtonHero, ButtonSubmit, CloseButton, ContainerBtnText, ContainerForForm, ContainerForm, ContainerHero, FeedbackBox, HeroBrandText, HeroText, HeroTitle, ImageFeedback, ImgHeroDesktop, ImgHeroTablet, Input, LabelModal, LabelText, MessageErr, SocialForm, TextFeedback, TextSocialForm, TitleFeedback, TitleModal } from "./Hero.styled";
import backgroundTablet from '../../img/frame-background-tablet.jpg';
import backgroundDesktop from '../../img/frame-background-desktop.jpg';
import FeedbackModal from '../FeedbackModal/FeedbackModal';
import Logo from '../../img/Logo-Windo.png';
import { toast } from "react-toastify";
import Loader from "Components/Loader";


const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^([a-zA-Zа-яА-ЯґҐєЄіІїЇ' -]*[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+[' -]*){1,}$/, 'Name is invalid')
      .required('Name is required'),
    number: yup
      .string()
      .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Phone number is invalid')
      .required('Phone number is required'),
});
  
const initialValue = {
    name: '',
    number: '',
};

const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const toggleModal = () => {
        closeModals();
        setShowModal(!showModal);
    };

    const closeModals = () => {
        setShowModal(false);
        setIsFeedbackModalOpen(false);
    };

    const openFeedbackModal = useCallback(() => {
        setIsFeedbackModalOpen(true);
        setTimeout(() => {
            setIsFeedbackModalOpen(false);
            setIsFormSubmitted(false);
        }, 3000);
    }, []);

    const handleSubmit = async (values, { resetForm }) => {
        try {
          setIsLoading(true);
      
          const response = await emailjs.send(
            'service_q5k4yhe',
            'template_u5527g8',
            values,
            'xIE7PdFcVSv6LE-4F'
          );
      
          console.log('Email sent:', JSON.stringify(response));
      
          resetForm();
          setIsFormSubmitted(true);
          setShowModal(false);
      
        openFeedbackModal();
        } catch (error) {
          toast.error('Error sending email:', error);
        }

        setIsLoading(false);
        resetForm();
    };


    useEffect(() => {
        if (isFormSubmitted === true) {
            openFeedbackModal();
        }
    }, [isFormSubmitted, openFeedbackModal]);

    return(
        <>
            <ContainerHero>
                <BoxContext>
                    <HeroTitle>Енергоефективні вікна</HeroTitle>
                    <HeroBrandText>Отримайте ексклюзивну знижку</HeroBrandText>
                    <ContainerBtnText>
                        <BoxHeroText>
                            <HeroText>Компанія Windo надає знижку на профільні системи WDS, Rehau та Salamander. Заповніть коротку форму і ми  зателефонуємо в зручний для Вас час</HeroText>
                        </BoxHeroText>
                        <ButtonHero onClick={toggleModal} type="button">
                            Отримати знижку
                        </ButtonHero>
                    </ContainerBtnText>
                </BoxContext>
                <ImgHeroTablet>
                    <img src={backgroundTablet} alt="Background Tablet" width={375} />
                </ImgHeroTablet>
                <ImgHeroDesktop>
                    <img src={backgroundDesktop} alt="Background Desktop" width={614} />
                </ImgHeroDesktop>
            </ContainerHero>
            <ModalMenu isOpen={showModal} onRequestClose={toggleModal} contentLabel="Get a discount">
                <CloseButton onClick={toggleModal} type="button">
                    <TfiClose size={iconSize.sm} />
                </CloseButton>
                <BigFormBox>
                    <TitleModal>Зв‘яжіться з нами</TitleModal>
                    <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleSubmit}>
                        <Form autoComplete="off">
                            <ContainerForForm>
                                <ContainerForm>
                                    <LabelModal>
                                        <LabelText>Ім‘я</LabelText>
                                        <Input type="text" name="name" placeholder="Введіть ім‘я" required/>
                                        <MessageErr name="name" component="div" />
                                    </LabelModal>
                                    <LabelModal>
                                        <LabelText>Номер телефону</LabelText>
                                        <Input type="tel" name="number" placeholder="Введіть номер" required/>
                                        <MessageErr name="number" component="div" />
                                    </LabelModal>
                                    <ButtonSubmit type="submit">Відправити</ButtonSubmit>
                                </ContainerForm>
                                <BoxSocialForm>
                                    <TextSocialForm>Або напишіть нам:</TextSocialForm>
                                    <SocialForm href="https://viber.click/+0677721077" target="_blank"><FaViber size={iconSize.md}/></SocialForm>
                                    <SocialForm href="https://web.telegram.org/k/#@Windocomua" target="_blank"><RiTelegramLine size={iconSize.md} /></SocialForm>
                                </BoxSocialForm>
                            </ContainerForForm>
                        </Form>
                    </Formik>
                    {isLoading && <Loader />}
                </BigFormBox>
            </ModalMenu>
            <FeedbackModal isOpen={isFeedbackModalOpen} contentLabel="Get a discount">
                <FeedbackBox>
                    <TitleFeedback>Ми скоро зв’яжемось з Вами!</TitleFeedback>
                    <ImageFeedback src={Logo} alt="logo" />
                    <TextFeedback>Дякуємо, що обрали нас!</TextFeedback>
                </FeedbackBox>
            </FeedbackModal>
        </>
    )
};

export default Hero;