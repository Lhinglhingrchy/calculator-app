import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="calculator">
          {/* show calculate */}
          <div className="summary">
            <input type="text" />
          </div>
          {/* all button */}
          <div className="all-button">
            <div className="button-line-1">
              <button>AC</button>
              <button>DE</button>
              <button>.</button>
              <button>/</button>
            </div>
            <div className="button-line-2">
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>x</button>
            </div>
            <div className="button-line-3">
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>-</button>
            </div>
            <div className="button-line-4">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>+</button>
            </div>
            <div className="button-line-5">
              <button>00</button>
              <button>0</button>
              <button>.</button>
              <button>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
