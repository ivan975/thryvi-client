import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import avatar from '../../assests/avatar.jpeg';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="mx-auto mt-10 w-96 bg-base-100 shadow-xl">
                <figure><img className='w-96 h-96' src={user?.photoURL ? user.photoURL : avatar} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name:{user?.displayName ? user.displayName : 'Null'}
                    </h2>
                    <span className='text-gray-700 text-start'>Email:{user?.email}</span>
                    <span className='flex items-center space-x-2 w-full'>
                        <span className='text-gray-700 text-small text-start'>
                            Email Status:{ }
                            {user?.emailVerified ? (<span className='text-green-600'>Verified</span>) : (<span className='text-red-600'>Not Verified</span>)}
                        </span>
                    </span>
                    <span className='flex items-center space-x-2 w-full text-start'>
                        <span className='text-gray-700 text-small w-full'>
                            ID:<span>{user?.uid}</span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Profile;