import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite Heros</h1>
       <img className="imgsize"src="https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg" alt="ironman" />
    <img className="imgsize" src="https://m.media-amazon.com/images/I/71vntClRfjL._AC_SL1500_.jpg" alt="captian" />
    <img src={img +"?grayscale"} alt="captian" />
  </div>,
  document.getElementById("root")
);
