import { BookingStyled } from "./Booking.styled";
import { useState, useRef } from "react";
import axios from "axios";
import { MdClose } from "react-icons/md";
import { baseUrl } from "../../utils/API_CONSTANTS";

const Booking = ({ data, closeBooking }) => {
  const formatYmd = (date) => date.toISOString().slice(0, 10);
  // console.log(formatYmd(new Date()));
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [room, setRoom] = useState("Standard Room");
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const fromDateRef = useRef();
  const toDateRef = useRef();
  console.log(fromDateRef);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fromDateRef.current.value && toDateRef.current.value) {
      setError(false);
      try {
        const res = await axios.post(baseUrl + "bookings", {
          data: {
            hotel_name: data.name,
            start_date: fromDate,
            end_date: toDate,
            room: room,
            adult: adult,
            children: children,
          },
        });
        if (res.status === 200) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 1000);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      setError(true);
    }
  };

  return (
    <BookingStyled
      onSubmit={handleSubmit}
      initial={{ y: "-120%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
    >
      <fieldset>
        <legend>Book Hotel</legend>
        {success && <h3>Hotel Booked</h3>}
        <div className="row">
          <h2>{data.name}</h2>
          <MdClose size={"1.5rem"} cursor="pointer" onClick={closeBooking} />
        </div>
        {error && <h3>Set from and to date</h3>}
        <div>
          <label htmlFor="from">From</label>
          <input
            type="date"
            ref={fromDateRef}
            onChange={() => {
              setTimeout(() => {
                setFromDate(fromDateRef.current.value.toString());
              }, 100);
            }}
            min={formatYmd(new Date())}
          />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input
            type="date"
            onChange={(e) => {
              setToDate(toDateRef.current.value);
            }}
            min={fromDate}
            ref={toDateRef}
          />
        </div>
        <div>
          <label htmlFor="Room_Type">Room Type</label>
          <select
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          >
            <option value={"Standard Room"}>Standard Room</option>
            <option value={"Superior Room"}>Superior Room</option>
            <option value={"Suite"}>Suite</option>
          </select>
        </div>
        <div>
          <label htmlFor="adults">Adults</label>
          <input
            type="number"
            defaultValue={1}
            onChange={(e) => {
              setAdult(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="children">Children</label>
          <input
            type="number"
            defaultValue={0}
            onChange={(e) => {
              setChildren(e.target.value);
            }}
          />
        </div>
        <button>Book Hotel</button>
      </fieldset>
    </BookingStyled>
  );
};

export default Booking;
