import React from 'react';
import petparent1 from '../Assets/petparent1.jpg';
import petparent2 from '../Assets/petparent2.jpg';
import petparent3 from '../Assets/petparent3.jpg';
import petparent4 from '../Assets/petparent4.jpg';
import petparent6 from '../Assets/petparent6.avif';
import petparent7 from '../Assets/petparent7.avif';
import petparent8 from '../Assets/petparent8.avif';
import petparent9 from '../Assets/petparent9.avif';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const About = ({ element }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);


    return (
        <>
            <div className='grid grid-rows-1'>
                <div className='flex grid-cols-2 px-28 pt-14 gap-20'>
                    <div className='w-full items-center'>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            <div className="grid gap-4">
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105"
                                        src={petparent1}
                                        alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105"
                                        src="https://zigly-happy-pets.s3.ap-south-1.amazonaws.com/images/happy-pets13.webp"
                                        alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105"
                                        src={petparent4}
                                        alt="gallery-photo"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105"
                                        src={petparent6}
                                        alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105"
                                        src={petparent2}
                                        alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105"
                                        src={petparent9}
                                        alt="gallery-photo"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105"
                                        src={petparent3}
                                        alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 "
                                        src={petparent4}
                                        alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105"
                                        src={petparent7}
                                        alt="gallery-photo"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105"
                                        src={petparent8}
                                        alt="gallery-photo"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="h-auto max-w-full rounded-lg object-cover object-center hover:scale-105"
                                        src="https://zigly-happy-pets.s3.ap-south-1.amazonaws.com/images/happy-pets13.webp"
                                        alt="gallery-photo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-5xl text-red-500 font-semibold font-sans'>About Us</h1>
                        <h3 className='text-2xl text-red-500 font-sans py-3 text-justify'>Welcome to Pets House: Your One-Stop Shop for Happy Tails!</h3>
                        <p className='text-justify'>Pets House isn't just another online pet shop; it's a community built on the shared love for our furry, feathered, and finned friends. We believe pets are more than just animals; they're family. That's why we're dedicated to providing everything you need to create a happy and healthy life for your beloved companion.

                            Our journey began with a simple yet powerful vision: to offer high-quality pet supplies and accessories, alongside expert advice and resources, all under one roof (or should we say, pawprint!). We're a team of passionate animal lovers with years of experience, and we use our knowledge to curate a diverse selection of products for all types of pets.
                        </p>
                        <h3 className='text-2xl text-red-500 py-3 pt-5 text-justify'>What sets us apart?</h3>
                        <div>
                            <li className='text-justify'><span className='font-semibold'>Unwavering commitment to quality:</span> We source our products from reputable brands that prioritize ethical practices and responsible manufacturing. Your pet deserves the best, and we deliver.</li>
                            <li className='text-justify'><span className='font-semibold'>Expert knowledge at your fingertips: </span>Our team is available to answer your questions, offer personalized recommendations, and share valuable pet care tips.</li>
                            <li className='text-justify'><span className='font-semibold'>Beyond products: </span>We go beyond just selling supplies. We offer informative articles, helpful guides, and even connect you with local animal shelters and rescue organizations.</li>
                        </div>
                        <div className='py-5'>
                            <Button size="md" className='bg-[#d96459]'onClick={() => {
                                navigate(`/ProductPage/${element?.catgid}/${element?.catgname}`)
                            }}>Explore More</Button>
                        </div>

                    </div> 

                </div>
            </div>
        </>
    );
};

export default About;