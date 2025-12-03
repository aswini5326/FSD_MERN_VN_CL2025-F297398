import React, { useState } from "react";

const FruitsManager = () => {
  const [fruits, setFruits] = useState(["Apple", "Mango", "Banana"]);
  const [newFruit, setNewFruit] = useState("");

  const addFruit = (e) => {
    e.preventDefault();
    if (newFruit.trim() !== "") {
      setFruits([...fruits, newFruit]);
      setNewFruit("");
    }
  };

  const deleteFruit = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "350px",
      }}
    >
      <h3 style={{ color: "#333" }}>Fruits Manager</h3>

      <form
        onSubmit={addFruit}
        style={{
          marginBottom: "15px",
          display: "flex",
          gap: "8px",
        }}
      >
        <input
          type="text"
          value={newFruit}
          placeholder="Add fruit"
          onChange={(e) => setNewFruit(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            padding: "8px 12px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>

      {fruits.map((f, i) => (
        <div
          key={i}
          style={{
            background: "#f3f3f3",
            padding: "10px",
            marginBottom: "8px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {f}{" "}
          <button
            onClick={() => deleteFruit(i)}
            style={{
              background: "#e74c3c",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default FruitsManager;
