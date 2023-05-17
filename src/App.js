import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Accordion from "./components/accordian";

let count = 0;

function App() {
  const [value, setValue] = useState(50);
  const [isBionic, setisBionic] = useState(false);
  const [inputText, setinputText] = useState("");
  const [halfLen, setHalfLen] = useState(2);
  const [increment, setIncrement] = useState(0);
  const [pause, setpause] = useState("Start");
  const [modeTxt, setModeTxt] = useState("Bionic")
  const [currentIndex, setCurrentIndex] = useState(0);
  let textArray = [];

  if(inputText)
  {
    textArray=inputText.split(" ")
  }
  else
  {
    setinputText("Enter text")
  }


  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (increment === 0 || count >= textArray.length - 1)
        return () => clearInterval(intervalId);

      setCurrentIndex((currentIndex) => {
        setHalfLen((halfLen) => {
          
          if (currentIndex + 1 < textArray.length)
            return Math.floor(textArray[currentIndex + 1].length / 2);
        });

        return currentIndex + increment;
      });

      count++;
    }, 50000 / value); // Change the interval time here to adjust the speed of the RSVP
    return () => clearInterval(intervalId);
  }, [value, increment]);



  function processText(text)
  {   
    setIncrement(0);
    setpause("Start");
    console.log(text)
    if(text)
      return(text.replace(/\n/g, ' . ').replace('-',' ').trim())
    
      else{
      console.log("null")
      setinputText(" ")
      return("Enter text")
      
    }
  }


  const mode = () => {
    try {
    if(inputText)
    { console.log(inputText)
    if (isBionic===true)
    return (
      <>
        <h1 className="darkertxt" style={{ color: "white" }}>
          {textArray[currentIndex].slice(0, halfLen)}
        </h1>
        <h1 className="lightertxt">
          {textArray[currentIndex].slice(
            halfLen,
            textArray[currentIndex].length
          )}
        </h1>
      </>
    );
    else return(<><h1 className="darkertxt" style={{ color: "white" }}>
    {textArray[currentIndex]}
  </h1></>);
    }
    else throw new Error('Text is empty or undefined');
  }
    catch (error) {
      console.error(error.message);
    }
  
  };


  function handleClickPause() {
    if (increment === 0) {
      setIncrement(() => 1);
      setpause(() => "Pause");
    } else {
      setIncrement(() => 0);
      setpause(() => "Start");
    }
  }
  function handleClickRestart() {
    count = 0;
    setCurrentIndex((currentIndex) => 0);
    setIncrement(0);
    setpause("Start");
    
  }
  function handleClickBionic() {
    if (isBionic === false) {
      setisBionic(true);
      setModeTxt("Normal");
    } 
    else 
    {
      setisBionic(false);
      setModeTxt("Bionic");
    }
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

      <Accordion inpFunc={(e) => setinputText(processText(e.target.value))} />
      <div className="rsvp">{mode()}</div>
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
            style={{ width: (count / (textArray.length - 1)) * 100 + "%" }}
          >
            {parseInt((count * 100) / (textArray.length - 1)) + "%"}
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
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClickPause}
          >
            {pause}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClickRestart}
          >
            Restart
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClickBionic}
          >
            {modeTxt}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
