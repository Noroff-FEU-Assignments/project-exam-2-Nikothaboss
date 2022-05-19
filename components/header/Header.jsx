import { useContext, useState, useEffect } from "react";
import { HeaderStyled } from "./header.styled";
import logo from "../../img/BB-logo.svg";
import Image from "next/image";
import AuthContext from "../../contexts/authContext";
import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/router";
import { baseUrl } from "../../utils/API_CONSTANTS";

const Header = ({ user }) => {
  const [auth, setAuth] = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [wakingApi, setWakingApi] = useState(false);
  console.log("user prop from header: ", user);
  console.log("auth context from header: ", auth);

  const toggleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const router = useRouter();
  // update login status on header refresh
  useEffect(() => {
    if (user) {
      setAuth(user);
      setTimeout(() => {
        console.log("authContext from header ", auth);
      }, 100);
    }
  }, []);

  // send a request to the api before it falls to sleep

  useEffect(() => {
    const wakeApi = async () => {
      setWakingApi(true);
      const res = await axios.get(baseUrl + "hotels");
      if (res.status === 200) {
        setWakingApi(false);
      }
    };
    setTimeout(() => {
      wakeApi();
      console.log("waking up the api");
    }, 1200000); //20 min
  }, [wakingApi]);

  const logOut = async () => {
    try {
      const res = await axios.get("/api/logout");
      if (res.status === 200) {
        setAuth(false);
        router.push("/auth/Login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <HeaderStyled>
      <div className="logo-container">
        <Image src={logo} />
        <h2>Bergen Booking</h2>
      </div>

      <nav className="desktop_nav">
        <ul>
          <Link href={"/"}>Home</Link>
          <Link href={"/hotels"}>Hotels</Link>
          <Link href={"/activities"}>Activities</Link>
          <li>
            {user ? (
              <Link href="/auth/Admin">Admin</Link>
            ) : (
              <Link href="/auth/Login">Log in</Link>
            )}
          </li>
          {user && <li onClick={logOut}>Log out</li>}
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
              <li onClick={closeMenu}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/hotels">Hotels</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/Activities">Activities</Link>
              </li>
              <li onClick={closeMenu}>
                {user ? (
                  <Link href="/auth/Admin">Admin</Link>
                ) : (
                  <Link href="/auth/Login">Log in</Link>
                )}
              </li>
              {user && (
                <li
                  onClick={() => {
                    logOut();
                    closeMenu();
                  }}
                >
                  Log out
                </li>
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </HeaderStyled>
  );
};

export default Header;
