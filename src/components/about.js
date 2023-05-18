import React from "react";
import Navbar from "./navbar";

export default function About() {
  return (
    <div>
      <Navbar
        title="RSVP"
        first="Home"
        second="About"
        dropDown="Mode"
        dropDownitem1="lmao1"
        dropDownitem2="lmao2"
      />
      <h1>This is About</h1>
    </div>
  );
}
