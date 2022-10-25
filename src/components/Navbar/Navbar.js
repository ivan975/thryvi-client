import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                {/* <div className="w-10 rounded-full">
                    <img src="../../assests/logo.jpg" />
                </div> */}
                <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold">Thryvi</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to=''>Courses</Link></li>
                    <li><Link to=''>FAQ</Link></li>
                    <li><Link to=''>Blog</Link></li>
                    <li><Link to=''>Profile</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Sign up</Link></li>
                    <li>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span>Dark Mode</span>
                                <input type="checkbox" className="toggle ml-2" />
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;