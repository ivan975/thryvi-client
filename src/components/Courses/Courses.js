import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <h2 className='text-3xl font-bold'>Courses</h2>
            <div className='courses-container'>
                <div className='details-container'>
                    {
                        courses.map(course =>
                            <CourseDetails
                                key={course.id}
                                course={course}
                            ></CourseDetails>)
                    }
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>Courses List</h2>
                    {
                        courses.map(course => <p className='py-5 hover:bg-zinc-400' key={course.id}>
                            <Link to={`../details/${course.id}`}>{course.title}</Link>
                        </p>
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default Courses;