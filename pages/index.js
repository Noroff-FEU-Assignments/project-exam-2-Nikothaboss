import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import Header from "../components/header/Header";
import Carousel from "../components/carousel/Carousel";
import { HomeStyled } from "../styles/home.styled";
import { baseUrl } from "../utils/API_CONSTANTS";
import Featured from "../components/featured/Featured";

export default function Home({ hotels, activities }) {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <>
      <Header />
      <HomeStyled>
        <div className="container">
          <Carousel />
          <div className="intro_box">
            <p>
              Welcome to Bergen Booking We'll help you experience the beauty of
              Bergen
            </p>
          </div>
        </div>
        <Featured
          request={hotels}
          test="featuredHotels"
          title="Popular Hotels"
        />
        <Featured
          request={activities}
          test="featuredActivities"
          title="Activities"
        />
      </HomeStyled>
    </>
  );
}

export const getStaticProps = async () => {
  const [hotelsResponse, activitiesResponse] = await Promise.all([
    fetch(baseUrl + "hotels"),
    fetch(baseUrl + "activities"),
  ]);

  const hotels = await hotelsResponse.json();
  const activities = await activitiesResponse.json();

  console.log(hotels, activities);

  return {
    props: {
      hotels: hotels,
      activities: activities,
    },
  };
};
