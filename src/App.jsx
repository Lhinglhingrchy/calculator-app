import { useState } from "react";

import "./App.css";

function App() {
  const [summary, setSummary] = useState("");
  const handle = (e) => {
    setSummary(summary + e.target.innerHTML);
  };
  const allClear = () => {
    setSummary("");
  };
  const dell = () => {
    setSummary(summary.toString().slice(0, -1));
  };
  return (
    <>
      <div className="container">
        <div className="calculator">
          {/* show calculate */}
          <div className="summary">
            <input type="text" value={summary} />
          </div>
          {/* all button */}
          <div className="all-button">
            <div className="button-line-1">
              <button onClick={allClear}>AC</button>
              <button onClick={dell}>DE</button>
              <button>%</button>
              <button onClick={handle}>/</button>
            </div>
            <div className="button-line-2">
              <button onClick={handle}>7</button>
              <button onClick={handle}>8</button>
              <button onClick={handle}>9</button>
              <button onClick={handle}>*</button>
            </div>
            <div className="button-line-3">
              <button onClick={handle}>4</button>
              <button onClick={handle}>5</button>
              <button onClick={handle}>6</button>
              <button onClick={handle}>-</button>
            </div>
            <div className="button-line-4">
              <button onClick={handle}>1</button>
              <button onClick={handle}>2</button>
              <button onClick={handle}>3</button>
              <button onClick={handle}>+</button>
            </div>
            <div className="button-line-5">
              <button onClick={handle}>00</button>
              <button onClick={handle}>0</button>
              <button onClick={handle}>.</button>
              <button
                onClick={() => {
                  setSummary(eval(summary));
                }}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
