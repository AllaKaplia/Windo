import { useEffect, useState } from 'react';
import { Form, Formik, Field } from 'formik';
import emailjs from 'emailjs-com';
import * as yup from 'yup';
import { iconSize } from '../../constants/iconSize';
import { PiNumberCircleOneLight, PiNumberCircleTwoLight, PiNumberCircleThreeLight } from 'react-icons/pi';
import { AllQuestionsBox, AnswerText, AnswerTextDesktop, BoxAnchor, BoxMobile, BoxNumberText, BoxNumberTextFirst, BtnDiscount, ContainerTextQuestion1, ContainerTextQuestion2, ContainerTextQuestion3, FeedbackBox, FonBox, FormDiscount, ImageFeedback, InputDiscount, LabelInput, MainBoxDiscount, MessageErr, NamesInputs, TextareaDiscount, TextFeedback, TextQuestion, TitleDiscount, TitleFeedback, WindowText } from './Discount.styled';

import Logo from '../../img/Logo-Windo.png';
import FeedbackModal from 'Components/FeedbackModal';
import { toast } from 'react-toastify';


const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^([a-zA-Zа-яА-ЯґҐєЄіІїЇ' -]*[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+[' -]*){1,}$/, 'Name is invalid')
      .required('Name is required'),
    phone: yup
      .string()
      .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Phone number is invalid')
      .required('Phone number is required'),
    textareaValue: yup
      .string()
      .required('Additional information is required')
      .max(200, 'Additional information should not exceed 200 characters')
});

const initialValues = {
    name: '',
    phone: '',
    textareaValue: '',
}

const Discount = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const handleFormSubmit = async (values, { resetForm }) => {
        try {
            console.log(values);

            const response = await emailjs.send(
                'service_q5k4yhe',
                'template_u5527g8',
                values,
                'xIE7PdFcVSv6LE-4F'
            );

            console.log('Email sent:', JSON.stringify(response));
            
            resetForm();
            setIsModalOpen(true);
        } catch (error) {
            toast.error('Error sending email:', error);
        }
    }


    useEffect(() => {
        if (isModalOpen) {
            const timer = setTimeout(() => {
                setIsModalOpen(false);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalOpen]);

    return (
        <MainBoxDiscount>
            <BoxAnchor>
                <TitleDiscount name="discount">Як отримати знижку</TitleDiscount>
            </BoxAnchor>
            <BoxMobile>
                <div>
                    <BoxNumberTextFirst>
                        <PiNumberCircleOneLight size={iconSize.md} />
                        <TextQuestion>Залиште заявку</TextQuestion>
                    </BoxNumberTextFirst>
                    <AnswerText>Заповніть коротку форму і ми зв’яжемось з Вами в зручний для Вас час</AnswerText>
                </div>
                <BoxNumberTextFirst>
                    <PiNumberCircleTwoLight size={iconSize.md} color={'var(--text-black)'} />
                    <TextQuestion>Домовтесь про замір</TextQuestion>
                </BoxNumberTextFirst>
                <AnswerText>Наш менеджер  Вам зателефонує </AnswerText>
                <BoxNumberTextFirst>
                    <PiNumberCircleThreeLight size={iconSize.md} color={'var(--text-black)'} />
                    <TextQuestion>Знижка до 70%</TextQuestion>
                </BoxNumberTextFirst>
                <AnswerText>Ми прорахуємо та повідомимо вартість Вашої конструкції</AnswerText>
            </BoxMobile>
            <AllQuestionsBox>
                <BoxNumberText>
                    <PiNumberCircleOneLight size={iconSize.md} color={'var(--brand-orange)'}/>
                    <ContainerTextQuestion1>
                        <TextQuestion>Залиште заявку</TextQuestion>
                        <AnswerText>Заповніть коротку форму і ми зв’яжемось з Вами в зручний для Вас час</AnswerText>
                    </ContainerTextQuestion1>
                </BoxNumberText>
                <BoxNumberText>
                    <PiNumberCircleTwoLight size={iconSize.md} color={'var(--text-black)'}/>
                    <ContainerTextQuestion2>
                        <TextQuestion>Домовтесь про замір</TextQuestion>
                        <AnswerText>Наш менеджер  Вам зателефонує Вам</AnswerText>
                    </ContainerTextQuestion2>
                </BoxNumberText>
                <BoxNumberText>
                    <PiNumberCircleThreeLight size={iconSize.md} color={'var(--text-black)'}/>
                    <ContainerTextQuestion3>
                        <TextQuestion>Отримайте прорахунок зі знижкою до 70%</TextQuestion>
                        <AnswerTextDesktop>Ми прорахуємо та повідомимо вартість Вашої конструкції</AnswerTextDesktop>
                    </ContainerTextQuestion3>
                </BoxNumberText>
            </AllQuestionsBox>
            <FonBox>
                <Formik initialValues={initialValues} onSubmit={handleFormSubmit} validationSchema={schema}>
                    <FormDiscount>
                        <Form autoComplete='off'>
                            <LabelInput>
                                <NamesInputs>Ім’я</NamesInputs>
                                <InputDiscount type="text" name='name' placeholder="Введіть ім’я"/>
                                <MessageErr name="name" component="div" />
                            </LabelInput>
                            <LabelInput>
                                <NamesInputs>Номер телефону</NamesInputs>
                                <InputDiscount type="text" name='phone' placeholder="Введіть номер"/>
                                <MessageErr name="phone" component="div" />
                            </LabelInput>
                            <WindowText>
                                <NamesInputs htmlFor="textareaValue">Додаткова інформація</NamesInputs>
                                <Field name="textareaValue">
                                    {({ field }) => (
                                        <TextareaDiscount {...field} id="textareaValue" placeholder="Хочу отримати знижку! Зателефонуйте о 12:00" />
                                    )}
                                </Field>
                                <MessageErr name="textareaValue" component="div" />
                            </WindowText>
                            <BtnDiscount type='submit'>Отримати знижку</BtnDiscount>
                        </Form>
                    </FormDiscount>
                </Formik>
            </FonBox>
            <FeedbackModal isOpen={isModalOpen} contentLabel="Get a discount">
                <FeedbackBox>
                    <TitleFeedback>Ми скоро зв’яжемось з Вами!</TitleFeedback>
                    <ImageFeedback src={Logo} alt="logo" />
                    <TextFeedback>Дякуємо, що обрали нас!</TextFeedback>
                </FeedbackBox>
            </FeedbackModal>
        </MainBoxDiscount>
    )
};

export default Discount;