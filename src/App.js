import logo from "./logo.svg";
import "./App.css";

import myPic from "./mypic.jpg";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vx" }}>
      <h1 className="title red">Mary</h1>
      <br />
      <img src={myPic} />
      <br />
      <img src="/logo192.png" alt="pic" />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uurgVNa_Y84"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
