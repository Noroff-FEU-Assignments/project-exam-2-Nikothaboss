import { baseUrl } from "../../utils/API_CONSTANTS";
import { HotelsStyled } from "../../styles/hotels.styled";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { checkRating } from "../../utils/setRating";
const Hotels = ({ hotels }) => {
  return (
    <>
      <HotelsStyled>
        <Head>
          <title>PE2 Nikolai | Hotels</title>
        </Head>
        {hotels.map((d) => {
          const data = d.attributes;
          return (
            <Link href={`hotels/${d.id}`} key={d.id}>
              <div className="card">
                <Image
                  src={data.main_img}
                  layout="responsive"
                  width="300"
                  height="200"
                  priority={d.id}
                />
                <div className="info">
                  <h2>{data.name}</h2>
                  <p>{data.description.substring(0, 200) + "..."}</p>
                  {checkRating(data.rating)}
                </div>
              </div>
            </Link>
          );
        })}
      </HotelsStyled>
    </>
  );
};

export default Hotels;

export const getServerSideProps = async () => {
  const hotelsResponse = await fetch(baseUrl + "hotels");

  const hotels = await hotelsResponse.json();

  // console.log(hotels.data);

  return {
    props: {
      hotels: hotels.data,
    },
  };
};
