import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import Header from "../components/header/Header";
import Carousel from "../components/carousel/Carousel";
import { HomeStyled } from "../styles/home.styled";

export default function Home() {
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
      </HomeStyled>
    </>
  );
}
