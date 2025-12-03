import React from "react";

const StudentCards = () => {
  const students = [
    { name: "Akash", dept: "CSE", year: 3 },
    { name: "Maya", dept: "EEE", year: 2 },
    { name: "Ravi", dept: "IT", year: 1 },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Student Cards</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {students.map((s, index) => {
          return (
            <div
              key={index}
              style={{
                border: "2px solid grey",
                padding: "10px",
                width: "150px",
                borderRadius: "10px",
                boxShadow: "2px 2px 8px #333",
                textAlign: "center",
              }}
            >
              <h4>{s.name}</h4>
              <p>{s.dept}</p>
              <p>{s.year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentCards;
