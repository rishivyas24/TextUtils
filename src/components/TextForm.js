import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    // console.log(" button clicked");
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLowerCase = () => {
    // console.log(" button clicked");
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleClearText = () => {
    // console.log(" button clicked");
    let clear = "";
    setText(clear);
    props.showAlert("Cleared Textarea!", "success");
  };

  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Empty Spaces!", "success");
  };
  const InvertTextCase = () => {
    // console.log(" button clicked");

    setText(
      text
        .split("")
        .map((char) => {
          if (char === char.toUpperCase()) {
            return char.toLowerCase();
          }
          return char.toUpperCase();
        })
        .join("")
    );
    props.showAlert("Inverted Text!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("event occured");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter text Here"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Handle Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={InvertTextCase}>
          Invert Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          Characters Count {text.length} | Word Count {text.split(" ").length} |
          Lines Count {text.split("\n").length}
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <div className="content">
          <h2>Preview</h2>
          <hr />
          <p>
            {text.length > 0
              ? text
              : "Enter Something in the textbox to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
