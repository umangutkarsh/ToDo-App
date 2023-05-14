import React, { useState } from "react";

function InputArea(props) {

  const [isMouseOver, setMouseOver] = useState(false);
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button 
        style={{backgroundColor: isMouseOver ? "black" : "white"}}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
