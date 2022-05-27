import axios from "axios";
import Image from "next/image";
import { baseUrl } from "../../utils/API_CONSTANTS";
import { DetailsStyled } from "../hotels/details.styled";
import { RiPriceTag3Line } from "react-icons/ri";

const Acitvity = ({ data }) => {
  console.log(data);
  return (
    <DetailsStyled>
      <h1>{data.name}</h1>
      <section className="about">
        <div className="img_container">
          <Image
            src={data.main_img}
            layout="responsive"
            width="500"
            height="250"
            className="image"
          />
          <div className="location">
            <p>
              <strong>Location:</strong> {data.location}
            </p>
            <p>
              <RiPriceTag3Line size="1.5rem" />
              {"FREE"}
            </p>
          </div>
        </div>

        <div className="info_container">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>
      </section>
    </DetailsStyled>
  );
};

export default Acitvity;

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await axios.get(baseUrl + "activities/" + id);
  const data = res.data.data.attributes;

  return {
    props: {
      data,
    },
  };
};
