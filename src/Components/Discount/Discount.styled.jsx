import styled from '@emotion/styled';
// import serviceMobile from '../../img/discount/service-maintenance-mobile.png';
import serviceTablet from '../../img/discount/service-maintenance-tablet.png';
import serviceDesktop from '../../img/discount/service-maintenance-desktop.png';
import { Field, ErrorMessage } from 'formik';


export const MainBoxDiscount = styled.div`
    padding: 0 16px 60px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)), url(${serviceTablet});
    border-radius: 3px;
    background-repeat: no-repeat;
    background-size: initial;
    background-repeat: no-repeat;
    background-position: 50% 88%;
    z-index: -1;
    
    @media (min-width: 540px) {
        background-image: url(${serviceTablet});
        background-position: 44% 86%;
        padding: 0 40px 60px;
    }

    @media (min-width: 768px) {
        background-position: 44% 85%;
    }

    @media (min-width: 800px) {
        background-image: url(${serviceTablet});
        background-position: 76% 85%;
    }

    @media (min-width: 812px) {
        background-position: 76% 85%;
    }

    @media (min-width: 820px) {
        background-position: 77% 86%;
    }
        
    @media (min-width: 912px) {
        background-image: url(${serviceDesktop});
        padding: 0 80px 60px;
        background-position: 50% 87%;
    }

    @media (min-width: 1920px) {
        padding: 0 290px 60px;
    }
`;

export const TitleDiscount = styled.a`
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.24px;
    color: var(--text-black);
    margin-bottom: 32px;
    position: relative;



    @media (min-width: 768px) {
        font-family: Montserrat;
        font-size: 40px;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -1px;
    }
    
    @media (min-width: 1280px) {
        &::before {
            content: '';
            height: 0.5px;
            background-color: #c4c4c4;
            display: block;
            position: absolute;
            top: 82px;
            left: -307px;
            width: 1099px;
        }
    }
    
    @media (min-width: 1440px){
        &::before {
            content: '';
            height: 0.5px;
            background-color: #c4c4c4;
            display: block;
            position: absolute;
            top: 82px;
            left: -388px;
            width: 1153px;
        }
    }

`;


export const BoxAnchor = styled.div`
    margin-bottom: 32px;
    text-align: center;

    @media (min-width: 1280px) {
        margin-bottom: 60px;
    }
`;

export const BoxNumberTextFirst = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    color: var(--brand-orange);
`;

export const BoxNumberText = styled.div`
    display: flex;
    gap: 16px;

`;

export const ContainerTextQuestion1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 173px;

    @media (min-width: 1180px) {
        width: 230px; 
    }

    @media (min-width: 1280px){
        width: 270px;
    }

`;

export const ContainerTextQuestion2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 173px;

    @media (min-width: 1180px) {
        width: 230px; 
    }

    @media (min-width: 1280px){
        width: 273px;
    }
`;

export const ContainerTextQuestion3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 173px;

    @media (min-width: 1180px) {
        width: 230px; 
    }

    @media (min-width: 1280px){
        width: 406px;
    }
`;


export const AllQuestionsBox = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        gap: 24px;
        margin-bottom: 20px;
    }

    @media (min-width: 912px) {
        margin-bottom: 80px;
    }

    @media (min-width: 1024px) {
        gap: 45px;
    }

    @media (min-width: 1180px) {
        gap: 55px;
    }

    @media (min-width: 1280px){
        margin-bottom: 32px;
    }
`;

export const ContainerQuestion = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
        width: 173px;
    }
`;

export const TextQuestion = styled.h3`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);
    margin-bottom: 8px;

    @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 1.33;
        letter-spacing: -0.24px;
    }

    @media (min-width: 1280px) {
        font-size: 24px;
        line-height: 1.33;
        letter-spacing: -0.24px;
    }
`;

export const AnswerText = styled.p`
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    margin-bottom: 27px;
    margin-left: 48px;

    @media (min-width: 768px){
        margin-left: 0;
    }
`;

export const AnswerTextDesktop = styled.p`
    display: none;

    @media (min-width: 1280px) {
        display: block;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42;
        letter-spacing: 0.21px;
        margin-bottom: 27px;
    }
`

export const Selector = styled.select`
    border: none;
    width: 300px;
    background-color: white;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);
`;

export const SelectorBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 27px;
    margin-bottom: 27px;
`;

export const BoxMobile = styled.div`

    @media (min-width: 767px) {
        display: none;
    }
`;

export const FonBox = styled.div`
    display: flex;
    align-items: center;
    width: 210px;

    @media (min-width: 320px) {
        justify-content: center;
        width: 295px;
    }

    @media (min-width: 360px) {
        width: 330px;
    }

    @media (min-width: 390px) {
        width: 360px;
    }

    @media (min-width: 412px) {
        width: 395px;
    }

    @media (min-width: 540px) {
        width: 435px;
    }

    @media (min-width: 768px) {
        justify-content: flex-end;
        width: 697px;
    }

    @media (min-width: 800px) {
        width: 735px;
    }

    @media (min-width: 912px) {
        width: 791px;
    }

    @media (min-width: 1024px) {
        width: 880px;
    }

    @media (min-width: 1054px) {
        width: 980px;
    }

    @media (min-width: 1124px) {
        width: 1000px;
    }

    @media (min-width: 1180px) {
        width: 1045px;
    }

    @media (min-width: 1220px) {
        width: 1075px;
    }
    
    @media (min-width: 1250px) {
        width: 1098px;
    }

    @media (min-width: 1280px) {
        width: 1140px;
    }

    @media (min-width: 1335px) {
        width: 1190px;
    }

    @media (min-width: 1440px) {
        width: 1300px;
    }

    @media (min-width: 1500px) {
        width: 1360px;
    }
`;

export const NamesInputs = styled.span`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-white);

    @media (min-width: 912px){
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: var(--text-black);
    }
`;

export const LabelInput = styled.label`
    display: flex;
    flex-direction: column;
`;

export const WindowText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputDiscount = styled(Field)`
    height: 30px;
    margin-bottom: 12px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--brand-gray);
    border-radius: 3px;
    border: 2px solid rgba(0, 0, 0, 0.3);

    @media (min-width: 768px){
        width: 334px;
    }

    @media (min-width: 1280px) {
        width: 410px;
        height: 40px;
    }

`;

export const TextareaDiscount = styled.textarea`
    height: 80px;
    margin-bottom: 12px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--brand-gray);
    resize: none;
    border-radius: 3px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    padding: 10px 16px;

    @media (min-width: 688px){
        width: 310px;
    }

    @media (min-width: 1280px){
        width: 385px;
        height: 80px;
    }
`;

export const BtnDiscount = styled.button`
    padding: 12px 10px;
    background-color: var(--brand-orange);
    border: 1px solid var(--brand-orange);
    border-radius: 3px;
    width: 210px;
    color: var(--text-white);
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    
    &:hover, &:focus {
        background-image: linear-gradient(to left, #DF5306, #FC9850);
    }

    @media (min-width: 360px) {
        padding: 12px 20px;
        width: 343px;
    }

    @media (min-width: 768px){
        width: 343px;
        padding: 16px 24px;
    }

    @media (min-width: 1280px){
        width: 208px;
        padding: 8px 16px;
        font-family: Inter;
        font-size: 19px;
        font-weight: 400;
        line-height: 1.5;
    }
`;

export const FormDiscount = styled.div`


    @media (min-width: 1280px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 474px;
        height: 398px;
        border-radius: 16px;
        background: rgba(0, 0, 0, 0.20);
        backdrop-filter: blur(12.5px);
    }
;`

/*---------------- Feedback Modal ------------------------*/

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

export const MessageErr = styled(ErrorMessage)`
    margin-bottom: 16px;
    color: var(--error-color);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
`;