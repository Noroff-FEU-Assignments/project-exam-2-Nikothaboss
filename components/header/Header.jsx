import { useContext, useState } from "react";
import { HeaderStyled } from "./header.styled";
import logo from "../../img/BB-logo.svg";
import Image from "next/image";
import AuthContext from "../../contexts/authContext";
import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const jwtValidation =
    /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/g;
  const logOut = () => {
    setAuth(null);
  };
  return (
    <HeaderStyled>
      <div className="logo-container">
        <Image src={logo} />
        <h2>Bergen Booking</h2>
      </div>

      <nav className="desktop_nav">
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
      <motion.div
        onClick={toggleOpen}
        className="burger_icon_container"
        initial={!open ? { rotate: "45deg" } : { rotate: 0 }}
        animate={!open ? { rotate: "360deg" } : { rotate: "45deg" }}
      >
        <BsPlusLg className="burger_icon" size="1.5rem" />
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="burger_nav"
            initial={{ y: "-120%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
          >
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Hotels">Hotels</Link>
              </li>
              <li>
                <Link href="/Activities">Activities</Link>
              </li>
              <li>
                <Link href="auth/Login">Log in</Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </HeaderStyled>
  );
};

export default Header;
