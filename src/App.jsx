import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (width < 100) {
      setTimeout(() => {
        setWidth(width + 5);
        console.log(width);
      }, 1000);
    }
  }, [width]);
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Progress bar</h1>
      <div className="container">
        <div
          className="bar"
          style={{ width: `${width}%`, color: width > 50 ? "" : "white" }}
        >
          <p> {width}%</p>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>
        {width === 100 ? "Completed" : "Loading..."}
      </h1>
    </div>
  );
}

export default App;
