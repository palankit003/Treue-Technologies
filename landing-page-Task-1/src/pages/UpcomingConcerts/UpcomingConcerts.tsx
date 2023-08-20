import { useState } from "react";
import Style from "./UpcomingConcerts.module.css";
import Modal from "../../componets/modal/Modal";
const details = [
  { date: "29 July 2023", venue: "New York City" },
  { date: "31 July 2023", venue: "Mumbai" },
  { date: "2 Aug 2023", venue: "Austin" },
  { date: "4 Aug 2023", venue: "Los Angeles" },
  { date: "6 Aug 2023", venue: "Chicago" },
  { date: "8 Aug 2023", venue: "Seattle" },
  { date: "11 Aug 2023", venue: "London" },
  { date: "13 Aug 2023", venue: "Berlin" },
  { date: "15 Aug 2023", venue: "Sydney" },
];
const UpcomingConcerts = () => {
  return (
    <div className={Style.container}>
      <p className={Style.title}>Upcoming Concerts</p>
      <ConcertCard />
    </div>
  );
};

const ConcertCard = () => {
  return (
    <table className={Style.tableContainer}>
      <tr>
        <th>Date</th>
        <th>Venue</th>
        <th>Tickets</th>
      </tr>
      <tbody>
        {details.map((e, index) => {
          const [isOpen, setIsOpen] = useState(false);
          const closeModal = () => {
            setIsOpen(false);
          };
          return (
            <>
              {isOpen && <Modal closeModal={closeModal} />}
              <tr key={index}>
                <td className={Style.data}>{e.date}</td>
                <td className={Style.data}>{e.venue}</td>
                <td>
                  <button
                    className={Style.btn}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Book Tickets
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default UpcomingConcerts;
