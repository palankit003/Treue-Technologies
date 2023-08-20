import { useState } from "react";
import Style from "./Footer.module.css";
const Footer = () => {
  const [email, setEmail] = useState("");
  const receiveEmail = () => {
    if (email == "") {
      alert("Fill email");
    } else {
      alert(`${email} will receive updates`);
      setEmail("");
    }
  };
  return (
    <>
      <div className={Style.formContainer}>
        <p className={Style.signUp}>Sign Up for News</p>
        <div className={Style.emailBtnContainer}>
          <div>
            <input
              placeholder="Enter Email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className={Style.btnContainer}>
            <button className={Style.btn} onClick={() => receiveEmail()}>
              Receive Updates
            </button>
          </div>
        </div>
      </div>

      <div className={Style.container}>
        <div className={Style.logoContainer}>
          <div className={Style.seven}>7</div>
          <div className={Style.logo}>ROCK</div>
          <div className={Style.seven}>7</div>
        </div>
        <p>© 2023 Ankit</p>
      </div>
    </>
  );
};
export default Footer;
