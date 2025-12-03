import React from "react";

const ProfileCard = (props) => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "150px",
        boxShadow: "2px 2px 8px #444",
        borderRadius: "10px",
        borderStyle: "dotted",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <img src={props.image} alt="img" style={{ width: "150px",borderRadius:"5px" }} />
      <h3>Name: {props.name}</h3>
      <p style={{color:"grey"}}>Role: {props.role}</p>
    </div>
  );
};

export default ProfileCard;
