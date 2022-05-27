import { baseUrl } from "../../utils/API_CONSTANTS";
import { HotelsStyled } from "../../styles/hotels.styled";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const Hotels = ({ hotels }) => {
  return (
    <>
      <HotelsStyled>
        <Head>
          <title>PE2 Nikolai | Activities</title>
        </Head>
        {hotels.map((d) => {
          const data = d.attributes;
          return (
            <Link key={d.id} href={`/activities/${d.id}`}>
              <div className="card">
                <Image
                  src={data.main_img}
                  layout="responsive"
                  width="300"
                  height="200"
                />
                <div className="info">
                  <h2>{data.name}</h2>
                  <p>{data.description.substring(0, 200) + "..."}</p>
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
  const activitiesResponse = await fetch(baseUrl + "activities");

  const activities = await activitiesResponse.json();

  // console.log(hotels.data);

  return {
    props: {
      hotels: activities.data,
    },
  };
};
