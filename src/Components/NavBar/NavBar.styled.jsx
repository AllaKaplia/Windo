import styled from '@emotion/styled';


export const Navigation = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 12px;
    gap: 100px;
    color: var(--text-black);
    background-color: var(--text-white);
    border-bottom: 0.5px solid var(--grin-text);

    @media (min-width: 325px) {
        gap: 0px;
    }

    @media (min-width: 640px) {
        justify-content: space-between;
    }

    @media (min-width: 688px){
        gap: 0;
        padding: 17px 40px;
    }

    @media (min-width: 1280px) {
        justify-content: center;
        align-items: center;
        padding: 0px 45px;
    }

    @media (min-width: 1440px) {
        padding: 0 80px;
    }
`;

export const MobilBox = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
`;

export const BurgerMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    @media (min-width: 325px) {
        gap: 12px;
    }
`;

export const BurgerBtn = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: var(--brand-orange);
`;

export const MobileMenu = styled.div`
    position: relative;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 42px;
    left: 255px;
    border: none;
    background-color: transparent;
    color: var(--brand-orange);
`;

export const MobileBox = styled.ul`
    padding-top: 25px;
    margin-bottom: 26px;
`;

export const MobilLink = styled.a`
    font-family: Inter;
    font-size: 20px;
    line-height: 1.5;
    color: var(--text-black);
`;

export const MobileText = styled.p`
    font-family: Inter;
    font-size: 20px;
    line-height: 1.5;
    color: var(--text-black);
    margin-bottom: 16px;
`;

export const MobileLists = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 16px;
`;

export const TabletPhone = styled.a`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        font-family: Inter;
        font-size: 20px;
        line-height: 1.5;
        color: var(--brand-orange);
        margin-left: 16px;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const DesktopBox = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 65px;       
    }

    @media (min-width: 1154px) {
        gap: 25px;
    }

    @media (min-width: 1280px) {
        gap: 8px;
    }

    
    @media (min-width: 1154px) {
        gap: 0;
    }
`;

export const DesktopList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media (min-width: 800px) {
        gap: 15px;
    }

    @media (min-width: 1280px) {
        gap: 12px;
        margin-right: 20px;
    }

    @media (min-width: 1440px) {
        gap: 16px;
        margin-right: 80px;
    }
`;

export const DesktopLink = styled.a`
    font-family: Inter;
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: 0.21px;
    color: var(--text-black);

    @media (min-width: 1280px){
        font-size: 16px;
        line-height: 1.5; 
        &:hover, &:focus {
            color: var(--brand-orange);
        }
    }
`;

export const DesktopSocial = styled.ul`
    display: none;

    @media (min-width: 1154px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin-right: 24px;
    }
`;

export const DesktopTel = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-family: Inter;
    font-size: 20px;
    line-height: 1.5;
    color: var(--brand-orange);
`;

export const DesktopPhone = styled.a`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        font-family: Inter;
        font-size: 20px;
        line-height: 1.5;
        color: var(--brand-orange);
    }
`;

export const DeskPhoneBox = styled.div`
    display: none;

    @media (min-width: 1280px) {
        margin-left: 24px;
    }
`;

export const IconsSocial = styled.a`
    color: var(--brand-orange);
    
    &:hover, &:focus {
        color: linear-gradient(to left, #DF5306, #FC9850);
    }
`;

export const MobilTel = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    font-family: Inter;
    font-size: 20px;
    line-height: 1.5;
    color: var(--brand-orange);
`;

export const BoxSocial = styled.div`
    margin-bottom: 56px;
`;

export const BoxLogo = styled.div`
    margin-top: 35px;
`;

export const ItemLink = styled.li`
    margin-bottom: 14px;
`;

export const Logo = styled.img`
    width: 76px;
    
    @media (min-width: 768px) {
        width: 95px;
        margin-right: 48px;
    }
    
    @media (min-width: 1280px) {
        width: 193px;
        margin-right: 30px;
    }

    @media (min-width: 1440px) {
        margin-right: 60px;
    }
`;