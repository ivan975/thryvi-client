import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();

    return (
        <div className=''>
            <div className="flex justify-center mt-36 ">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={details.image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">ID:{details.id}</h2>
                        <h2 className="card-title text-2xl font-bold">Course Name:{details.title}</h2>
                        <p className='text-start'>Details:{details.description}</p>
                        <div className="card-actions justify-end">
                            <Link to={`../premium/${details.id}`}
                                className="btn btn-secondary">
                                Get premium access
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;