import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Contexts/UserContext';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { googleSignIn, githubSignIn, login, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const handleEmailChange = (e) => {
        const email = e.target.value;

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrors({ ...errors, email: "Please provide a valid email" });
            setUserInfo({ ...userInfo, email: "" });
        } else {
            setErrors({ ...errors, email: "" });
            setUserInfo({ ...userInfo, email: e.target.value });
        }
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        const lengthError = password.length < 6;

        if (lengthError) {
            setErrors({ ...errors, password: "Must be at least 6 characters" });
            setUserInfo({ ...userInfo, password: "" });
        }
        else {
            setErrors({ ...errors, password: "" });
            setUserInfo({ ...userInfo, password: e.target.value });
        }
    };

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        login(email, password)
            .then(res => {
                toast.success('Login Successful')
                navigate(from, { replace: true })
                const user = res.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setPasswordError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true })
                toast.success('Login Successful')
            })
            .catch(error => {
                console.error(error)
                setPasswordError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true })
                toast.success('Login Successful')
            })
            .catch(error => {
                console.error(error)
                setPasswordError(error.message)
            })
    }

    const handleResetPassword = () => {
        resetPassword(userEmail)
            .then(res => toast.success('Reset link has been sent to your email...'))
            .catch(error => {
                console.error(error)
                setPasswordError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col mb-52">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-2">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onBlur={e => setUserEmail(e.target.value)}
                                onChange={handleEmailChange}
                                type="email" name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <p className="error-message text-red-600">{errors.email}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handlePasswordChange} type="password" name="password" placeholder="password" className="input input-bordered" />

                            {errors.password && <p className="error-message text-red-600">{errors.password}</p>}
                            <div className='flex justify-center'>
                                <button onClick={handleGoogleSignIn} aria-label='Log in with Google' className='p-3 rounded-sm'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 32 32'
                                        className='w-5 h-5 fill-current'
                                    >
                                        <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                                    </svg>
                                </button>
                                <button onClick={handleGithubSignIn} aria-label='Log in with Github' className='p-3 rounded-sm'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 32 32'
                                        className='w-5 h-5 fill-current'
                                    >
                                        <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
                                    </svg>
                                </button>
                            </div>
                            <label className="label">
                                <Link onClick={handleResetPassword} to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <p className='text-red-600'>{passwordError}</p>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                Don't have an account yet?{' '}
                                <Link to='/register' className='hover:underline text-gray-600'>
                                    Sign up
                                </Link>
                                <div className=""></div>
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;