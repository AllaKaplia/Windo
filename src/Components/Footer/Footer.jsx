
import Logo from '../../img/Logo-Windo.png';
import { AiOutlineMail } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { FaViber } from 'react-icons/fa';
import { RiTelegramLine, RiFacebookCircleLine } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { BoxContacts, BoxSocContact, ContainerFooter, ContainerSoc, EndText, FooterBoxContacts, IndividualContact, IndividualLink, LinkSocial, LogoFooter, SocialFooterContainer, TextContacts, ViberTelegramBox } from './Footer.styled';
import { iconSize } from '../../constants/iconSize';

const Footer = () => {
    return (
        <ContainerFooter>
            <FooterBoxContacts>
                <LogoFooter src={Logo} alt="logo" />
                <BoxSocContact>
                    <BoxContacts>
                        <AiOutlineMail size={iconSize.md}/> <TextContacts>windo1@ukr.net</TextContacts>  
                    </BoxContacts>
                    <BoxContacts>
                    <SlLocationPin size={iconSize.md}/> <TextContacts>м. Київ. Вул. Згурівська, 13</TextContacts>  
                    </BoxContacts>
                    <BoxContacts>
                    <MdOutlineLocalPhone size={iconSize.md}/> <TextContacts>+38 (067) 772-10-77</TextContacts>  
                    </BoxContacts>
                </BoxSocContact>
            </FooterBoxContacts>
            <ContainerSoc>
                <ViberTelegramBox>
                    <IndividualContact>
                        <IndividualLink href="https://viber.click/+0677721077"><FaViber size={iconSize.md} color={'var(--brand-orange)'} />Viber</IndividualLink>
                    </IndividualContact>
                    <IndividualContact>
                        <IndividualLink href="https://web.telegram.org/k/#@Windocomua">                        <RiTelegramLine size={iconSize.md} color={'var(--brand-orange)'} />Telegram</IndividualLink>
                    </IndividualContact>
                </ViberTelegramBox>
                <SocialFooterContainer>
                    <LinkSocial href="https://www.facebook.com/windo.Kiev/"><RiFacebookCircleLine size={iconSize.md}/></LinkSocial>
                    <LinkSocial href="https://www.youtube.com/channel/UCoWoMR1Hqel9_LpjE7kF6cQ"><AiOutlineYoutube size={iconSize.md}/></LinkSocial>
                    <LinkSocial href="https://www.instagram.com/windo_ua/"><AiOutlineInstagram size={iconSize.md}/></LinkSocial>
                </SocialFooterContainer>
            </ContainerSoc>
            <EndText>Win.Do © 2023 Всі права захищені</EndText>
        </ContainerFooter>
    )
};

export default Footer;