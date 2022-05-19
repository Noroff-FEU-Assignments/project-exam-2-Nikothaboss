import axios from "axios";
import Booking from "../../components/booking";
import { baseUrl } from "../../utils/API_CONSTANTS";
import { useState } from "react";
import { DetailsStyled } from "./details.styled";
import Image from "next/image";
import { checkRating } from "../../utils/setRating";

const Hotel = ({ data, images }) => {
  console.log(data);
  const [openBooking, setOpenBooking] = useState(false);
  const toggleBooking = () => setOpenBooking(true);
  const [current, setCurrent] = useState(0);

  return (
    <>
      <DetailsStyled>
        <h1>{data.name}</h1>
        <section>
          <div className="img_container">
            <Image
              src={images[current]}
              layout="responsive"
              width="500"
              height="250"
              className="image"
            />
          </div>
          <div className="info_container">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            {checkRating(data.rating)}
          </div>
        </section>
      </DetailsStyled>
      {openBooking && <Booking data={data} />}
    </>
  );
};

export default Hotel;

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await axios.get(baseUrl + "hotels/" + id);
  const data = res.data.data.attributes;
  const images = [
    data.main_img,
    data.second_img,
    data.third_img,
    data.fourth_img,
  ];

  return {
    props: {
      data,
      images: images,
    },
  };
};
