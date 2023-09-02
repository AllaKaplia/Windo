import styled from '@emotion/styled';
import { iconSize } from '../../constants/iconSize';

export const ContainerFooter = styled.div`
    padding: 16px;
    background-color: var(--footer-fon);

    @media (min-width: 768px) {
        padding: 0 40px 4px;
        background-color: var(--text-white);
    }

    @media (min-width: 1440px) {
        padding: 0 80px 8px;
    }

    @media (min-width: 1920px) {
        padding: 0 290px 60px;
    }
`;

export const LogoFooter = styled.img`
    width: 164px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        width: 193px;
    }

    @media (min-width: 1440px) {
        margin-left: 0;
        margin-right: 0;
    }
`;

export const BoxContacts = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    margin-bottom: 16px;
    color: var(--brand-orange);

    @media (max-width: 600px) {
        svg {
            width: ${iconSize.sm}px;
            height: ${iconSize.sm}px;
        }
    }

    @media (min-width: 768px) {
        gap: 6px;
        margin-bottom: none;
    }

    @media (min-width: 1440px) {
        gap: 8px;
    }
`;

export const TextContacts = styled.p`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);

    @media (min-width: 768px){
        font-size: 15px;
    }
`;

export const EndText = styled.p`
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--text-black);
    text-align: center;
    margin-top: 16px;
`;

export const BoxSocContact = styled.div`

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    @media (min-width: 820px) {
        gap: 24px;
    }

    @media (min-width: 900px) {
        gap: 40px;
    }

    @media (min-width: 1024px) {
        gap: 85px;
    }

    @media (min-width: 1280px) {
        gap: 140px;
    }

    @media (min-width: 1440px) {
        gap: 32px;
    }
`;

export const FooterBoxContacts = styled.div`
    background-color: var(--footer-fon);
    padding: 24px 6.5px;

    
    @media (min-width: 1440px) {
        display: flex;
        justify-content: center;
        gap: 24px;
        align-items: center;
        padding: 70px 120px 69px;
    }
`;

export const ContainerSoc = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
        padding: 24px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`;

export const ViberTelegramBox = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    justify-content: flex-start;
`;

export const IndividualContact = styled.div`
 
    color: var(--brand-orange);
`;

export const IndividualLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);
`;

export const SocialFooterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    justify-content: flex-end;
`;

export const LinkSocial = styled.a`
    color: var(--brand-orange);
`;