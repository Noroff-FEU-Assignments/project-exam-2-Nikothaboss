import { baseUrl } from "../../utils/API_CONSTANTS";
import { HotelsStyled } from "../hotels/hotels.styled";
import Image from "next/image";
import Link from "next/link";
const Hotels = ({ hotels }) => {
  return (
    <HotelsStyled>
      {hotels.map((d) => {
        const data = d.attributes;
        return (
          <Link href={`/activities/${d.id}`}>
            <div className="card" key={d.id}>
              <Image
                src={data.main_img}
                layout="responsive"
                width="300"
                height="200"
              />
              <h2>{data.name}</h2>
            </div>
          </Link>
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
