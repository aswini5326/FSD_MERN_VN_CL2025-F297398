import React, { useEffect, useState } from "react";
import axios from "axios";

const EditUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    age: "",
  });

  const [updated, setUpdated] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/1")
      .then((res) =>
        setUser({
          firstName: res.data.firstName,
          email: res.data.email,
          age: res.data.age,
        })
      )
      .catch(() => console.log("Error fetching user"));
  }, []);

  const handleUpdate = () => {
    axios
      .put("https://dummyjson.com/users/1", user)
      .then(() => setUpdated("User Updated Successfully!"))
      .catch(() => setUpdated("Update Failed"));
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "25px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h3>Edit User</h3>

        <input
          type="text"
          value={user.firstName}
          placeholder="First Name"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          value={user.email}
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="number"
          value={user.age}
          placeholder="Age"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleUpdate}
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            border: "none",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Update
        </button>

        {updated && (
          <p style={{ marginTop: "15px", color: "green", fontWeight: "bold" }}>
            {updated}
          </p>
        )}
      </div>
    </div>
  );
};

export default EditUser;
