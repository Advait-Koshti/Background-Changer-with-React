import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="vw-100 vh-100" style={{ backgroundColor: color }}>
        <div className="fixed d-flex flex-wrap justify-content-center px-3 py-2">
          <div className="d-flex flex-row justify-content-center flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-4">
            <button
              className="px-3 py-1 rounded-4 text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="px-3 py-1 rounded-4 text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="px-3 py-1 rounded-4 text-white"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="px-3 py-1 rounded-4 text-white"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button
              className="px-3 py-1 rounded-4 text-white"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="px-3 py-1 rounded-4 text-white"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
