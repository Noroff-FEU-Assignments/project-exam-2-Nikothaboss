import { baseUrl } from "../../utils/API_CONSTANTS";
import { HotelsStyled } from "./hotels.styled";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../../components/searchBar/searchBar";
const Hotels = ({ hotels }) => {
  return (
    <>
      <SearchBar data={hotels} />
      <HotelsStyled>
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
                <h2>{data.name}</h2>
              </div>
            </Link>
          );
        })}
      </HotelsStyled>
    </>
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
