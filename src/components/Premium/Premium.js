import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Premium = () => {
    const premium = useLoaderData();

    return (
        <div>
            <Pdf
                targetRef={ref} filename="">
                {({ toPdf }) => <button className='btn btn-primary mt-5' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div className="w-96 h-44 bg-base-100 shadow-xl mt-6 mb-40 rounded-lg mx-auto">
                <figure><img src={premium.image} alt="" /></figure>
                <div className="card-body" ref={ref}>
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
