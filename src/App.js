import { useState } from "react";
import "./App.css";
import Modal from "react-modal";

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

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Form
      </button>

      <Modal
        isOpen={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal">
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form>
              <div>
                <div>Username:</div>
                <input required id="username"></input>
              </div>
              <div>
                <div>Email Address:</div>
                <input required id="email"></input>
              </div>
              <div>
                <div>Phone Number:</div>
                <input required id="phone"></input>
              </div>
              <div>
                <div>Date of Birth:</div>
                <input required id="dob"></input>
              </div>
              <button className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
