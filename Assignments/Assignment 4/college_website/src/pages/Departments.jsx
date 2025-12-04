import React, { useEffect, useState } from "react";
import DepartmentCard from "../components/DepartmentCard";
import '../pages/Departments.css'

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("/src/data/departments.json")
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .catch((e) => console.error("Failed to load departments:", e));
  }, []);
  return (
    <div className="departments-page">
<h2>Departments</h2>
<div className="grid">
{departments.map((d) => (
<DepartmentCard key={d.id} dept={d} />
))}
</div>
</div>
  );
};

export default Departments;
