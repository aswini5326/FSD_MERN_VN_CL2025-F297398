import React from "react";
import { Link } from "react-router-dom";
import "../components/DepartmentCard.css"


const DepartmentCard = ({ dept }) => {
  return (
    // <div className="dept-card">
    //     <h3>{dept.name}</h3>
    //     <p>{dept.description}</p>
    //     <div className="card-actions">
    //         <button onClick={() => navigate(`/departments/${dept.id}`)}>View More</button>
    //     </div>
    // </div>

    <div className="dept-card">
      <h3>{dept.name}</h3>
      <p>{dept.description}</p>
      <Link className="view-btn" to={`/departments/${dept.id}`}>
        View More
      </Link>
    </div>
  );
};

export default DepartmentCard;
