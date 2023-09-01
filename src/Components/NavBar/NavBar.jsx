import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
        <p><Logo src={logo} alt="logo"/></p>
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
              <p><Logo src={logo} alt="logo" width="76"/></p>
            </BoxLogo>
            <MobileBox>
              <ItemLink>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleModal}
                >
                 <MobilLink>Про нас</MobilLink>
                </Link>
              </ItemLink>
              <ItemLink><Link
                  activeClass="active"
                  to="assortment"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleModal}>
                  <MobilLink>Профільні системи</MobilLink>
                  </Link>
                </ItemLink>
              <ItemLink><Link
                  activeClass="active"
                  to="miscount"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleModal}>
                    <MobilLink>Прорахунок вартості</MobilLink>
                  </Link>
              </ItemLink>
              <ItemLink><Link
                  activeClass="active"
                  to="discount"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleModal}>
                    <MobilLink>Як отримати знижку?</MobilLink>
                  </Link>
              </ItemLink>
              <ItemLink><Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleModal}>
                  <MobilLink>Виконані роботи</MobilLink>
                </Link>
              </ItemLink>
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
          <li> 
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <DesktopLink>Про нас</DesktopLink>
            </Link>
          </li>
          <li> 
            <Link
              activeClass="active"
              to="assortment"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
            <DesktopLink>Профілі</DesktopLink>
            </Link>
          </li>
          <li> 
            <Link
              activeClass="active"
              to="miscount"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <DesktopLink>Прорахунок</DesktopLink>
            </Link>
          </li>
          <li> 
            <Link
              activeClass="active"
              to="discount"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <DesktopLink>Як отримати знижку?</DesktopLink>              
            </Link>
          </li>
          <li> 
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <DesktopLink>Виконані роботи</DesktopLink>
            </Link>
          </li>
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

export default NavBar;