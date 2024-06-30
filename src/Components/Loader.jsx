import { Spinner } from '@material-tailwind/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadergif from '../Assets/loadergif.gif';

const Loader = () => {
    const dispatch = useDispatch();
    const { loader } = useSelector(state => state.loader);

    return (
        <>
           <div
           style={{display:`${loader===false?"none":""}`}} 
            className='w-full h-screen mx-auto justify-center items-center flex fixed top-0 left-0 z-50'>
                <Spinner className="h-16 w-16 text-gray-900/50 text-white" color='indigo'/>
                <p className='text-xs text-indigo-900'>Loading</p>
                {/* <img src={loadergif} alt="" 
                className='bg-transparent'/> */}
            </div> 
        </>
    );
};

export default Loader;