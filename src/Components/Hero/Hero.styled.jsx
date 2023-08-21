import styled from '@emotion/styled';
import { Field, ErrorMessage, Form } from 'formik';
import backgroundMobile from '../../img/main-background-mobile.jpg';


export const ContainerHero = styled.div`
    background-color: var(--text-white);
    background-image: url(${backgroundMobile});
    background-repeat: no-repeat;
    background-position: 50% 100%;
    padding: 16px;

    @media (min-width: 688px) {
        background-image: none;
        padding: 40px;
    }
    
    @media (min-width: 1280px) {
        padding: 95px 80px;
    }

    @media (min-width: 1440px) {
        padding: 128px 80px;
    }    
`;

// height: 598px;
// max-width: 456px;
// position: absolute;
// top: 62%;
// left: 0%;
// z-index: -1;


export const HeroTitle = styled.h1`
    margin-bottom: 12px;
    font-family: Inter;
    font-weight: 400;
    font-size: 23px;
    line-height: 1.13;
    letter-spacing: -0.24px;
    color: var(--text-black);
    text-align: center;

    @media (min-width: 375px) {
        font-size: 24px;
    }

    @media (min-width: 768px) {
        font-size: 27px;
        font-weight: 500;
        line-height: 1.14;
        letter-spacing: -0.28px;
        text-align: start;
    }

    @media (min-width: 1280px) {
        margin-bottom: 16px;
        font-family: Montserrat;
        font-size: 48px;
        font-weight: 500;
        line-height: 1.5;
    }
`;

export const HeroBrandText = styled.h2`
    margin-bottom: 270px;
    text-align: center;
    font-family: Inter;
    font-weight: 400;
    color: var(--brand-orange);
    font-size: 15px;
    line-height: 1.5;

    @media (min-width: 375px) {
        font-size: 20px;
    }

    @media (min-width: 375px) {
        margin-bottom: 264px;
    }

    @media (min-width: 768px) {
        margin-bottom: 16px;
        font-weight: 500;
        font-size: 20px;
        text-align: start;
    }

    @media (min-width: 1280px) {
        margin-bottom: 24px;
        font-family: Montserrat;
        font-size: 36px;
        font-weight: 500;
        line-height: 1.5;
    }
`;

export const ContainerBtnText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BoxHeroText = styled.div`
    max-width: 343px;

    @media (min-width: 768px) {
        margin-bottom: 24px;
        max-width: 329px;
    }

    @media (min-width: 1280px) {
        margin-bottom: 40px;
        max-width: 690px;
    }
`;

export const HeroText = styled.p`
    margin-bottom: 20px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--grin-text);

    @media (min-width: 768px) {
        font-size: 17px;
        color: var(--text-black);
    }
`;

export const ButtonHero = styled.button`
    padding: 16px 32px;
    width: 343px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-white);
    background-color: var(--brand-orange);
    background-image: none;
    border-radius: 12px;
    border: transparent;
    transition: background-image 0.3s ease-in-out;
  
    &:hover, &:focus {
        background-image: linear-gradient(to left, #DF5306, #FC9850);
    }

    @media (min-width: 688px) {
        border-radius: 3px;
        font-size: 18px;
        width: 224px;
    }

    @media (min-width: 1280px) {
        border-radius: 3px;
        font-size: 20px;
        width: 240px;
    }
`;

export const BoxContext = styled.div`

    @media (min-width: 688px) {
        display: block;
    }
`;

export const ImgHeroTablet = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
        position: absolute;
        top: 1.8%;
        left: 53%;
    }

    @media (min-width: 1280px) {
        display: none;
    }
`;

export const ImgHeroDesktop = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: block;
        position: absolute;
        top: 1.4%;
        left: 58%;
    }
`;

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

