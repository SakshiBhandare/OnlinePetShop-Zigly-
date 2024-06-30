import { Card, Rating } from '@material-tailwind/react';
import React from 'react';

const Review = () => {
    return (
        <>
            <div className='p-10'>
                <Card className="mt-6 w-96 h-max p-5">
                    <Rating value={5} className='justify-center py-4' />
                    <p className='text-wrap text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem quibusdam fugit, voluptatem cumque corrupti in ratione, recusandae alias voluptates illo nam tenetur perferendis a aperiam maiores, libero ipsam quisquam doloremque repellat? Quod, tenetur dolores. Quia architecto earum nulla, vero ad perspiciatis soluta esse adipisci molestias! Dicta, repudiandae unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas quam inventore deleniti necessitatibus eos, aliquid repellat, amet dolorum voluptatibus magnam mollitia. Nesciunt odio quis delectus, assumenda cupiditate possimus quae!</p>
                    <h1 className='text-center text-indigo-900 font-bold py-3'>Sakshi Bhandare</h1>
                </Card>
            </div>
        </>
    );
};

export default Review;