import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DepartmentCard from '../components/DepartmentCard';
import '../pages/Home.css'

const Home = () => {
    const [departments,setDepartments] = useState([]);

    useEffect(() => {
        fetch('src/data/departments.json')
        .then((res) => res.json())
        .then((data) => setDepartments(data))
        .catch((e) => console.error('Failed to load departments:' ,e));
    },[]);

    const top = departments.slice(0,3);
  return (
    <div className='home'>
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to GEC College</h1>
                <p>Shaping future leaders with knowledge, skills and values.</p>
                <div className="hero-buttons">
                    <Link to='/about' className='btn'>About</Link>
                    <Link to='/departments' className='btn'>Departments</Link>
                </div>
            </div>
        </section>

        <section className="why">
            <h2>Why this college?</h2>
            <p>Strong industry connections, experienced faculty, practical learning and modern facilities.</p>
        </section>

        <section className="top-depts">
            <h2>Top Departments</h2>
            <div className="grid">
                {top.map((d) => (
                    <DepartmentCard key={d.id} dept={d}/>
                ))}
            </div>
        </section>

        <section className="explore">
            <h3>Explore more</h3>
            <Link to='/departments' className='btn'>All Departments</Link>
        </section>
    </div>
  )
}

export default Home