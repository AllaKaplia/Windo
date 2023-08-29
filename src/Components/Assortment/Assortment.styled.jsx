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
    line-height: 1/33;
    letter-spacing: -0.24px;
    color: var(--text-black);

    @media (min-width: 1280px) {
        font-family: Montserrat;
        font-size: 40px;
        font-weight: 400;
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
    gap: 32px;
    margin-bottom: 24px;
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
`;

export const BoxImagesSlider = styled.div`
    .slick-slider {
        text-align: center;
    }
    
    .slick-slide img {
        display: block;
        margin: 0 auto;
    }
`;