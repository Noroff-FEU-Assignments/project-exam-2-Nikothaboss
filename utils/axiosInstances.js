import axios from "axios";
import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import jwtDecode from "jwt-decode";

export const axiosJWT = axios.create();

export const getRefreshToken = async () => {
  var axios = require("axios");
  var data = "";

  var config = {
    method: "post",
    url: "http://localhost:1337/api/token/refresh",
    headers: {
      Cookie:
        "refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ5OTU3MjIyLCJleHAiOjE2NTExNjY4MjJ9.EXXVC07aJfRSTuNUiP8NFO0bl6NOHipQ-5HCUH72u0g; refreshToken.sig=s5_WTVJkZbJ9Mai5HBMihtrSaY0",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

// export const getRefreshToken = async () => {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append(
//     "Cookie",
//     "refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ5OTUzNTkyLCJleHAiOjE2NTExNjMxOTJ9.r9EbsvTOOK6L4Iz3Zx9qLwEyiKox9UyjsGZHpSnmypw; refreshToken.sig=NMC36udE6xX3IkWx3FXdwAAQWkI"
//   );

//   var raw = JSON.stringify({
//     token:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjQ5OTUzMTE1LCJleHAiOjE2NDk5NTM0NzV9.EjccVHPlpEaVWWTKYNH3DNkXdz6w9diedbaTWV4c3t4",
//   });

//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };

//   fetch("http://localhost:1337/api/token/refresh", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// };

axiosJWT.interceptors.request.use(
  async (config) => {
    // const [auth, setAuth] = useContext(AuthContext);
    const auth = localStorage.getItem("jwt");
    const setAuth = (d) => localStorage.setItem("jwt", d);
    const accessToken = auth;
    if (accessToken) {
      let currentDate = new Date();
      const decodedToken = jwtDecode(accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await getRefreshToken();
        if (data) {
          setAuth(data.jwt);
          config.headers["authorization"] = `Bearer ${data.jwt}`;
        } else {
          //   need new refresh token/log in again
        }
      } else {
        config.headers["authorization"] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
