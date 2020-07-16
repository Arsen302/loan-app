import React from "react";
import Modal from "react-modal";
import FirstLoan from "./FirstLoan";

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

function FirstLoanItem({ title, totalAmount, setTotalAmount }) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [invested, setInvested] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(false);
  };

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
            onRequestClose={openModal}
            style={customStyles}
          >
            <FirstLoan
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default FirstLoanItem;
