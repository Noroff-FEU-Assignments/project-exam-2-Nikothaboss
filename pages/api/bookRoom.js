import { baseUrl } from "../../utils/API_CONSTANTS";
import axios from "axios";
export default async (req, res) => {
  const { hotel_name, start_date, end_date, room, adult, children } = req.body;

  try {
    await axios.post(baseUrl + "bookings", {
      data: { hotel_name, start_date, end_date, room, adult, children },
    });

    res.status(200).end();
  } catch (e) {
    res.status(400).send(e);
  }
};
