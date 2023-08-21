import styled from '@emotion/styled';

export const BoxAbout = styled.div`
    padding: 60px 16px;

    @media (min-width: 768px) {
        padding: 80px 40px; 
    }

    @media (min-width: 1280px) {
        padding-left: 80px;
        padding-: 80px;
    }

`;

export const BoxAnchor = styled.div`
    text-align: center;
`;

export const TitleAbout = styled.a`
    margin-bottom: 32px;
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

export const DescriptionText = styled.p`
    margin-bottom: 24px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);

    @media (min-width: 768px) {
        margin-bottom: 12px;
    }
    
    @media (min-width: 1440px) {
        margin-bottom: 32px;
    }   
`;

export const DescriptionTextTablet = styled.p`
    margin-bottom: 12px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);

    @media (min-width: 1440px) {
        margin-bottom: 32px;
        font-size: 20px;
    }
`;

export const ImageMobile = styled.img`
    width: 343px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const DetailsAboutBox = styled.div`
    width: 270px;
    height: 116px;
    padding: 8px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.65);
    text-align: center;

    @media (min-width: 768px) {
        width: 180px;
        padding: 8px 10px;
        border-top: none;
        border-left: 1px solid rgba(0, 0, 0, 0.65);
    }

    @media (min-width: 1280px) {
        width: 200px;
    }
`;

export const WordBack = styled.span`
    @media (min-width: 768px) {
        display: none;
    };

    @media (min-width: 1280px) {
        display: block;
    };
`;

export const AllDetailsBox = styled.div`
    margin-bottom: 24px;

    @media (min-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
    }

    @media (min-width: 1280px) {
        display: none;
        gap: 32px;
    }
`;

export const ContainerBack = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;


export const DetailTitle = styled.p`
    margin-bottom: 4px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);

    @media (min-width: 768px) {
        font-size: 16px;
    }
`;

export const DetailText = styled.p`
    margin-bottom: 5px;
    font-family: Montserrat;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.22;
    color: var(--brand-orange);
`;

export const DetailsDescription = styled.p`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);

    @media (min-width: 768px) {
        font-size: 14px;
        font-weight: 600;
        line-height: 1.42;
        letter-spacing: 0.21px;
    }

    @media (min-width: 1280px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
    }
`;

export const BoxLinkAbout = styled.div`
    width: 270px;
    padding: 8px 16px;
    border: 1px solid var(--brand-orange);
    border-radius: 3px;

    &:hover, &:focus {
        color: var(--text-white);
        background-image: linear-gradient(to left, #DF5306, #FC9850);
    }
`;

export const LinkAbout = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: var(--brand-orange);
    
    &:hover, &:focus {
        color: var(--text-white);
    }
`;

export const LinkAboutText = styled.span`
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5; 
`;

export const ImageTablet = styled.img`
    display: none;

    @media (min-width: 768px){
        display: block;
        width: 332px;
        border-radius: 12px;
    }

    @media (min-width: 1280px){
        display: none;
    }
`;

export const ContainerCompany = styled.div`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 24px;
    }
`;

export const BoxInfoTablet = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

export const InfoBoxMobil = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
`;

export const BoxTabletDesktop = styled.div`
    display: block;

    @media (min-width: 768px){
        display: flex;
        flex-direction: column-reverse;
        gap: 24px;
        justify-content: space-around; 
    }
`;

export const ImageDesktop = styled.img`
    display: none;

    @media (min-width: 1280px) {
        display: block;
        width: 518px;
        border-radius: 12px;
    }
`;

export const BoxDescriptionDesk = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
    }
`;