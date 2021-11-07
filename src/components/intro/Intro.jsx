import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Concepteur", "Developpeur"] ,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img id="dev"src="https://number8.com/wp-content/uploads/2021/01/2021-software-development-salary-trends.png" alt="DeveloperImage" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Salut, je suis </h2>
          <h1>Rémy</h1>
          <h3>
            Junior <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
