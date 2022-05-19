import axios from "axios";
import { baseUrl } from "../../utils/API_CONSTANTS";

const Acitvity = ({ data }) => {
  console.log(data);
  return <div>{data.name}</div>;
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
