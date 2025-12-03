import React, { useState } from "react";

const ProfileEditor = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const updateField = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "350px"
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#333" }}>Profile Editor</h3>

      {/* Input Fields */}
      <input
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={updateField}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <input
        name="email"
        placeholder="Email"
        value={profile.email}
        onChange={updateField}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={profile.phone}
        onChange={updateField}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* Profile Output */}
      <div
        style={{
          background: "#f4f4f4",
          padding: "12px",
          borderRadius: "5px",
          marginTop: "15px",
          border: "1px solid #ddd",
        }}
      >
        <p style={{ margin: 0, lineHeight: "1.6" }}>
          <b>Updated Profile:</b>
          <br />
          Name: {profile.name}
          <br />
          Email: {profile.email}
          <br />
          Phone: {profile.phone}
        </p>
      </div>
    </div>
  );
};

export default ProfileEditor;
