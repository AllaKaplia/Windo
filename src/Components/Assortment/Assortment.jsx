import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import rehau60 from '../../img/rehau/rehau-euro-design-60.jpg';
import rehau70 from '../../img/rehau/rehau-euro-design-70.jpg';
import rehauBrilliant from '../../img/rehau/rehau-brillant-design.jpg';
import rehauSynego from '../../img/rehau/rehau-zyro-image.jpg';
import wds5S from '../../img/wds/wds-WDS-5S.png';
import wds6S from '../../img/wds/wds-WDS- 6S.png';
import wds7S from '../../img/wds/wds-WDS-7S.png';
import wds8S from '../../img/wds/wds_8s.png';
import BluEvolution73 from '../../img/salamander/1449152373-removebg-preview 2.png';
import Streamline76 from '../../img/salamander/64ba65cbe3fee0b8d4008c90_cream1 1.png';
import BluEvolution82 from '../../img/salamander/64ba660f106fa4f36fe11260_okno3_1 1.png';
import BluEvolution92 from '../../img/salamander/64ba66590c73018fbbc45e20_okno4p 1.png';
import { BoxAnchor, BoxAssortment, BtnAssortment, ContainerButtons, NameProduct, TitleAssortment } from './Assortment.styled';
// import NextButton from '../NextButton/NextButton';




const Assortment = () => {
    const [activeCategory, setActiveCategory] = useState('Rehau');

    const categories = [
      {
        title: 'Rehau',
        images: [
          { image: rehau60, alt: 'Rehau Euro-Design 60', title: 'Rehau Euro-Design 60' },
          { image: rehau70, alt: 'Rehau Euro-Design 70', title: 'Rehau Euro-Design 70' },
          { image: rehauBrilliant, alt: 'Rehau Brillant-Design', title: 'Rehau Brillant-Design' },
          { image: rehauSynego, alt: 'Rehau Synego', title: 'Rehau Synego' }
        ]
      },
      {
        title: 'WDS',
        images: [
          { image: wds5S, alt: 'WDS 5S', title: 'WDS 5S' },
          { image: wds6S, alt: 'WDS 6S', title: 'WDS 6S' },
          { image: wds7S, alt: 'WDS 7S', title: 'WDS 7S' },
          { image: wds8S, alt: 'WDS 8S', title: 'WDS 8S' }
        ]
      },
      {
        title: 'Salamander',
        images: [
          { image: BluEvolution73, alt: 'BluEvolution 73', title: 'BluEvolution 73' },
          { image: Streamline76, alt: 'Streamline 76', title: 'Streamline 76' },
          { image: BluEvolution82, alt: 'BluEvolution 82', title: 'BluEvolution 82' },
          { image: BluEvolution92, alt: 'BluEvolution 92', title: 'BluEvolution 92' }
        ]
      }
    ];

  const handleCategoryClick = (category, activeIndex) => {
    setActiveCategory(category);
  };

  const settings = {
    appendDots: dots => (
      <div
      style={{
      backgroundColor: "var(--text-white)",
      border: "none",
      padding: "10px"
    }}>
      <ul style={{ margin: "0px", opacity: ".75", color: "var(--brand-orange)" }}> {dots} </ul>
    </div>
    ),
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  // prevArrow: <NextButton />,
  // nextArrow: <NextButton />,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
   }
  },
  {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }}
  ]
};


  return (
  <BoxAssortment>
    <BoxAnchor>
      <TitleAssortment name="assortment">Різновиди профільних систем</TitleAssortment>
        </BoxAnchor>
        <ContainerButtons>
          {categories.map((category) => (
          <BtnAssortment
          key={category.title} 
          type='button'
          className={category.title === activeCategory ? "active" : ""}
          onClick={() => handleCategoryClick(category.title)}>
            {category.title}
          </BtnAssortment>
         ))}
        </ContainerButtons>
        <Slider {...settings}>
          {categories
          .find((category) => category.title === activeCategory)
          .images.map((image, index) => (
        <div key={index}>
            <img src={image.image} alt={image.alt} width={275} height={475}/>
            <NameProduct>{image.title}</NameProduct>
        </div>))}
      </Slider>
    </BoxAssortment>    
  )
}

export default Assortment;