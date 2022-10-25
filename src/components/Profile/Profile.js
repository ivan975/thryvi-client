import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import avatar from '../../assests/avatar.jpeg';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="flex flex-col max-w-xs p-6 shadow-md rounded-xl sm:px-12  text-gray-500">
                <img src={user?.photoURL ? user.photoURL : avatar} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl text-start">Name:{user?.displayName ? user.displayName : 'Name Not Available'} </h2>
                        <span className='text-gray-700'>Email:{user?.email}</span>
                        <span className='flex items-center space-x-2 w-full'>
                            <span className='text-gray-700 text-small'>
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
        </div>
    );
};

export default Profile;