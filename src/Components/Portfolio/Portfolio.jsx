import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Portfolio1 from "../../img/portfolio-photo/gallery_photo_1.png";
import Portfolio2 from "../../img/portfolio-photo/gallery_photo_2.png";
import Portfolio3 from "../../img/portfolio-photo/gallery_photo_3.png";
import Portfolio4 from "../../img/portfolio-photo/gallery_photo_4.png";
import Portfolio5 from "../../img/portfolio-photo/gallery_photo_5.png";
import Portfolio6 from "../../img/portfolio-photo/gallery_photo_6.png";
import Portfolio7 from "../../img/portfolio-photo/gallery_photo_7.png";
import Portfolio8 from "../../img/portfolio-photo/gallery_photo_8.png";
import Portfolio9 from "../../img/portfolio-photo/gallery_photo_9.png";
import Portfolio10 from "../../img/portfolio-photo/gallery_photo_10.png";
import { BoxAnchor, BoxButton, BtnPortfolio, ContainerPortfolio, PhotoPortfolio, TitlePortfolio } from "./Portfolio.styled";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import { iconSize } from "../../constants/iconSize";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Фото");
  const [activeIndex, setActiveIndex] = useState(1);

  const categories = [
    { title: "Відео", images: [] },
    { title: "Фото", images: [Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6, Portfolio7, Portfolio8, Portfolio9, Portfolio10] },
  ];

  function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "var(--brand-gray)", width: "40px", height: "40px", borderRadius: "50%", content: "none" }}
        onClick={onClick}
        >
          <MdKeyboardArrowRight size={iconSize.sm} color="white" style={{position: "absolute", top: "0", right: "0", color: "white", backgroundColor: "var(--brand-gray)", width: "40px", height: "40px", borderRadius: "50%", transition: "background-color 0.3s, transform 0.3s", cursor: "pointer"}}/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    const arrowStyles = {
      display: "block",
      background: "var(--brand-gray)",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      zIndex: "1",
      transition: "background-color 0.3s",
      ":before": {
        content: "none",
      },
      ":hover": {
        backgroundColor: "linear-gradient(to left, #DF5306, #FC9850)",
      },
    };
      return (
      <div
      className={className}
      style={{ ...style, ...arrowStyles}}
      onClick={onClick}
      >
        <MdKeyboardArrowLeft size={iconSize.sm} color="white" style={{position: "absolute", top: "0", right: "0", color: "white", backgroundColor: "var(--brand-gray)", width: "40px", height: "40px", borderRadius: "50%", transition: "background-color 0.3s, transform 0.3s", cursor: "pointer"}}/>
      </div>
    );
  }

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerPadding: "60px",
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  const handleCategoryClick = (category, index) => {
    setActiveCategory(category);
    setActiveIndex(index);
  };

  return (
    <ContainerPortfolio>
      <BoxAnchor>
        <TitlePortfolio name="portfolio">Виконані роботи</TitlePortfolio>
      </BoxAnchor>
      <BoxButton>
        {categories.map((category) => (
          <BtnPortfolio
          key={category.title}
          type="button"
          className={category.title === activeCategory ? "active" : ""}
          onClick={() => handleCategoryClick(category.title, activeIndex)}>
            {category.title}
        </BtnPortfolio>
        ))}
      </BoxButton>
      <Slider {...settings}>
        {categories
        .find((category) => category.title === activeCategory)
        .images.map((image, index) => (
          <div key={index}>
            <PhotoPortfolio src={image} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </Slider>
  </ContainerPortfolio>
)};

export default Portfolio;