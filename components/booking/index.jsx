import { BookingStyled } from "./Booking.styled";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/API_CONSTANTS";

const Booking = ({ data }) => {
  const formatYmd = (date) => date.toISOString().slice(0, 10);
  console.log(formatYmd(new Date()));
  const [fromDate, setFromDate] = useState(() => formatYmd(new Date()));
  const [toDate, setToDate] = useState(() => formatYmd(new Date(Date.now())));
  const [room, setRoom] = useState(0);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/bookRoom", {
        hotel_name: data.name,
        start_date: fromDate,
        end_date: toDate,
        room: room,
        adult: adult,
        children: children,
      });
      if (res.status === 200) {
        console.log("IT WORK, SJEKK UT STRAPI");
      }
    } catch (e) {
      console.log(e, "fuck meg");
    }
  };

  return (
    <BookingStyled onSubmit={handleSubmit}>
      <h2>{data.name}</h2>
      <div>
        <label htmlFor="from">From</label>
        <input
          type="date"
          onChange={(e) => {
            setFromDate(e.target.value);
          }}
          value={fromDate}
        />
      </div>
      <div>
        <label htmlFor="to">To</label>
        <input
          type="date"
          onChange={(e) => {
            setToDate(e.target.value);
          }}
          value={toDate}
        />
      </div>
      <div>
        <label htmlFor="Room_Type">Room Type</label>
        <select
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        >
          <option value={0}>Small</option>
          <option value={1}>Medium</option>
          <option value={2}>Large</option>
        </select>
      </div>
      <div>
        <label htmlFor="adults">Adults</label>
        <input
          type="number"
          onChange={(e) => {
            setAdult(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="children">Children</label>
        <input
          type="number"
          onChange={(e) => {
            setChildren(e.target.value);
          }}
        />
      </div>
      <button>Submit</button>
    </BookingStyled>
  );
};

export default Booking;
