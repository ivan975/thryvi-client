import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        console.log(name, email, photoURL, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col mb-64">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-2">Sign Up</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                Already have an account?{' '}
                                <Link to='/login' className='hover:underline text-gray-600'>
                                    Login
                                </Link>
                                .
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;