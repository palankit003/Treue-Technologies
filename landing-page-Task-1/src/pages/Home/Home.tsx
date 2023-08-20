import VideoConcert from "../../assets/musicConcertVideo.mp4";
import Style from "./Home.module.css";
import CharacterCard from "./Character/CharacterCard";
import Listen from "./Listen/Listen";

import Alex from "../../assets/lead guitarist.png";
import Lisa from "../../assets/Lisa.png";
import Max from "../../assets/Bass Guitarist.png";
import Sarah from "../../assets/Sarah-Keyboardist.jpg";
import Jake from "../../assets/drummer.jpg";
import Michelle from "../../assets/lead vocalist.jpg";
import Evan from "../../assets/multi-instrumentalist 2.jpg";
import { useState } from "react";
import Modal from "../../componets/modal/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* <img src={Concert} className={Style.concertImage}></img> */}
      <div className={Style.videoContainer}>
        <video autoPlay loop muted className={Style.concertVideo}>
          <source src={VideoConcert} typeof="video/mp4" />
        </video>
        <div className={Style.overlayVideo}>
          <div>
            <div className={Style.slogan}>
              Let's Join The <span>Biggest Concert</span>
            </div>
            <div className={Style.btnContainer}>
              {isOpen && <Modal closeModal={closeModal} />}
              <button className={Style.bookBtn} onClick={() => setIsOpen(true)}>
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
      <Listen />
      <div className={Style.members}>Members</div>
      <div className={Style.characterCardContainer}>
        <CharacterCard
          image={Alex}
          name="Alex Thompson"
          role="Lead Guitarist"
        />
        <CharacterCard
          image={Lisa}
          name="Lisa Martinez"
          role="Rhythm Guitarist"
        />
        <CharacterCard image={Max} name="Max Johnson" role="Bass Guitarist" />
        <CharacterCard image={Sarah} name="Sarah Harrison" role="Keyboardist" />
        <CharacterCard image={Jake} name="Jake Davis" role="Drummer" />
        <CharacterCard
          image={Michelle}
          name="Michelle Addams"
          role="Lead Vocalist"
        />
        <CharacterCard
          image={Evan}
          name="Evan Anderson"
          role="Multi-Instrumentalist"
        />
      </div>
    </>
  );
};
export default Home;
