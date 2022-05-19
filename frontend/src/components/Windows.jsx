import { useState } from "react";
import Draggable from "react-draggable";
import logowindows from "../assets/Icon_1.ico";

function Windows({ windowsChange, setWindowsChange }) {
  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  return (
    <Draggable handle=".topheader" onDrag={(e, data) => trackPos(data)}>
      <div className="windowscontainer">
        <div className="windowsheader">
          <div className="topheader">
            <div className="titlecontainer">
              <img className="logointernet" src={logowindows} alt="icon" />
              <p className="pwindows">Microsoft Pierre Explorer</p>
            </div>

            <div className="btncontainer">
              <button
                className="windowsbtn"
                onClick={() => setWindowsChange(!windowsChange)}
                type="button"
              >
                x
              </button>
            </div>
          </div>
          <div className="middleheader">
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Favorites</p>
            <p>Tools</p>
            <p>Help</p>
          </div>
        </div>
        <div className="bodywindows">
          <h1 className="bodytitle">
            Bonjour, <span>je suis Pierre Berger</span>
          </h1>
          <h2>
            {" "}
            Je suis <span> peut-etre</span> votre futur alternant
          </h2>
        </div>
      </div>
    </Draggable>
  );
}

export default Windows;
