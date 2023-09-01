import styled from '@emotion/styled';


export const BoxAssortment = styled.div`
    padding: 0 16px 60px;

    @media (min-width: 768px) {
        padding: 0 40px 60px;
    }

    @media (min-width: 1280px) {
        padding: 0 80px 60px;
    }
`;

export const TitleAssortment = styled.a`
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.24px;
    color: var(--text-black);

    @media (min-width: 360px) {
        font-size: 25px;
    }

    @media (min-width: 768px) {
        font-family: Montserrat;
    }

    @media (min-width: 1024px) {
        font-size: 40px;
    }

    @media (min-width: 1280px) {
        font-family: Montserrat;
        line-height: 1.3;
        letter-spacing: -1px;
    }
`;

export const BoxAnchor = styled.div`
    margin-bottom: 32px;
    text-align: center;
`;

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    margin-bottom: 24px;

    @media (min-width: 375px) {
        gap: 32px;
    }
`;

export const BtnAssortment = styled.button`
    border: none;
    background-color: transparent;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    padding-bottom: 11px;
    color: var(--text-black);

    &.active {
        border-bottom: 3px solid orange;
        font-family: Inter;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.5;
    }
`;

export const ActiveCategoryStyle = styled.button`
    border-bottom: 3px solid orange;
    font-family: Inter;
    font-size: 20px;
    padding-bottom: 11px;
    font-weight: 700;
    line-height: 1.5;
`;

export const NameProduct = styled.h3`
    margin-top: 16px;
    margin-bottom: 16px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5; 
    text-align: center;
    color: var(--text-black);

    @media (min-width: 640px) {
        font-size: 16px;
    }

    @media (min-width: 768px) {
        font-size: 18px;
    }
`;

export const BoxImagesSlider = styled.div`
    &.slick-slider {
        text-align: center;
    }
`;

export const ImagesSlickSlide = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 180px;

    @media (min-width: 360px) {
        width: 205px;
    }

    @media (min-width: 375px) {
        width: 220px;
    }

    @media (min-width: 640px) {
        width: 170px;
    }

    @media (min-width: 800px) {
        width: 190px;
    }

    @media (min-width: 912px) {
        width: 215px;
    }

    @media (min-width: 1024px) {
        width: 210px;
    }

    @media (min-width: 1280px) {
        width: 240px;
    }

    @media (min-width: 1440px) {
        width: 270px;
    }

`;