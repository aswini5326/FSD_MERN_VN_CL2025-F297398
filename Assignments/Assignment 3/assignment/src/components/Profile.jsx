import React from "react";
import ProfileCard from "./ProfileCard";
import Img1 from "../assets/img1.avif";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";

const Profile = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", color: "red" }}>Employee Details</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileCard name="John" role="Developer" image={Img1} />
        <ProfileCard name="Maya" role="Designer" image={Img2} />
        <ProfileCard name="Ravi" role="Tester" image={Img3} />
      </div>
    </div>
  );
};

export default Profile;
