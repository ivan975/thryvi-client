import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';

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
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-12 mt-5 gap-3'>
                {
                    courses.map(course => <CourseDetails
                        key={course.id}
                        course={course}
                    ></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Courses;