import aboutMobile from '../../img/img-our-company/our-company-mobile.jpg';
import aboutTablet from '../../img/img-our-company/our-company-tablet.jpg';
import aboutDesktop from '../../img/img-our-company/our-company-desktop.jpg';
import { RxExternalLink } from 'react-icons/rx';
import { iconSize } from '../../constants/iconSize';
import { Element } from 'react-scroll';
import { AllDetailsBox, BoxAbout, BoxAnchor, BoxDescriptionDesk, BoxLinkAbout, BoxTabletDesktop, ContainerBack, ContainerCompany, ContainerText, DescriptionText, DescriptionTextTablet, DetailsAboutBox, DetailsDescription, DetailText, DetailTitle, ImageDesktop, ImageMobile, ImageTablet, InfoBoxMobil, LinkAbout, LinkAboutText, TitleAbout, WordBack } from './About.styled';

const About = () => {
    return (
        <BoxAbout>
            <BoxAnchor><Element name="about" className="element"><TitleAbout>Про нас</TitleAbout></Element></BoxAnchor>
            <BoxTabletDesktop>
                <ContainerCompany>
                    <div>
                        <ContainerText>
                            <DescriptionText>Ми - група експертів, які можуть вирішити технічні завдання будь-якої складності.</DescriptionText>
                            <DescriptionText>В нашій команді працюють професійні менеджери, спеціалісти із замірювання конструкцій, досвідчені технологи та сертифіковані монтажні бригади</DescriptionText>
                        </ContainerText>
                        <BoxDescriptionDesk>
                            <DetailsAboutBox>
                                <DetailTitle>Компанія на ринку</DetailTitle>
                                <DetailText>11 років</DetailText>
                                <DetailsDescription>з 2012 року</DetailsDescription>
                            </DetailsAboutBox>
                            <DetailsAboutBox>
                                <DetailTitle>Постійні клієнти</DetailTitle>
                                <DetailText>3000 +</DetailText>
                                <DetailsDescription>В різних ЖК міста</DetailsDescription>
                            </DetailsAboutBox>
                            <DetailsAboutBox>
                                <DetailTitle>Встановлених вікон</DetailTitle>
                                <DetailText>4000 +</DetailText>
                                <DetailsDescription>В Києві та<WordBack>Київській</WordBack>області</DetailsDescription>
                            </DetailsAboutBox>
                        </BoxDescriptionDesk>
                        <ContainerBack>
                            <DescriptionTextTablet>Більше інформації про нашу компанію ви можете дізнатися на нашому сайті</DescriptionTextTablet>
                            <BoxLinkAbout>
                                <LinkAbout href="https://windo.com.ua/" target="blank">
                                    <LinkAboutText>Перейти на сайт</LinkAboutText>
                                    <RxExternalLink size={iconSize.sm}/>
                                </LinkAbout>
                            </BoxLinkAbout>
                        </ContainerBack>
                    </div>
                    <ImageDesktop src={aboutDesktop} alt="About Company"></ImageDesktop>
                    <ImageMobile src={aboutMobile} alt="About Company" ></ImageMobile>
                    <ImageTablet src={aboutTablet} alt="About Company" width={332}></ImageTablet>
                </ContainerCompany>
                <AllDetailsBox>
                    <DetailsAboutBox>
                        <DetailTitle>Компанія на ринку</DetailTitle>
                        <DetailText>11 років</DetailText>
                        <DetailsDescription>з 2012 року</DetailsDescription>
                    </DetailsAboutBox>
                    <DetailsAboutBox>
                        <DetailTitle>Постійні клієнти</DetailTitle>
                        <DetailText>3000 +</DetailText>
                        <DetailsDescription>В різних ЖК міста</DetailsDescription>
                    </DetailsAboutBox>
                    <DetailsAboutBox>
                        <DetailTitle>Встановлених вікон</DetailTitle>
                        <DetailText>4000 +</DetailText>
                        <DetailsDescription>В Києві та <WordBack>Київській</WordBack> області</DetailsDescription>
                    </DetailsAboutBox>
                </AllDetailsBox>
            </BoxTabletDesktop>
            <InfoBoxMobil>
                <DescriptionText>Більше інформації про нашу компанію ви можете дізнатися на нашому сайті</DescriptionText>
                <BoxLinkAbout>
                    <LinkAbout href="https://windo.com.ua/" target="blank">
                        <LinkAboutText>Перейти на сайт</LinkAboutText>
                        <RxExternalLink size={iconSize.sm}/>
                    </LinkAbout>
                </BoxLinkAbout>
            </InfoBoxMobil>
        </BoxAbout>
    )
};

export default About;