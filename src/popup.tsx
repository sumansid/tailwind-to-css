import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { getConvertedClasses } from "./helpers";

const Popup = () => {
  const [input, setInput] = useState("");

  const [result, setResult] = useState("");

  const processInput = () => {
    const resultCss = getConvertedClasses(input);
    setResult(resultCss);
  };
  return (
    <div className="bg-black w-72 h-72 flex items-center">
      <div className="text-lg text-black rounded bg-white m-5">
        Select tailwind classes to display raw CSS
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
