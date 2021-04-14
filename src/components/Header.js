import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Header = () => {

    const { authentication, logout, user, newSearch } = useContext(AppContext);

    return (
        <>
            <div className="flex flex-row text-white bg-black rounded-b-2xl p-1.5 justify-between">
                <div className="flex flex-row select-none cursor-pointer" onClick={newSearch}>
                    <div className="bg-blue-600 w-3 h-3 rounded-full my-4 ml-3 md:ml-6"></div>
                    <div className="bg-pink-600 w-3 h-3 rounded-full my-4 ml-0.5 mr-1"></div>
                    <div>
                        <h1 className="text-2xl font-bold my-1.5 ">Dglickr</h1>
                    </div>
                </div>
                <div className="flex flex-row">
                    {authentication ?
                        <>
                            <div>
                                <h1 className="font-medium px-2 py-0.5 mx-1 md:px-4 my-2 hover:bg-blue-600 transition duration-500 rounded text-lg select-none">Hi! {user.name}</h1>
                            </div>

                            <Link to="/register">
                                <div className="mt-2">
                                    <button className="font-medium px-2 py-0.5 mx-1 mr-3 md:px-4 md:mr-6 hover:bg-pink-600 transition duration-500 rounded text-lg" onClick={logout}>Logout</button>
                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <Link to="/login">
                                <button className="font-medium px-2 py-0.5 mx-1 md:px-4 my-2 hover:bg-blue-600 transition duration-500 rounded text-lg">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="font-medium px-2 mt-2 py-0.5 mx-1 mr-3 md:px-4 md:mr-6 hover:bg-pink-600 transition duration-500 rounded text-lg">Register</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default Header;