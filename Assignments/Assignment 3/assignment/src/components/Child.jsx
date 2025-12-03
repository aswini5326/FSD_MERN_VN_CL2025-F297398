import React from 'react'

const Child = (props) => {
  const buttonStyle = {
    backgroundColor:"magenta",
    color:"white",
    padding:"10px",
    border:"none",
    borderRadius:"5px",
    cursor:"pointer"
  };
  return (
    <div>
        <button onClick={props.onButtonClick} style={buttonStyle}>Click Me</button>
    </div>
  )
}

export default Child