import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    const { id, title, image, description } = course;
    return (
        <div>
            <div className='grid grid-cols-6'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                        </h2>
                        <p className='text-start'>{description}</p>
                        <div className="card-actions justify-around">
                            <Link to={`../details/${course.id}`} className="btn btn-secondary">Show details</Link>
                            <Link to={`../premium/${id}`} className="btn btn-secondary">Get premium access</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;