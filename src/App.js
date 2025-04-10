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

function isFutureDate(inputDate) {
  const now = new Date();
  const date = new Date(inputDate);
  return date.getTime() > now.getTime();
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState({
    user: "",
    email: "",
    phone: "",
    dob: "",
  });
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (userInput.phone.length !== 10) {
                  alert("Invalid phone number");
                }
                else if (userInput.email.includes("@") === false) {
                  alert("Invalid email");
                }
                else if (isFutureDate(userInput.dob)) {
                  alert("Invalid date of birth");
                }
                else setShowModal(false);
              }}
            >
              <div>
                <div>Username:</div>
                <input
                  required
                  id="username"
                  value={userInput.user}
                  onChange={(e) => {
                    setUserInput((prev) => ({ ...prev, user: e.target.value }));
                  }}
                ></input>
              </div>
              <div>
                <div>Email Address:</div>
                <input
                  required
                  id="email"
                  value={userInput.email}
                  onChange={(e) => {
                    setUserInput((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                ></input>
              </div>
              <div>
                <div>Phone Number:</div>
                <input
                  required
                  id="phone"
                  value={userInput.phone}
                  onChange={(e) => {
                    setUserInput((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }));
                  }}
                ></input>
              </div>
              <div>
                <div>Date of Birth:</div>
                <input
                  required
                  id="dob"
                  value={userInput.dob}
                  onChange={(e) => {
                    setUserInput((prev) => ({
                      ...prev,
                      dob: e.target.value,
                    }));
                  }}
                ></input>
              </div>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
