import React, { useState } from 'react';
import logo from '../../img/Logo-Windo.png';
import ModalMenu from '../ModalMenu/ModalMenu';
import { iconSize } from '../../constants';
import { 
  BoxLogo, 
  BoxSocial, 
  BurgerBtn, 
  BurgerMenu, 
  CloseBtn, 
  DesktopBox, 
  DesktopLink, 
  DesktopList, 
  DesktopPhone, 
  DesktopSocial, 
  DesktopTel, 
  IconsSocial, 
  ItemLink, 
  Logo, 
  MobilBox, 
  MobileBox, 
  MobileLists, 
  MobileText, 
  MobilLink, 
  MobilTel, 
  Navigation, 
  TabletPhone 
} from './NavBar.styled';
import { PiFacebookLogoLight } from 'react-icons/pi';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { MdOutlinePhone } from 'react-icons/md';
import { RiTelegramLine } from 'react-icons/ri';
import { TfiClose } from 'react-icons/tfi';
import { FaViber } from 'react-icons/fa';
import { GoRows } from 'react-icons/go';

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <Navigation>
      <>
        <a href="/"><Logo src={logo} alt="logo"/></a>
      </>
      <MobilBox>
        <BurgerMenu>
          <>
            <DesktopTel href="tel:+380677721077"><MdOutlinePhone size={iconSize.md}/></DesktopTel>
          </>
          <BurgerBtn onClick={toggleModal} type="button">
            <GoRows size={iconSize.md}/>
          </BurgerBtn>
        </BurgerMenu>
        <ModalMenu isOpen={showModal} onRequestClose={toggleModal} contentLabel="Mobile Menu">
          <CloseBtn onClick={toggleModal} type="button">
            <TfiClose size={iconSize.sm} />
          </CloseBtn>
          <div>
            <BoxLogo>
              <a href="/"><Logo src={logo} alt="logo" width="76"/></a>
            </BoxLogo>
            <MobileBox>
              <ItemLink><MobilLink href="#about" onClick={toggleModal} >Про нас</MobilLink></ItemLink>
              <ItemLink><MobilLink href="#assortment" onClick={toggleModal} >Профільні системи</MobilLink></ItemLink>
              <ItemLink><MobilLink href="#miscount" onClick={toggleModal} >Прорахунок вартості</MobilLink></ItemLink>
              <ItemLink><MobilLink href="#discount" onClick={toggleModal} >Як отримати знижку?</MobilLink></ItemLink>
              <ItemLink><MobilLink href="#portfolio" onClick={toggleModal} >Виконані роботи</MobilLink></ItemLink>
            </MobileBox>
            <BoxSocial>
              <MobileText>Ми завжди на з’язку:</MobileText>
              <MobileLists>
                <li><IconsSocial href="https://viber.click/+0677721077" target="blank_"><FaViber size={iconSize.md}/></IconsSocial></li>
                <li><IconsSocial href="https://web.telegram.org/k/#@Windocomua" target="blank_"><RiTelegramLine size={iconSize.md}/></IconsSocial></li>
              </MobileLists>
              <MobileLists>
                <li><IconsSocial href="https://www.facebook.com/windo.Kiev/" target="blank_"><PiFacebookLogoLight size={iconSize.md}/></IconsSocial></li>
                <li><IconsSocial href="https://www.youtube.com/channel/UCoWoMR1Hqel9_LpjE7kF6cQ" target="blank_"><AiOutlineYoutube size={iconSize.md}/></IconsSocial></li>
                <li><IconsSocial href="https://www.instagram.com/windo_ua/" target="blank_"><AiOutlineInstagram size={iconSize.md}/></IconsSocial></li>
              </MobileLists>
            </BoxSocial>
            <>
              <MobilTel href="tel:+380677721077"><MdOutlinePhone size={iconSize.md}/>+380677721077</MobilTel>
            </>
          </div>
        </ModalMenu>
      </MobilBox>
      <DesktopBox>
        <DesktopList>
          <li><DesktopLink href="#about">Про нас</DesktopLink></li>
          <li><DesktopLink href="#assortment">Профілі</DesktopLink></li>
          <li><DesktopLink href="#miscount">Прорахунок</DesktopLink></li>
          <li><DesktopLink href="#discount">Як отримати знижку?</DesktopLink></li>
          <li><DesktopLink href="#portfolio">Виконані роботи</DesktopLink></li>
        </DesktopList>
        <DesktopSocial>
          <li><IconsSocial href="https://www.facebook.com/windo.Kiev/" target="blank_"><PiFacebookLogoLight size={iconSize.md}/></IconsSocial></li>
          <li><IconsSocial href="https://www.youtube.com/channel/UCoWoMR1Hqel9_LpjE7kF6cQ" target="blank_"><AiOutlineYoutube size={iconSize.md}/></IconsSocial></li>
          <li><IconsSocial href="https://www.instagram.com/windo_ua/" target="blank_"><AiOutlineInstagram size={iconSize.md}/></IconsSocial></li>
        </DesktopSocial>
        <div>
          <DesktopPhone href="tel:+380677721077"><MdOutlinePhone size={iconSize.md}/>+380677721077</DesktopPhone>
        </div>
      </DesktopBox>
      <>
        <TabletPhone href="tel:+380677721077"><MdOutlinePhone size={iconSize.md}/></TabletPhone>
      </>
    </Navigation>
  )
}

export default NavBar