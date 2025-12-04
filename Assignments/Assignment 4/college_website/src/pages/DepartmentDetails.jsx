import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../pages/DepartmentDetails.css'

const DepartmentDetails = () => {
  const { deptId } = useParams();
  const [dept, setDept] = useState(null);

  useEffect(() => {
    fetch("/src/data/departments.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((d) => d.id === deptId);
        setDept(found || null);
      })
      .catch((e) => console.error("Failed to load department details:", e));
  }, [deptId]);

  if (!dept)
    return (
      <div>
        Department not found. <Link to="/departments">Back to Departments</Link>
      </div>
    );
  return (
    <div className="dept-detail">
      <h2>{dept.name}</h2>
      <p className="full-desc">{dept.fullDescription}</p>

      <section>
        <h3>Courses Offered</h3>
        <ul>
          {dept.courses.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Faculty</h3>
        <ul>
          {dept.faculty.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Labs / Facilities</h3>
        <ul>
          {dept.labs.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </section>

      <Link to="/departments" className="btn outline">
        Back to Departments
      </Link>
    </div>
  );
};

export default DepartmentDetails;
