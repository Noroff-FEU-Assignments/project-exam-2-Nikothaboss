import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import Carousel from "../components/carousel/Carousel";
import { HomeStyled } from "../styles/home.styled";
import { baseUrl } from "../utils/API_CONSTANTS";
import Featured from "../components/featured/Featured";
import Head from "next/head";

export default function Home({ hotels, activities }) {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>PE2 Nikolai | Home</title>
      </Head>
      <HomeStyled>
        <div className="container">
          <Carousel />
          <div className="intro_box">
            <p>
              Welcome to Bergen Booking We&apos;ll help you experience the
              beauty of Bergen
            </p>
          </div>
        </div>
        <Featured request={hotels} title="Popular Hotels" variant="hotel" />
        <Featured request={activities} title="Activities" variant="activity" />
      </HomeStyled>
    </>
  );
}

export const getServerSideProps = async () => {
  const [hotelsResponse, activitiesResponse] = await Promise.all([
    fetch(baseUrl + "hotels"),
    fetch(baseUrl + "activities"),
  ]);

  const hotels = await hotelsResponse.json();
  const activities = await activitiesResponse.json();

  // console.log(hotels, activities);

  return {
    props: {
      hotels: hotels,
      activities: activities,
    },
  };
};
