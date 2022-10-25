import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse bg-rose-300 rounded-lg p-12 mb-14">
                    
                    <div>
                        <h1 className="text-5xl font-bold flex justify-start">Learn new technologies</h1>
                        <p className="py-6 text-start mr-52">This is one of the best platform to explore technologies and this is an non-profit organization.</p>
                        <button className="btn btn-primary flex">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;