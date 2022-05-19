import { useState } from "react";
import Navbar from "../components/Navbar";
import Windows from "../components/Windows";
import "../css/home.css";
import userlogo from "../assets/Icon_26.ico";
import ordi from "../assets/Computer.ico";
import program from "../assets/Programs.ico";
import trash from "../assets/Uninstall.ico";
import lecteur from "../assets/lecteur.ico";

export default function Home() {
  const [windowsChange, setWindowsChange] = useState(false);
  function onClickWindows() {
    setWindowsChange(!windowsChange);
  }
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="icondesktop-container">
        <div className="icondesktop">
          <button onClick={onClickWindows} type="button" className="btn-logo">
            <img src={userlogo} className="icon-btn" alt="user" />
            <p className="text-btn">À propos de moi </p>
          </button>
        </div>
        <div className="icondesktop">
          <a href="https://immotep.herokuapp.com/">
            <button type="button" className="btn-logo">
              <img src={ordi} className="icon-btn" alt="user" />
              <p className="text-btn">Immotep</p>
            </button>
          </a>
        </div>
        <div className="icondesktop">
          <a href="https://msarava.github.io/beernb/">
            <button type="button" className="btn-logo">
              <img src={program} className="icon-btn" alt="user" />
              <p className="text-btn">Beernb</p>
            </button>
          </a>
        </div>
        <div className="icondesktop">
          <a href="https://p3-2109-veloloco-front.toulouse-1.wilders.dev">
            <button type="button" className="btn-logo">
              <img src={trash} className="icon-btn" alt="user" />
              <p className="text-btn">Veloloco</p>
            </button>
          </a>
        </div>
        <div className="icondesktop">
          <a href="https://marmithonxchatperche.vercel.app/">
            <button type="button" className="btn-logo">
              <img src={lecteur} className="icon-btn" alt="user" />
              <p className="text-btn">Marmithon x ChatPerché</p>
            </button>
          </a>
        </div>
      </div>
      {windowsChange ? (
        <Windows
          setWindowsChange={setWindowsChange}
          windowsChange={windowsChange}
        />
      ) : null}
    </div>
  );
}
