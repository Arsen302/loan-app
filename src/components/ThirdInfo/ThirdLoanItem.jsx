import React from "react";
import Modal from "react-modal";
import ThirdLoan from "./ThirdLoan";

import "../../App.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function ThirdLoanItem({ title, totalAmount, setTotalAmount }) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [invested, setInvested] = React.useState(false);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-value">
          <p className="card-text">
            Some quick example text to build on the card
          </p>
          <button
            className="btn btn-outline-success"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            invest
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
          >
            <ThirdLoan
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ThirdLoanItem;
