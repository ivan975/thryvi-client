import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const premium = useLoaderData();
    console.log(premium);
    return (
        <div>
            <div className="w-96 h-44 bg-base-100 shadow-xl mt-6 mb-40 rounded-lg mx-auto">
                <figure><img src={premium.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">ID:{premium.id}</h2>
                    <h2 className="card-title">Course name:{premium.title}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Premium;
