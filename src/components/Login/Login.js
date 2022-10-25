import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Login = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col mb-52">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-2">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                Don't have an account yet?{' '}
                                <Link to='/register' className='hover:underline text-gray-600'>
                                    Sign up
                                </Link>
                                .
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;