import React from 'react';
import Slider from "react-slick";

const SlickSlider = () => {


      const slickSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1
      }


  return (
    <div>
      <Slider {...slickSliderSettings}>
        <div className="container">
<h1>code page 1</h1>
        </div>
        <div className="container">
<h1>code page 2</h1>
        </div>
        <div className="container">
<h1>code page 3</h1>
        </div>
        <div className="container">
<h1>code page 4</h1>
        </div>
        <div className="container">
<h1>code page 5</h1>
        </div>
      </Slider>
    </div>
  )
}

export default SlickSlider
