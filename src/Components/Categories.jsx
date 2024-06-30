import React from 'react';

const Categories = () => {

    return (
        <>
          <div className='grid grid-rows-1'>
            <div className=''>
                <h1 className='text-red-500 text-center text-4xl font-bold'>Top Categories</h1>
                <div className='grid grid-cols-1 mx-auto'>
                    <div className=''>
                        <img src="https://www.zigly.com/media/wysiwyg/Dog-Food_3.jpg" alt="" className='w-96 h-96'/>
                    </div>
                </div>
            </div>  
          </div>  
        </>
    );
};

export default Categories;