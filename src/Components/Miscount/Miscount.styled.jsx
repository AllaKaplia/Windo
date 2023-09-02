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

    @media (min-width: 540px) {
        gap: 35px 45px;
    }

    @media (min-width: 640px) {
        gap: 15px 10px;
    }

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
    width: 140px;
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

    @media (min-width: 640px) {
        height: 83px;
    }

    @media (min-width: 768px) {
        height: 102px;
        width: 77px;
    }

`;

export const SchemaImages = styled.img`
    height: 102px;

    @media (min-width: 640px) {
        height: 83px;
    }

    @media (min-width: 768px) {
        height: 102px;
    }

    @media (min-width: 1280px){
        width: 85px;
    }
`;

export const SchemaImagesSmall = styled.img`
    height: 83px;

    @media (min-width: 768px) {
        height: 102px;
        width: 45px;
    }

    @media (min-width: 1280px){
        width: 60px;
    }
`;

export const NameSchema = styled.p`
    font-family: Inter;
    font-size: 11px;
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
    margin-bottom: 31px;

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
    display: flex;
    flex-direction: column;
    gap: 12px;
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
    padding-top: 8px;
    padding-bottom: 8px;
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
    gap: 10px;

    @media (min-width: 768px) {
        justify-content: flex-start;
        gap: 24px;
    }
`;

export const BoxAskSize = styled.div`
    margin-bottom: 25px;

    @media (min-width: 1280px) {
        width: 518px;
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
    width: 85px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    @media (min-width: 320px) {
        width: 105px;
    }

    @media (min-width: 360px) {
        width: 125px;
    }

    @media (min-width: 375px) {
        width: 132px;
    }
    
    @media (min-width: 390px) {
        width: 140px;
    }

    @media (min-width: 412px) {
        width: 153px;
    }

    @media (min-width: 540px) {
        width: 215px;
    }

    @media (min-width: 640px) {
        width: 265px;
    }

    @media (min-width: 768px) {
        width: 300px;
    }

    @media (min-width: 800px) {
        width: 315px;
    }

    @media (min-width: 812px) {
        width: 321px;
    }

    @media (min-width: 820px) {
        width: 325px;
    }

    @media (min-width: 850px) {
        width: 340px;
    }

    @media (min-width: 860px) {
        width: 345px;
    }

    @media (min-width: 880px) {
        width: 356px;
    }

    @media (min-width: 900px) {
        width: 365px;
    }

    @media (min-width: 912px) {
        width: 370px;
    }

    @media (min-width: 930px) {
        width: 383px;
    }

    @media (min-width: 950px) {
        width: 393px;
    }

    @media (min-width: 970px) {
        width: 400px;
    }

    @media (min-width: 990px) {
        width: 410px;
    }

    @media (min-width: 1000px) {
        width: 415px;
    }

    @media (min-width: 1015px) {
        width: 422px;
    }

    @media (min-width: 1024px) {
        width: 427px;
    }

    @media (min-width: 1050px) {
        width: 440px;
    }

    @media (min-width: 1070px) {
        width: 450px;
    }

    @media (min-width: 1090px) {
        width: 460px;
    }

    @media (min-width: 1110px) {
        width: 470px;
    }

    @media (min-width: 1130px) {
        width: 482px;
    }

    @media (min-width: 1150px) {
        width: 492px; 
    }

    @media (min-width: 1170px) {
        width: 502px; 
    }

    @media (min-width: 1180px) {
        width: 507px; 
    }

    @media (min-width: 1215px) {
        width: 523px;
    }

    @media (min-width: 1240px) {
        width: 535px;
    }

    @media (min-width: 1260px) {
        width: 545px;
    }

    @media (min-width: 1280px) {
        width: 213px;
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
    width: 345px;
    appearance: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    

    @media (min-width: 768px) {
        width: 688px;
        height: 45px;
    }
`;

export const MoreInfo = styled.label`
    font-family: Inter;
    font-size: 16px;
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
    width: 215px;
    margin-bottom: 20px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--brand-gray);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    @media (min-width: 320px) {
        width: 255px;
    }

    @media (min-width: 360px) {
        width: 295px;
    }

    @media (min-width: 375px) {
        width: 309px;
    }

    @media (min-width: 390px) {
        width: 324px;
    }

    @media (min-width: 412px) {
        width: 347px;
    }

    @media (min-width: 540px) {
        width: 470px;
    }

    @media (min-width: 640px) {
        width: 575px;
    }

    @media (min-width: 768px) {
        width: 661px;
        height: 129px;
    }

    @media (min-width: 800px) {
        width: 685px;
    }

    @media (min-width: 812px) {
        width: 696px;
    }

    @media (min-width: 820px) {
        width: 705px;
    }

    @media (min-width: 912px) {
        width: 795px;
    }

    @media (min-width: 1024px) {
        width: 910px;
    }

    @media (min-width: 1035px) {
        width: 1021px;
    }

    @media (min-width: 1154px) {
        width: 1040px;
    }
    
    @media (min-width: 1180px) {
        width: 1070px;
    }

    @media (min-width: 1215px) {
        width: 1110px;
    }

    @media (min-width: 1230px) {
        width: 1130px;
    }

    @media (min-width: 1260px) {
        width: 1150px;
    }

    @media (min-width: 1280px) {
        width: 485px;
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
    width: 250px;
    color: var(--text-white);
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;

    &:hover, &:focus {
        background-image: linear-gradient(to left, #DF5306, #FC9850);
    }

    @media (min-width: 320px) {
        width: 290px;
    }

    @media (min-width: 360px) {
        width: 328px;
    }

    @media (min width: 375px) {
        width: 351px;
    }

    @media (min-width: 390px) {
        width: 360px;
    }

    @media (min-width: 393px) {
        width: 361px;
    }

    @media (min-width: 412px) {
        width: 380px;
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

    @media (min-width: 540px) {
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

/*------------------------- Feedback Modal ---------------------------*/

export const FeedbackBox = styled.div`
    width: 343px;
    height: 201px;
    background-color: white;
    padding: 16px 16px;
    margin-top: 139px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        width: 700px;
        height: 371px;

    }
`;

export const TitleFeedback = styled.h2`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);
    margin-bottom: 46px;

    @media (min-width: 768px) {
        font-family: Montserrat;
        font-size: 36px;
        font-weight: 500;
        line-height: 1.22;
        margin-bottom: 75px;
    }
`;

export const ImageFeedback = styled.img`
    width: 102px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 46px;



    @media (min-width: 768px) {
        width: 203px;
        margin-bottom: 75px;
    }
`;

export const TextFeedback = styled.p`
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42
    letter-spacing: 0.21px;
    color: var(--brand-gray);

    @media (min-width: 768px) {
        font-size: 24px;
        font-weight: 400;
        line-height: 1.33:
        letter-spacing: -0.24px;
    }
`;
