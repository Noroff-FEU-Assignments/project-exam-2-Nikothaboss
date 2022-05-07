import { CarouselStyled } from "./carousel.styled";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const images = [
  "https://a.cdn-hotels.com/gdcs/production42/d1533/9e57a08d-5f4c-44a9-b042-a183cc160a46.jpg",
  "https://images.pexels.com/photos/3580098/pexels-photo-3580098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "http://res.cloudinary.com/simpleview/image/upload/v1574085889/clients/norway/bryggen_wharf_bergen_hordaland_fjord_norway_photo_florian_olbrechts_34ad36ea-f7bc-4150-b48b-af2c2c14628f.jpg",
];

const Carousel = () => {
  const divRef = useRef();
  const [timer, setTimer] = useState(0);
  const router = useRouter();
  const [slide, setSlide] = useState(true);

  let timeout;

  const handleSlide = () => {
    timeout = setTimeout(() => {
      if (timer === 0) {
        setTimer(1);
      } else if (timer === 1) {
        setTimer(2);
      } else if (timer === 2) {
        setTimer(0);
      }
    }, 4000);

    setTimeout(() => {
      if (slide) {
        divRef.current.scrollLeft = divRef.current.offsetWidth * timer;
      }
      return;
    }, 1000);
  };

  typeof window !== "undefined" &&
    window.addEventListener("popstate", () => {
      setSlide(false);
    });

  useEffect(() => {
    handleSlide();
  }, [timer]);

  return (
    <CarouselStyled>
      <div className="img_container" ref={divRef}>
        <img src={images[0]} className="image" />
        <img src={images[1]} className="image" />
        <img src={images[2]} className="image" />
      </div>
    </CarouselStyled>
  );
};

export default Carousel;
