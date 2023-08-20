import { useState } from "react";
import Style from "./Modal.module.css";
interface ModalProps {
  closeModal: () => void;
}
const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [count, setCount] = useState(0);
  const [submit, setSubmit] = useState(false);
  const submitter = () => {
    setSubmit(true);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };
  return (
    <div className={Style.wrapper}>
      <div className={Style.container}>
        <p className={Style.select}>Select number of tickets</p>
        <div className={Style.countContainer}>
          <button
            disabled={count <= 0}
            onClick={() => {
              setCount(count - 1);
            }}
            className={Style.btnSubtract}
          >
            -
          </button>
          {count}
          <button
            disabled={count >= 10}
            onClick={() => {
              setCount(count + 1);
            }}
            className={Style.btnAdd}
          >
            +
          </button>
        </div>
        <div className={Style.submitCloseBtnContainer}>
          <button onClick={submitter} className={Style.submit}>
            Submit
          </button>
          <button onClick={closeModal} className={Style.close}>
            Close
          </button>
        </div>
      </div>
      {submit && (
        <>
          {count == 0 ? (
            <div className={Style.null}>{count} tickets booked</div>
          ) : (
            <div className={Style.notification}>{count} tickets booked</div>
          )}
        </>
      )}
    </div>
  );
};
export default Modal;
