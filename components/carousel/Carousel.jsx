import { CarouselStyled } from "./carousel.styled";
import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "../../img/carousel1.jpg";
import img2 from "../../img/carousel2.jpg";
import img3 from "../../img/carousel3.jpg";

const images = [
  "https://a.cdn-hotels.com/gdcs/production42/d1533/9e57a08d-5f4c-44a9-b042-a183cc160a46.jpg",
  "https://images.pexels.com/photos/3580098/pexels-photo-3580098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "http://res.cloudinary.com/simpleview/image/upload/v1574085889/clients/norway/bryggen_wharf_bergen_hordaland_fjord_norway_photo_florian_olbrechts_34ad36ea-f7bc-4150-b48b-af2c2c14628f.jpg",
];

const Carousel = () => {
  return (
    <CarouselStyled>
      <div className="img_container">
        <img src={images[0]} className="image" />
        <img src={images[1]} className="image" />
        <img src={images[2]} className="image" />
      </div>
    </CarouselStyled>
  );
};

export default Carousel;
