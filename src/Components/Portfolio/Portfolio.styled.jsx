import styled from '@emotion/styled';

export const ContainerPortfolio = styled.div`
    padding: 0 16px 60px;
    text-align: center;
    
    @media (min-width: 768px) {
        padding: 0 80px 40px;
    }

    @media (min-width: 1440px) {
        padding: 0 100px 40px;
    }
`;

export const BoxAnchor = styled.div`
    margin-bottom: 32px;
    text-align: center;
`;

export const TitlePortfolio = styled.a`
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

export const BoxButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        margin-bottom: 24px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 32px;
    }
`;

export const BtnPortfolio = styled.button`
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 3px;
    background-color: var(--brand-gray);
    color: var(--text-white);
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42;
    letter-spacing: 0.21px;
    text-align: center;
    border-color: transparent;

    &:hover, &:focus {
        background-image: linear-gradient(to left, #DF5306, #FC9850);
    }
    
    &.active  {
        background-color: var(--brand-orange);
        color: var(--text-black);
    }
`;

export const PhotoPortfolio = styled.img`
    margin-bottom: 16px;

`;