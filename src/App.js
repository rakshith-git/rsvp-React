import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
const inputText =
  "Note: When using the opacity property to add transparency to the background of an element, all of its child elements become transparent as well. This can make the text inside a fully transparent element hard to read. If you do not want to apply opacity to child elements, use RGBA color values instead ( below).";
const textArray = inputText.split(" ");
let count = 0;

function App() {
  const [value, setValue] = useState(50);
  const [halfLen, setHalfLen] = useState(2);
  const [increment, setIncrement]= useState(0)

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (increment===0 || count>=textArray.length-1) return () => clearInterval(intervalId);

      setCurrentIndex((currentIndex) => {
        setHalfLen((halfLen) => {
          console.log(increment);
          if(currentIndex + 1<textArray.length)
          return Math.floor(textArray[currentIndex + 1].length / 2);
        });

        return (currentIndex + increment) ;
      });

      count++;
    }, 50000 / value); // Change the interval time here to adjust the speed of the RSVP

    return () => clearInterval(intervalId);
  }, [value,increment]);




  function handleClick() {
    count = 0;
    setCurrentIndex((currentIndex) => 0);
    let temp = value;
    setValue((value) => 1);
    setTimeout(() => {
      console.log("1 second have passed.");
      setValue((value) => temp);
    }, 1000);
  }



  
  function handleClickPause() {
    if(increment===0)
    setIncrement(()=>1)
    else
    setIncrement(()=>0)
  }

  return (
    <>
      <Navbar
        title="RSVP"
        first="Home"
        second="About"
        dropDown="Mode"
        dropDownitem1="lmao1"
        dropDownitem2="lmao2"
      />
      
      <div className="rsvp">
        <h1 className="darkertxt" style={{ color: "white" }}>
          {textArray[currentIndex].slice(0, halfLen)}
        </h1>
        <h2 className="lightertxt" >
          {textArray[currentIndex].slice(halfLen, textArray[currentIndex].length)}
        </h2>
      </div>
      <div className="prog">
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-success"
            aria-label="Success example"
            style={{ width: (count / (textArray.length-1)) * 100 + "%" }}
          >
            {parseInt((count * 100) / (textArray.length-1)) + "%"}
          </div>
        </div>

        <div className="slider">
          <label htmlFor="customRange1" className="form-label">
            wpm={parseInt(60 * (1000 / (60000 / value)))}
          </label>
          <input
            type="range"
            className="form-range"
            min="1"
            max="700"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            id="customRange1"
          />
        </div>
        <div className="plbButtons">
        <button type="button" className="btn btn-success" onClick={handleClickPause}>
          pause
        </button>
        <button type="button" className="btn btn-success" onClick={handleClick}>
          Restart
          <button type="button" className="btn btn-success" onClick={handleClick}>
          Restart
        </button></button>
        
        </div>

      </div>
    </>
  );
}

export default App;
