import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div className=''>
            <div className="flex justify-center mt-16 mb-9">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={details.image} alt="country" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{details.title}</h2>
                        <p className='text-start'>{details.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary mr-5">Get Visa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;