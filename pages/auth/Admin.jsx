import nookies from "nookies";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../../utils/API_CONSTANTS";
import { AdminStyled } from "../../styles/admin.styled";
import CreateForm from "../../components/createForm/CreateForm";
import Image from "next/image";
import { MdClose, MdOutlineEdit } from "react-icons/md";
import Head from "next/head";

const Admin = ({ messages, bookings, hotels }) => {
  const [tab, setTab] = useState(3);
  const [showHotels, setShowHotels] = useState(true);

  const toggleShowHotels = () => setShowHotels(!showHotels);

  const [currentHotelData, setCurrentHotelData] = useState();

  const getDetails = (e) => {
    const hotel = hotels.filter(
      (d) => e.target.id.toString() === d.id.toString()
    );
    setCurrentHotelData(hotel[0]);
    toggleShowHotels();
  };

  const deleteMessage = async (e) => {
    const res = await axios.delete(baseUrl + "messages/" + e.target.id);
    if (res.status === 200) {
      window.location.href = "/auth/Admin";
    }
  };

  return (
    <AdminStyled>
      <Head>
        <title>PE2 Nikolai | Admin</title>
      </Head>
      <div className="tab_container">
        <div className="tab_selector">
          <div
            onClick={() => setTab(0)}
            className={tab === 0 ? "tab active" : "tab"}
          >
            Bookings
          </div>
          <div
            onClick={() => setTab(1)}
            className={tab === 1 ? "tab active" : "tab"}
          >
            Messages
          </div>
          <div
            onClick={() => setTab(2)}
            className={tab === 2 ? "tab active" : "tab"}
          >
            New Hotel
          </div>
          <div
            onClick={() => setTab(3)}
            className={tab === 3 ? "tab active" : "tab"}
          >
            Edit
          </div>
        </div>
        {tab === 0 && (
          <div className="bookings">
            {bookings.map((d) => {
              const data = d.attributes;
              return (
                <div className="booking">
                  <div className="block">
                    <p>
                      <strong>Hotel: </strong>
                      {data.hotel_name}
                    </p>
                  </div>
                  <div className="duration block">
                    <p>
                      <strong>Check in:</strong> {data.start_date}
                    </p>
                    <p>
                      <strong>Check out: </strong> {data.end_date}
                    </p>
                  </div>
                  <div className="room block">
                    <p>
                      <strong>Room: </strong> {data.room}
                    </p>
                  </div>
                  <div className="guests block">
                    <p>
                      <strong>Adults: </strong> {data.adult}
                    </p>
                    <p>
                      <strong>Children: </strong> {data.children}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {tab === 1 && (
          <div className="messages">
            {messages.length !== 0 ? (
              messages.map((d) => {
                const data = d.attributes;
                return (
                  <div className="message" key={d.id}>
                    <button
                      id={d.id}
                      className="delMsg"
                      onClick={deleteMessage}
                    >
                      Delete
                    </button>
                    <div className="top">
                      <h3>{data.fname + " " + data.lname}</h3>
                      <h4>{data.createdAt.substring(0, 10)}</h4>
                    </div>
                    <p>{data.message}</p>
                    <strong>Email: </strong>
                    <span>{data.email}</span>
                  </div>
                );
              })
            ) : (
              <h2>No Messages</h2>
            )}
          </div>
        )}
        {tab === 2 && (
          <div className="new_hotel">
            <CreateForm type={"create"} />
          </div>
        )}
        {tab === 3 && (
          <div className="edit_container">
            {showHotels &&
              hotels.map((d) => {
                const data = d.attributes;
                return (
                  <div className="hotel" key={d.id} id={d.id}>
                    <div className="img_container">
                      <Image
                        src={data.main_img}
                        layout="responsive"
                        width="200"
                        height="100"
                        className="hotel_img"
                      />
                    </div>
                    <div className="name">
                      <strong>{data.name}</strong>
                    </div>

                    <div className="rating">
                      <p>
                        <strong>Rating: </strong>
                        {data.rating}
                      </p>
                    </div>
                    <div className="featured">
                      <p>
                        <strong>Featured: </strong>
                        {data.featured ? "Yes" : "No"}
                      </p>
                    </div>
                    <button
                      className="edit_icon"
                      id={d.id}
                      onClick={getDetails}
                    >
                      Edit
                    </button>
                  </div>
                );
              })}
            {!showHotels && (
              <>
                <MdClose onClick={toggleShowHotels} />
                <CreateForm type="edit" hotelData={currentHotelData} />
              </>
            )}
          </div>
        )}
      </div>
    </AdminStyled>
  );
};

export default Admin;

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let loggedIn;
  if (cookies?.jwt) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  if (!loggedIn) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const [messagesRes, bookingsRes, hotelsResponse] = await Promise.all([
    axios.get(baseUrl + "messages"),
    axios.get(baseUrl + "bookings"),
    axios.get(baseUrl + "hotels"),
  ]);

  const messages = messagesRes.data.data;
  const bookings = bookingsRes.data.data;
  const hotels = hotelsResponse.data.data;
  console.log(hotels);

  return {
    props: {
      loggedIn: loggedIn,
      messages,
      bookings,
      hotels,
    },
  };
};
