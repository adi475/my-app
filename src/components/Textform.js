import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("write something....");

  const switchToUpdate = (event) => {
    setText(event.target.value);
  };

  const switchToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.shwAlrt(" converted to uppercase","success")
  };

  const switchToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.shwAlrt(" converted to lowercase","success")
  }

  const switchToClear = () => {
    let newText = "";
    setText(newText);
    props.shwAlrt(" cleared","success")

  }

  const handleToCopy = () => {
    let txt = document.getElementById("myBox");    // getting the text field.
    txt.select();                                 // The select() method is used to select the content of a text field.
    navigator.clipboard.writeText(txt.value);
    props.shwAlrt(" copied to clipboard","success")
  }

  const removeExtraSpaces = () => {
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" "));
  }

  return (
    <>
    <div className={`container text-${props.mode === "light" ? "dark":"light"}`}>
        <div className="form-group my-3">
          <h4><strong>{props.heading}</strong></h4>
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode === "dark" ? "#101b36":"white" , color: props.mode === "dark" ? "white":"black"}}
            value={text}
            onChange={switchToUpdate}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
      <button disabled={text.length === 0} className={`btn btn-${props.mode === "light" ? "primary":"secondary"} my-1`} onClick={switchToUpperCase}>
        Convert To Uppercase
      </button>
      <button disabled={text.length === 0} className={`btn btn-${props.mode === "light" ? "primary":"secondary"} my-1 mx-2`} onClick={switchToLowerCase}>Convert To Lowercase</button>
      <button  disabled={text.length === 0} className={`btn btn-${props.mode === "light" ? "primary":"secondary"} my-1`} onClick={removeExtraSpaces}>Remove Xtra Spaces</button>
      <button  disabled={text.length === 0} className={`btn btn-${props.mode === "light" ? "success":"secondary"} my-1 mx-2`} onClick={handleToCopy}>Copy text</button>
      <button  disabled={text.length === 0} className={`btn btn-${props.mode === "light" ? "danger":"secondary"} my-1`} onClick={switchToClear}>Clear text</button>
    </div>

    <div className= {`container my-3 text-${props.mode === "light" ? "dark":"light"}`}>
      <h4>Your text summary:</h4>
      <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters.</p>
      {/* expression enclosed by / / is called regular expression. in above split function we use regular exp. for spliting text from next line(\s) and by white/blank spaces(+) */}
      <h4>Preview:</h4>
      <p>{text.length === 0 ? "Nothing to preview!":text}</p>
    </div>
    </>
  );
}
