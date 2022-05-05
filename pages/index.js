import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import Header from "../components/header/Header";
import Carousel from "../components/carousel/Carousel";
import { HomeStyled } from "../styles/home.styled";
import { baseUrl } from "../utils/API_CONSTANTS";
import Image from "next/image";

export default function Home({ hotels, activities }) {
  const [auth, setAuth] = useContext(AuthContext);
  console.log(hotels);
  // console.log("Hotels: " + hotels, "activities: " + activities);

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
        <section className="popular_hotels">
          <h2>Popular Hotels</h2>
          <div className="cards_container">
            {hotels.data.map((d) => {
              const data = d.attributes;
              if (data.featured) {
                return (
                  <div className="card">
                    <Image
                      src={data.main_img}
                      layout="responsive"
                      width="300"
                      height="200"
                    />
                    <h2>{data.name}</h2>
                  </div>
                );
              }
            })}
          </div>
        </section>
        <section className="activities">
          <h2>Activities</h2>
          <div className="cards_container">
            {activities.data.map((d) => {
              const data = d.attributes;
              if (data.featured) {
                return (
                  <div className="card">
                    <Image
                      src={data.main_img}
                      layout="responsive"
                      width="300"
                      height="200"
                    />
                    <h2>{data.name}</h2>
                  </div>
                );
              }
            })}
          </div>
        </section>
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
