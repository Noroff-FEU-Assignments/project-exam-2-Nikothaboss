import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import Header from "../components/header/Header";

export default function Home() {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <>
      <Header />
    </>
  );
}
