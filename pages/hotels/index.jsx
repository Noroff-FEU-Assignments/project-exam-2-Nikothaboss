import { baseUrl } from "../../utils/API_CONSTANTS";
import { HotelsStyled } from "./hotels.styled";
import Image from "next/image";
const Hotels = ({ hotels }) => {
  return (
    <HotelsStyled>
      {hotels.map((d) => {
        const data = d.attributes;
        return (
          <div className="card">
            <Image
              src={data.main_img}
              layout="responsive"
              width="300"
              height="200"
            />
            <h2>{data.name}</h2>
          </div>
        );
      })}
    </HotelsStyled>
  );
};

export default Hotels;

export const getStaticProps = async () => {
  const hotelsResponse = await fetch(baseUrl + "hotels");

  const hotels = await hotelsResponse.json();

  // console.log(hotels.data);

  return {
    props: {
      hotels: hotels.data,
    },
  };
};
