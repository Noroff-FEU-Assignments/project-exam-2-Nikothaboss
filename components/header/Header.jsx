import { useContext } from "react";
import { HeaderStyled } from "./header.styled";
import logo from "../../img/BB-logo.svg";
import Image from "next/image";
import AuthContext from "../../contexts/authContext";
import Link from "next/link";

const Header = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const jwtValidation =
    /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/g;
  const logOut = () => {
    setAuth(null);
  };
  return (
    <HeaderStyled>
      <Image src={logo} />

      <nav>
        <ul>
          <li>Home</li>
          <li>Hotels</li>
          <li>Activities</li>
          <li>
            {jwtValidation.test(auth) ? (
              <Link href="/Admin">Admin</Link>
            ) : (
              <Link href="/auth/Login">Log in</Link>
            )}
          </li>
          {jwtValidation.test(auth) && <li onClick={logOut}>Log out</li>}
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
