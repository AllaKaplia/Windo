import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Form, Formik } from 'formik';
import emailjs from 'emailjs-com';
import dvostulkoveSchema71 from '../../img/miscount/dvostulkove-71.png';
import windowPhoto1 from '../../img/miscount/3стулкове вікно.png';
import windowPhoto2 from '../../img/miscount/глухе вікно.png';
import windowPhoto3 from '../../img/miscount/двостулкове вікно.png';
import windowPhoto4 from '../../img/miscount/лоджія.png';
import { BsCheck } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaTelegram, FaViber } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';
import { iconSize } from '../../constants/iconSize';
import ModalMenu from "../ModalMenu/ModalMenu";
import FeedbackModal from '../FeedbackModal/FeedbackModal';
import Logo from '../../img/Logo-Windo.png';
import { AdditionalList, AskSize, AskSizeMore, BigFormBox, BoxAnchor, BoxBtnSubmitMiscount, BoxButtonWindow, BoxCheckboxes, BoxImageSchema, BoxMiscount, BoxSocialForm, BoxTextarea, BtnSubmitMiscount, ButtonSubmit, ButtonWindow, ButtonWindowFor, ButtonWindowTree, ButtonWindowTwo,  Checkbox,  CheckboxContainer,  CheckboxGroup, CheckboxText, CloseButton, ContainerForForm, ContainerForm, FeedbackBox, ImageFeedback, Input, LabelCheckbox, LabelModal, LabelText, MainImageWindow, MessageErr, MoreInfo, NameSchema, SchemaImage, SchemaImages, SchemaImagesSmall, SocialForm, Textarea, TextFeedback, TextSocialForm, TitleCheckbox, TitleFeedback, TitleMiscount, TitleModal, WindowFormBox } from './Miscount.styled';
import { toast } from 'react-toastify';


const initialValue = {
    toggle: [],
    color: [],
    width: '',
    height: '',
    dropdownValue: '',
    textareaValue: '',
}

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
    const [showFirstForm, setShowFirstForm] = useState(true);
    const [firstFormValues, setFirstFormValues] = useState({});

    const handleButtonClick = (image) => {
        setSelectedImage(image);
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

    const handleFirstFormSubmit = (values) => {
        if (Object.keys(values).length !== 0) {
            setFirstFormValues(values);

            console.log(values);
            setShowFirstForm(false);
        }
    };
    
    const handleSecondFormSubmit = async (values, { resetForm }) => {
        const allFormData = {
          ...firstFormValues,
          ...values,
        };
    
        if(!showFirstForm) {
            try {
                console.log(values);
        
                const response = await emailjs.send(
                    'service_q5k4yhe',
                    'template_u5527g8',
                    allFormData,
                    'xIE7PdFcVSv6LE-4F'
                );
              
                console.log('Email sent:', JSON.stringify(response));
        
                setIsModalOpen(true);
            } catch (error) {
                toast.error('Error sending email:', error);
            }
            
            resetForm(); 
            
            console.log('All Form Data:', allFormData);
        }
    };

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

    return(
        <BoxMiscount>
            <BoxAnchor>
                <TitleMiscount name="miscount">Прорахунок вартості</TitleMiscount>
            </BoxAnchor>
            <BoxButtonWindow>
                <ButtonWindow type='button' onClick={() => handleButtonClick(windowPhoto2)}>
                    <SchemaImage src={dvostulkoveSchema71} alt="Odnostulkove Schema 70" />
                    <NameSchema>Одностулкове</NameSchema>
                </ButtonWindow>
                <ButtonWindowTwo type='button' onClick={() => handleButtonClick(windowPhoto3)}>
                    <BoxImageSchema>
                        <SchemaImages src={dvostulkoveSchema71} alt="Dvostulkove Schema71"/>
                        <SchemaImages src={dvostulkoveSchema71} alt="Dvostulkove Schema72" />
                    </BoxImageSchema>
                    <NameSchema>Двостулкове вікно</NameSchema>
                </ButtonWindowTwo>
                <ButtonWindowTree type='button' onClick={() => handleButtonClick(windowPhoto1)}>
                    <BoxImageSchema>
                        <SchemaImagesSmall src={dvostulkoveSchema71} alt="trystulkowe73" width={46} />
                        <SchemaImagesSmall src={dvostulkoveSchema71} alt="trystulkowe74" width={46} />
                        <SchemaImagesSmall src={dvostulkoveSchema71} alt="trystulkowe73" width={46} />
                    </BoxImageSchema>
                    <NameSchema>Трьохстулкове вікно</NameSchema>
                </ButtonWindowTree>
                <ButtonWindowFor type='button' onClick={() => handleButtonClick(windowPhoto4)}>
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
                <Formik initialValues={initialValue} onSubmit={handleFirstFormSubmit}>
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
                        <AdditionalList htmlFor="dropdownValue">
                            <MdKeyboardArrowDown size={iconSize.sm} style={{
                                    position: 'absolute',
                                    right: '8px',
                                    top: '-1px',
                                    color: 'var(--brand-gray)'
                            }}/>
                            <AskSizeMore name="dropdownValue">
                                {({ field, form }) => (
                                    <Select
                                        isMulti
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
                        <BoxTextarea>
                            <MoreInfo htmlFor="textareaValue">Додаткова інформація</MoreInfo>
                            <Textarea as="textarea" id="textareaValue" name="textareaValue" placeholder="Потрібен профіль Rehau"/>
                        </BoxTextarea>
                    <BoxBtnSubmitMiscount>
                        <BtnSubmitMiscount type="submit">Відправити</BtnSubmitMiscount>
                    </BoxBtnSubmitMiscount>
                    </Form>
                </Formik>
            </WindowFormBox>
            <ModalMenu>
            <CloseButton  type="button">
                    <TfiClose size={iconSize.sm} />
                </CloseButton>
                <BigFormBox>
                    <TitleModal>Відправити на прорахунок</TitleModal>
                    <Formik initialValues={initialValue} onSubmit={handleSecondFormSubmit} >
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