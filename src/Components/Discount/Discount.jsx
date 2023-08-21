import { Form, Formik, Field } from 'formik';
// import * as yup from 'yup';
import { iconSize } from '../../constants/iconSize';
import { PiNumberCircleOneLight, PiNumberCircleTwoLight, PiNumberCircleThreeLight } from 'react-icons/pi';
import { AllQuestionsBox, AnswerText, AnswerTextDesktop, BoxAnchor, BoxMobile, BoxNumberText, BoxNumberTextFirst, BtnDiscount, ContainerTextQuestion1, ContainerTextQuestion2, ContainerTextQuestion3, FonBox, FormDiscount, InputDiscount, LabelInput, MainBoxDiscount, NamesInputs, Selector, SelectorBox, TextareaDiscount, TextQuestion, TitleDiscount, WindowText } from './Discount.styled';

// const schema = yup.object().shape({
//     name: yup
//       .string()
//       .matches(/^([a-zA-Zа-яА-ЯґҐєЄіІїЇ' -]*[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+[' -]*){1,}$/, 'Name is invalid')
//       .required('Name is required'),
//     phone: yup
//       .string()
//       .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Phone number is invalid')
//       .required('Phone number is required'),
//     textareaValue: yup
//       .string()
//       .max(200, 'Additional information should not exceed 200 characters')
// });

const initialValues = {
    name: '',
    phone: '',
    textareaValue: '',
}

const Discount = () => {
    const handleFormSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    }

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
                <SelectorBox>
                    <PiNumberCircleTwoLight size={iconSize.md} />
                    <Selector name="dropdown" placeholder='Домовтесь про замір'>
                        <option value=""label="Домовтесь про замір"></option>
                        <option value="option1">Наш менеджер  Вам зателефонує </option>
                    </Selector>
                </SelectorBox>
                <SelectorBox>
                    <PiNumberCircleThreeLight size={iconSize.md} />
                    <Selector name="dropdown" id='dropdown' placeholder='Знижка до 70%'>
                        <option value="" label="Знижка до 70%" />
                        <option value="discount" disabled>Ми прорахуємо та повідомимо вартість Вашої конструкції</option>
                    </Selector>
                </SelectorBox>
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
                    <PiNumberCircleTwoLight size={iconSize.md}/>
                    <ContainerTextQuestion2>
                        <TextQuestion>Домовтесь про замір</TextQuestion>
                        <AnswerText>Наш менеджер  Вам зателефонує Вам</AnswerText>
                    </ContainerTextQuestion2>
                </BoxNumberText>
                <BoxNumberText>
                    <PiNumberCircleThreeLight size={iconSize.md}/>
                    <ContainerTextQuestion3>
                        <TextQuestion>Отримайте прорахунок зі знижкою до 70%</TextQuestion>
                        <AnswerTextDesktop>Ми прорахуємо та повідомимо вартість Вашої конструкції</AnswerTextDesktop>
                    </ContainerTextQuestion3>
                </BoxNumberText>
            </AllQuestionsBox>
            <FonBox>
                <Formik initialValues={initialValues} onSubmit={handleFormSubmit} >
                    <FormDiscount>
                        <Form autoComplete='off'>
                            <LabelInput>
                                <NamesInputs>Ім’я</NamesInputs>
                                <InputDiscount type="text" name='name' placeholder="Введіть ім’я"/>
                            </LabelInput>
                            <LabelInput>
                                <NamesInputs>Номер телефону</NamesInputs>
                                <InputDiscount type="text" name='phone' placeholder="Введіть номер"/>
                            </LabelInput>
                            <WindowText>
                                <NamesInputs htmlFor="textareaValue">Додаткова інформація</NamesInputs>
                                <Field name="textareaValue">
                                    {({ field }) => (
                                        <TextareaDiscount {...field} id="textareaValue" placeholder="Хочу отримати знижку! Зателефонуйте о 12:00" />
                                    )}
                                </Field>
                            </WindowText>
                            <BtnDiscount type='submit'>Отримати знижку</BtnDiscount>
                        </Form>
                    </FormDiscount>
                </Formik>
            </FonBox>
        </MainBoxDiscount>
    )
};

export default Discount;