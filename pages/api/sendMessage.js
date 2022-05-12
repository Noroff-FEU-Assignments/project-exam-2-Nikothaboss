import { baseUrl } from "../../utils/API_CONSTANTS";
import axios from "axios";
export default async (req, res) => {
  const { message, fname, email, lname, option } = req.body;

  try {
    await axios.post(baseUrl + "messages", {
      data: { message, fname, email, lname, option },
    });

    res.status(200).end();
  } catch (e) {
    res.status(400).send(e);
  }
};
