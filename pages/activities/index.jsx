import { baseUrl } from "../../utils/API_CONSTANTS";
import { HotelsStyled } from "../hotels/hotels.styled";
import Image from "next/image";
const Hotels = ({ hotels }) => {
  return (
    <HotelsStyled>
      {hotels.map((d) => {
        const data = d.attributes;
        return (
          <div className="card" key={d.id}>
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
  const activitiesResponse = await fetch(baseUrl + "activities");

  const activities = await activitiesResponse.json();

  // console.log(hotels.data);

  return {
    props: {
      hotels: activities.data,
    },
  };
};
