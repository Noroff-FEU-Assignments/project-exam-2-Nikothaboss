import nookies from "nookies";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../../utils/API_CONSTANTS";
import { AdminStyled } from "../../styles/admin.styled";
import CreateForm from "../../components/createForm/CreateForm";
const Admin = ({ messages, bookings }) => {
  const [tab, setTab] = useState(0);

  return (
    <AdminStyled>
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
                  <div className="hotel block">
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
                  <div className="message">
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
            <CreateForm />
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

  const [messagesRes, bookingsRes] = await Promise.all([
    axios.get(baseUrl + "messages"),
    axios.get(baseUrl + "bookings"),
  ]);

  const messages = messagesRes.data.data;
  const bookings = bookingsRes.data.data;

  return {
    props: {
      loggedIn: loggedIn,
      messages,
      bookings,
    },
  };
};
