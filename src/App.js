import React from "react";
import { Keypad, Display } from "./components.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="display">
        <Display />
      </section>
      <section className="keypad">
        <Keypad />
      </section>
    </div>
  );
}

export default App;
