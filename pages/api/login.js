import axios from "axios";
import { setCookie } from "nookies";
import { baseUrl } from "../../utils/API_CONSTANTS";

export default async (req, res) => {
  const { password, identifier } = req.body;

  try {
    const postRes = await axios.post(baseUrl + "auth/local", {
      identifier,
      password,
    });

    setCookie({ res }, "jwt", postRes.data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    res.status(200).end();
  } catch (e) {
    res.status(401).send({
      error: e.message,
    });
  }
};
