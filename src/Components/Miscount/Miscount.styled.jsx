import styled from '@emotion/styled';
import { Field, ErrorMessage, Form } from 'formik';

export const BoxMiscount = styled.div`
    padding: 0 16px 60px;

    @media (min-width: 688px){
        padding: 0 40px 60px;
    }

    @media (min-width: 1280px){
        padding: 0 100px 60px;
    }
`;

export const BoxAnchor = styled.div`
    margin-bottom: 32px;
    text-align: center;
`;

export const TitleMiscount = styled.a`
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.24px;
    color: var(--text-black);

    @media (min-width: 768px) {
        font-family: Montserrat;
        font-size: 40px;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -1px;
    }
`;

export const BoxButtonWindow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 35px 16px;
    margin-bottom: 35px;

    @media (min-width: 768px) {
        gap: 9px;
        margin-bottom: 33px;
    }

    @media (min-width: 1024px) {
        gap: 0px;
    }

    @media (min-width: 1280px) {
        gap: 70px;
        margin-bottom: 48px;
    }

    @media (min-width: 1440px) {
        gap: 130px;
    }
`;

export const ButtonWindow = styled.button`
    width: 125px;
    background-color: transparent;
    border: none;

    @media (min-width: 768px) {
        width: 125px;
    }

    @media (min-width: 1280px) {
        width: 130px;
    }
`;

export const ButtonWindowTwo = styled.button`
    width: 163px;
    background-color: transparent;
    border: none;

    @media (min-width: 768px) {
        width: 130px;
    }

    @media (min-width: 1024px) {
        width: 150px;
    }

    @media (min-width: 1280px) {
        width: 170px;
    }
`;

export const ButtonWindowTree = styled.button`
    width: 140px;
    background-color: transparent;
    border: none;

    @media (min-width: 768px) {
        width: 178px;
    }
    
    @media (min-width: 1024px) {
        width: 177px;
    }

    @media (min-width: 1280px) {
        width: 254px;
    }
`;

export const ButtonWindowFor = styled.button`
    width: 145px;
    background-color: transparent;
    border: none;

    @media (min-width: 768px) {
        width: 195px;
    }

    @media (min-width: 1280px) {
        width: 290px;
    }
`;

export const SchemaImage = styled.img`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
    width: 77px;
    height: 102px;

`;

export const SchemaImages = styled.img`
    @media (min-width: 688px) {
        height: 102px;
    }

    @media (min-width: 1280px){
        width: 85px;
    }
`;

export const SchemaImagesSmall = styled.img`
    height: 67px;

    @media (min-width: 768px) {
        height: 102px;
    }

    @media (min-width: 1280px){
        width: 60px;
    }
`;

export const NameSchema = styled.p`
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--text-black);
`;

export const BoxImageSchema = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`;

export const MainImageWindow = styled.img`
    width: 343px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        width: 687px;
    }

    @media (min-width: 1024px) {
        width: 410px
    }
`;

export const TitleCheckbox = styled.div`
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.24px;
    color: var(--text-black);
    margin-bottom: 14px;
`;

export const CheckboxGroup = styled.div`
    margin-bottom: 20px;
`;

export const LabelCheckbox = styled.label`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`;

export const CheckboxText = styled.span`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);
`;

export const Checkbox = styled(Field)`
    width: 16px;
    height: 16px;

    &:checked {
        background-color: var(--brand-orange);
    }
`;

export const CheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media (min-width: 768px) {
        justify-content: flex-start;
        gap: 24px;
    }
`; 

export const AskSize = styled(Field)`
    padding: 10px 16px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--brand-gray);
    margin-bottom: 16px;
    width: 132px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    @media (min-width: 768px) {
        width: 296px;
    }
`;

export const AskSizeMore = styled(Field)`
    padding: 10px 16px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--brand-gray);
    margin-bottom: 16px;
    width: 350px;
    appearance: none;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    @media (min-width: 768px) {
        width: 688px;
        height: 45px;
    }
`;

export const MoreInfo = styled.label`
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--text-black);
    margin-bottom: 4px;
`;

export const AdditionalList = styled.label`
    position: relative;
`;

export const Textarea = styled(Field)`
    resize: none;
    padding: 10px 16px;
    width: 316px;
    margin-bottom: 20px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--brand-gray);
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    @media (min-width: 768px) {
        width: 661px;
        height: 129px;
    }
`;

export const BoxTextarea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const BtnSubmitMiscount = styled.button`
    padding: 12px 20px;
    background-color: var(--brand-orange);
    border: 1px solid var(--brand-orange);
    border-radius: 3px;
    width: 351px;
    color: var(--text-white);
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;

    &:hover, &:focus {
        background-image: linear-gradient(to left, #DF5306, #FC9850);
    }

    @media (min-width: 768px){
        width: 450px;
        padding: 16px 24px;
    }

    @media (min-width: 1280px){
        width: 177px;
    }
`;

export const BoxBtnSubmitMiscount = styled.div`
    text-align: start;

    @media (min-width: 768px) {
        text-align: center;
    }

    @media (min-width: 1280px) {
        text-align: start;
    }
`;

export const BoxCheckboxes = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 48px;
        margin-bottom: 16px;
    }
`;

export const WindowFormBox = styled.div`
    @media (min-width: 1280px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        gap: 90px;
        align-items: center;
    }

    @media (min-width: 1440px) {
        gap: 135px;
    }
`;

/*--------------------------- Modal Menu ----------------------------*/

export const ContainerForForm = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    top: 50px;
    border: none;
    background-color: transparent;
    color: var(--brand-orange);
`;

export const TitleModal = styled.h1`
    margin-bottom: 16px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);
    text-align: center;

    @media (min-width: 768px) {
        font-family: Montserrat;
        font-size: 48px;
        font-weight: 500;
        line-height: 1.5;
    }
`;

export const LabelModal = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const LabelText = styled.span`
    margin-bottom: 8px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);

    @media (min-width: 768px) {
        font-family: Montserrat;
        font-size: 30px;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -1px;
    }
`;

export const Input = styled(Field)`
    width: 200px;
    height: 5px;
    padding: 16px 10px;
    border: 1px solid #4e4e4e38;
    color: var(--brand-gray);

    &:hover, &:focus {
        color: var(--brand-orange);
        border: 1px solid var(--brand-orange);
    }

    @media (min-width: 450px) {
        width: 300px;
        padding: 20px 15px;
        font-size: 17px;
    }

    @media (min-width: 768px) {
        width: 513px;
    }
`;

export const MessageErr = styled(ErrorMessage)`
    margin-bottom: 6px;
    color: var(--error-color);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
`;

export const ButtonSubmit = styled.button`
    margin-top: 24px;
    margin-bottom: 26px;
    width: 250px;
    padding: 8px 32px;
    background-color: var(--brand-orange);
    border-radius: 3px;
    border: transparent;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-white);
    background-image: none;
    transition: background-image 0.3s ease-in-out;


    @media (min-width: 450px) {
        width: 321px;
    }
`;

export const AllElementForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 830px) {
        flex-direction: column;
    }
`;

export const TextSocialForm = styled.p`
    margin-right: 4px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--text-black);

    @media (min-width: 768px) {
        font-size: 25px;
    }
`;

export const SocialForm = styled.a`
    color: var(--brand-orange);
`;

export const BoxSocialForm = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const BigFormBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
`;