import React, { useContext } from 'react'
import loading from '../assets/img/loading.png'
import AppContext from '../context/AppContext'
const Loading = () => {

    const { spinner } = useContext(AppContext);

    if(!spinner) return null;
    return (
        <>
            <div className="bg-loading h-screen w-screen fixed z-50 flex flex-col justify-center text-center m-auto">
                <div className="animate-spin mx-auto">
                    <img src={loading} alt="" className="h-20" />
                </div>
                <h1 className="font-medium text-2xl">Loading...</h1>
            </div>
        </>
    );
}

export default Loading;