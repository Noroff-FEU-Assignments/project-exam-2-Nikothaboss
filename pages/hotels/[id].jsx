import React from "react";
import axios from "axios";
import { baseUrl } from "../../utils/API_CONSTANTS";

const Hotel = ({ data }) => {
  console.log(data);
  return <div>{data.name}</div>;
};

export default Hotel;

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await axios.get(baseUrl + "hotels/" + id);
  const data = res.data.data.attributes;

  return {
    props: {
      data,
    },
  };
};
