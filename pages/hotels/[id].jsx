import axios from "axios";
import Booking from "../../components/booking";
import { baseUrl } from "../../utils/API_CONSTANTS";
import { useState } from "react";
import { DetailsStyled } from "../../styles/details.styled";
import Image from "next/image";
import { checkRating } from "../../utils/setRating";
import { useResize } from "../../hooks/useResize";
import ImgPreview from "../../components/imgPreview/ImgPreview";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

const Hotel = ({ data, images, roomData }) => {
  console.log(roomData);
  const [openBooking, setOpenBooking] = useState(false);
  const toggleBooking = () => setOpenBooking(!openBooking);

  const [current, setCurrent] = useState(0);
  const handleClick = (index) => {
    setCurrent(index);
  };

  const { screenWidth } = useResize();

  return (
    <>
      <DetailsStyled>
        <Head>
          <title>PE2 Nikolai | {data.name}</title>
        </Head>
        {/* <h1>{data.name}</h1> */}
        <section className="about">
          <div className="img_container">
            <Image
              src={images[current]}
              layout="responsive"
              width="500"
              height="250"
              className="image"
              priority
            />
            {/* {screenWidth <= 1024 && (
              <ImgPreview images={images} handleClick={handleClick} />
            )} */}
            <ImgPreview images={images} handleClick={handleClick} />
          </div>

          <div className="info_container">
            <h2>{data.name}</h2>
            {checkRating(data.rating)}
            <p>{data.description}</p>
            <div className="book" onClick={toggleBooking}>
              Book
            </div>
          </div>
        </section>
        <h2>Rooms</h2>
        <section className="rooms">
          {roomData.map((d) => {
            const room = d.attributes;
            return (
              <div key={d.id} className="room">
                <Image
                  src={room.main_img}
                  layout="responsive"
                  height={"150"}
                  width="300"
                  className="room_img"
                />
                <div className="room_info">
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                  <h3>{room.price}.-</h3>
                </div>
              </div>
            );
          })}
        </section>
        <AnimatePresence>
          {openBooking && <Booking data={data} closeBooking={toggleBooking} />}
        </AnimatePresence>
      </DetailsStyled>
    </>
  );
};

export default Hotel;

export const getServerSideProps = async ({ query }) => {
  const { id } = query;

  const [hotelResponse, roomResponse] = await Promise.all([
    axios.get(baseUrl + "hotels/" + id),
    axios.get(baseUrl + "Rooms"),
  ]);
  const data = hotelResponse.data.data.attributes;
  const roomData = roomResponse.data.data;
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
      roomData,
    },
  };
};
