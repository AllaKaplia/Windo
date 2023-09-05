import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Field, Form, Formik } from 'formik';
import emailjs from 'emailjs-com';
import * as yup from 'yup';
import { Element } from 'react-scroll';
import dvostulkoveSchema71 from '../../img/miscount/dvostulkove-71.png';
import windowPhoto1 from '../../img/miscount/3стулкове вікно.png';
import windowPhoto2 from '../../img/miscount/глухе вікно.png';
import windowPhoto3 from '../../img/miscount/двостулкове вікно.png';
import windowPhoto4 from '../../img/miscount/лоджія.png';
import { BsCheck } from 'react-icons/bs';
import { FaTelegram, FaViber } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';
import { iconSize } from '../../constants/iconSize';
import ModalMenu from "../ModalMenu/ModalMenu";
import FeedbackModal from '../FeedbackModal/FeedbackModal';
import Logo from '../../img/Logo-Windo.png';
import { AdditionalList, AskSize, AskSizeMore, BigFormBox, BoxAnchor, BoxAskSize, BoxBtnSubmitMiscount, BoxButtonWindow, BoxCheckboxes, BoxImageSchema, BoxMiscount, BoxSocialForm, BoxTextarea, BtnSubmitMiscount, ButtonSubmit, ButtonWindow, ButtonWindowFor, ButtonWindowTree, ButtonWindowTwo,  Checkbox,  CheckboxContainer,  CheckboxGroup, CheckboxText, CloseButton, ContainerForForm, ContainerForm, FeedbackBox, ImageFeedback, Input, LabelCheckbox, LabelModal, LabelText, MainImageWindow, MessageErr, MoreInfo, NameSchema, SchemaImage, SchemaImages, SchemaImagesSmall, SocialForm, Textarea, TextFeedback, TextSocialForm, TitleCheckbox, TitleFeedback, TitleMiscount, TitleModal, WindowFormBox } from './Miscount.styled';
import { toast } from 'react-toastify';
import Loader from 'Components/Loader';


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

const startedValues = {
    name: '',
    number: '',
};

const initialValues = {
    toggle: [],
    color: [],
    width: '',
    height: '',
    dropdownValue: '',
    textareaValue: '',
    selectedButton: '',
}

const animatedComponents = makeAnimated();

const initialCheckboxStates = {
    toggle1: false,
    toggle2: false,
};

const initialCheckboxColor = {
    color1: false,
    color2: false,
};

const options = [
    { value: 'Склопакет з аргоном', label: 'Склопакет з аргоном' },
    { value: 'Москітна сітка', label: 'Москітна сітка' },
    { value: 'Підвіконня', label: 'Підвіконня' },
    { value: 'Ручка з замком', label: 'Ручка з замком' }
];

const Miscount = () => {
    const [selectedImage, setSelectedImage] = useState(windowPhoto2);
    const [checkboxStates, setCheckboxStates] = useState(initialCheckboxStates);
    const [checkboxColor, setCheckboxColor] = useState(initialCheckboxColor);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showNextForm, setShowNextForm] = useState(false);
    const [selectedButton, setSelectedButton] = useState('');
    const [windowFormValues, setWindowFormValues] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = (image, buttonName) => {
        setSelectedImage(image);
        setSelectedButton(buttonName);
    };

    const handleCheckboxClick = (name) => {
        setCheckboxStates((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    const handleCheckboxColorClick = (name) => {
        setCheckboxColor((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    const toggleModal = () => {
        setShowNextForm(!showNextForm);
        document.body.style.overflow = showNextForm ? "auto" : "hidden"; 
    };

    const handleFirstFormSubmit = (values, { resetForm }) => {
        if(
            values.toggle.length === 0 &&
            values.color.length === 0 &&
            values.width === '' &&
            values.height === '' &&
            values.dropdownValue.length === 0 &&
            values.textareaValue === ''
        ) {
            toast.warning('Будь ласка, заповніть форму перед відправкою!', {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
                });
            return;
        }
        values.selectedButton = selectedButton;
        setWindowFormValues(values);
        setShowNextForm(true);
        resetForm();
    };
    
    const handleSecondFormSubmit = async (values, { resetForm }) => {
        const allFormData = {
            ...windowFormValues,
            ...values,
            selectedButton: selectedButton,
        };
    
        if(showNextForm) {
            try {
                setIsLoading(true);
                const response = await emailjs.send(
                    'service_jbxdkxg',
                    'template_bjh6aqi',
                    allFormData,
                    'CkeKoYLQpAvNETsQz'
                );
              
                console.log('Email sent:', JSON.stringify(response));


                setIsModalOpen(true);
                setShowNextForm(false);
                setCheckboxStates(initialCheckboxStates);
                setCheckboxColor(initialCheckboxColor);
            } catch (error) {
                toast.error('Error sending email:', error);
            }
            
            setIsLoading(false);
            resetForm();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            const timer = setTimeout(() => {
                setIsModalOpen(false);
            }, 2000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalOpen]);

    return(
        <BoxMiscount>
            <BoxAnchor>
                <Element name="miscount" className="element"> <TitleMiscount>Прорахунок вартості</TitleMiscount> </Element>
            </BoxAnchor>
            <BoxButtonWindow>
                <ButtonWindow type='button' onClick={() => handleButtonClick(windowPhoto2, 'Одностулкове')}>
                    <SchemaImage src={dvostulkoveSchema71} alt="Odnostulkove Schema 70" />
                    <NameSchema>Одностулкове</NameSchema>
                </ButtonWindow>
                <ButtonWindowTwo type='button' onClick={() => handleButtonClick(windowPhoto3, 'Двостулкове')}>
                    <BoxImageSchema>
                        <SchemaImages src={dvostulkoveSchema71} alt="Dvostulkove Schema71"/>
                        <SchemaImages src={dvostulkoveSchema71} alt="Dvostulkove Schema72" />
                    </BoxImageSchema>
                    <NameSchema>Двостулкове вікно</NameSchema>
                </ButtonWindowTwo>
                <ButtonWindowTree type='button' onClick={() => handleButtonClick(windowPhoto1, 'Трьохстулкове')}>
                    <BoxImageSchema>
                        <SchemaImagesSmall src={dvostulkoveSchema71} alt="trystulkowe73" width={46} />
                        <SchemaImagesSmall src={dvostulkoveSchema71} alt="trystulkowe74" width={46} />
                        <SchemaImagesSmall src={dvostulkoveSchema71} alt="trystulkowe73" width={46} />
                    </BoxImageSchema>
                    <NameSchema>Трьохстулкове вікно</NameSchema>
                </ButtonWindowTree>
                <ButtonWindowFor type='button' onClick={() => handleButtonClick(windowPhoto4, 'Балкон / лоджія')}>
                    <BoxImageSchema>
                        <SchemaImagesSmall src={dvostulkoveSchema71} alt="balcon Lodgija91" width={28} />
                        <SchemaImagesSmall src={dvostulkoveSchema71} alt="balcon Lodgija78" width={40} />
                        <SchemaImagesSmall src={dvostulkoveSchema71} alt="balcon Lodgija76" width={40} />
                        <SchemaImagesSmall src={dvostulkoveSchema71} alt="balcon Lodgija92" width={28} />
                    </BoxImageSchema>
                    <NameSchema>Балкон / лоджія</NameSchema>
                </ButtonWindowFor>
            </BoxButtonWindow>
            <WindowFormBox>
                <MainImageWindow src={selectedImage} alt="window Photo2" />
                <Formik initialValues={initialValues} onSubmit={handleFirstFormSubmit}>
                    <Form autoComplete='none'>
                        <BoxCheckboxes>
                            <div>
                            <TitleCheckbox id="checkbox-group">Оберіть склопакет</TitleCheckbox>
                            <CheckboxGroup role="group" aria-labelledby="checkbox-group">
                                <LabelCheckbox>
                                <BsCheck
                                    style={{
                                    color: 'white',
                                    backgroundColor: checkboxStates.toggle1 ? 'var(--brand-orange)' : 'transparent',
                                    position: 'absolute',
                                    left: '-2px',
                                    borderRadius: '6px',
                                    padding: '2px',
                                    transition: 'background-color 0.3s',
                                    }}
                                />
                                    <Checkbox type="checkbox" name="toggle1" checked={checkboxStates.toggle1}  value="Однокамерний (два скла)" onClick={() => handleCheckboxClick('toggle1')} />
                                    <CheckboxText>Однокамерний (два скла)</CheckboxText>
                                </LabelCheckbox>
                                <LabelCheckbox>
                                    <BsCheck
                                        style={{
                                        color: 'white',
                                        backgroundColor: checkboxStates.toggle2 ? 'var(--brand-orange)' : 'transparent',
                                        position: 'absolute',
                                        left: '-2px',
                                        borderRadius: '6px',
                                        padding: '2px',
                                        transition: 'background-color 0.3s',
                                        }}
                                    />
                                        <Checkbox type="checkbox" name="toggle2" checked={checkboxStates.toggle2}  value="Двокамерний (три скла)" onClick={() => handleCheckboxClick('toggle2')} />
                                    <CheckboxText>Двокамерний (три скла)</CheckboxText>
                                </LabelCheckbox>
                                </CheckboxGroup>
                            </div>
                            <div>
                                <TitleCheckbox id="checkbox-group">Оберіть склопакет</TitleCheckbox>
                                <CheckboxGroup role="group" aria-labelledby="checkbox-group">
                                <LabelCheckbox>
                                    <BsCheck
                                        style={{
                                        color: 'white',
                                        backgroundColor: checkboxColor.color1 ? 'var(--brand-orange)' : 'transparent',
                                        position: 'absolute',
                                        left: '-2px',
                                        borderRadius: '6px',
                                        padding: '2px',
                                        transition: 'background-color 0.3s',
                                        }}
                                    />
                                        <Checkbox type="checkbox" name="color1" checked={checkboxColor.color1}  value="Білий" onClick={() => handleCheckboxColorClick('color1')} />
                                    <CheckboxText>Білий</CheckboxText>
                                </LabelCheckbox>
                                <LabelCheckbox>
                                <BsCheck
                                    style={{
                                    color: 'white',
                                    backgroundColor: checkboxColor.color2 ? 'var(--brand-orange)' : 'transparent',
                                    position: 'absolute',
                                    left: '-2px',
                                    borderRadius: '6px',
                                    padding: '2px',
                                    transition: 'background-color 0.3s',
                                    }}
                                />
                                        <Checkbox type="checkbox" name="color2" checked={checkboxColor.color2} value="Ламінація" onClick={() => handleCheckboxColorClick('color2')} />
                                    <CheckboxText>Ламінація</CheckboxText>
                                </LabelCheckbox>
                            </CheckboxGroup>
                                    </div>
                        </BoxCheckboxes>
                                <CheckboxContainer>
                                    <label>
                                        <AskSize type="text" name="width" placeholder="Ширина (мм)"/>
                                    </label>
                                    <label>
                                        <AskSize type="text" name="height" placeholder="Висота (мм)"/>
                                    </label>
                                </CheckboxContainer>
                            <BoxAskSize>
                                <AdditionalList htmlFor="dropdownValue">
                                <AskSizeMore name="dropdownValue">
                                    {({ field, form }) => (
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            classNames={{
                                                control: (state) =>
                                                state.isFocused ? 'border-orange-600' : 'border-grey-300',
                                            }}
                                            options={options}
                                            name={field.name}
                                            id="dropdownValue"
                                            {...field}
                                            value={options.filter(option => field.value.includes(option.value))}
                                            onChange={selectedOptions =>
                                                form.setFieldValue(
                                                    'dropdownValue',
                                                    selectedOptions.map(option => option.value)
                                                )
                                            }
                                            placeholder={field.value.length > 0 ? '' : 'Додаткові опції'}
                                        />
                                    )}
                                </AskSizeMore>
                                </AdditionalList>
                            </BoxAskSize>
                        <BoxTextarea>
                            <MoreInfo htmlFor="textareaValue">Додаткова інформація</MoreInfo>
                            <Textarea as="textarea" id="textareaValue" name="textareaValue" placeholder="Потрібен профіль Rehau"/>
                        </BoxTextarea>
                        <Field type="hidden" name="selectedButton">
                            {({ field }) => <input type="hidden" {...field} />}
                        </Field>
                    <BoxBtnSubmitMiscount>
                        <BtnSubmitMiscount type="submit">Відправити</BtnSubmitMiscount>
                    </BoxBtnSubmitMiscount>
                    </Form>
                </Formik>
            </WindowFormBox>
            <ModalMenu isOpen={showNextForm} onRequestClose={toggleModal} contentLabel="Get personal data miscount">
                <CloseButton  type="button" onClick={toggleModal}>
                    <TfiClose size={iconSize.sm} />
                </CloseButton>
                <BigFormBox>
                    <TitleModal>Відправити на прорахунок</TitleModal>
                    <Formik initialValues={startedValues} validationSchema={schema} onSubmit={handleSecondFormSubmit} >
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
                                    <SocialForm href="https://web.telegram.org/k/#@Windocomua" target="_blank"><FaTelegram size={iconSize.md} /></SocialForm>
                                </BoxSocialForm>
                            </ContainerForForm>
                        </Form>
                    </Formik>
                    {isLoading && <Loader />}
                </BigFormBox>
            </ModalMenu>
            <FeedbackModal isOpen={isModalOpen} contentLabel="Get a miscount">
                <FeedbackBox>
                    <TitleFeedback>Ми скоро зв’яжемось з Вами!</TitleFeedback>
                    <ImageFeedback src={Logo} alt="logo" />
                    <TextFeedback>Дякуємо, що обрали нас!</TextFeedback>
                </FeedbackBox>
            </FeedbackModal>
        </BoxMiscount>
    )
};

export default Miscount;