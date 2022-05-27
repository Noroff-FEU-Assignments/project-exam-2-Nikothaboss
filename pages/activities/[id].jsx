import axios from "axios";
import Image from "next/image";
import { baseUrl } from "../../utils/API_CONSTANTS";
import { DetailsStyled } from "../../styles/details.styled";
import { RiPriceTag3Line } from "react-icons/ri";
import Head from "next/head";

const Acitvity = ({ data }) => {
  return (
    <DetailsStyled>
      <Head>
        <title>PE2 Nikolai | {data.name}</title>
      </Head>
      <h1>{data.name}</h1>
      <section className="about">
        <div className="img_container">
          <Image
            src={data.main_img}
            layout="responsive"
            width="500"
            height="250"
            className="image"
            alt={data.name}
          />
          <div className="location">
            <p>
              <strong>Location:</strong> {data.location}
            </p>
            <div className="price">
              <RiPriceTag3Line size="1.5rem" />
              <p>{"FREE"}</p>
            </div>
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
