import styled from '@emotion/styled';

export const ContainerAdvantages = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: var(--main-background);

    @media (min-width: 1280px) {
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;

export const ListAdvantages = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 26px;

    @media (min-width: 540px) {
        gap: 25px;
    }

    @media (min-width: 768px){
        gap: 9px;
    }

    @media (min-width: 800px) {
        gap: 24px;
    }

    @media (min-width: 1024px) {
        gap: 35px;
    }

    @media (min-width: 1280px) {
        gap: 10px;
    }
`;

export const ItemAdvantages = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const TitleAdvantages = styled.h3`
    width: 163px;
    font-family: Inter;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;

    @media (min-width: 768px) {
        width: 106px;
        font-size: 14px;
    }

    @media (min-width: 1024px) {
        width: 120px;
        font-size: 16px;
    }

    @media (min-width: 1280px) {
        width: 193px;
        font-size: 20px;
        line-height: 1.5;
    }
`;

export const ImagesAdvantages = styled.img`
    width: 72px;
    height: 72px;

    @media (min-width: 768px){
        width: 44px;
        height: 44px;
    };

    @media (min-width: 1280px) {
        width: 64px;
        height: 64px;   
    }
`;