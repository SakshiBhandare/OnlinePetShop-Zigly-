import { Alert, Button, Carousel, IconButton, Rating } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import TopMenu from './TopMenu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproductall } from '../app/slices/productSlice';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { getimgurl } from '../MIS/Global';
import { calprice } from '../app/slices/productSlice';
import Megamenu from './Navbar/Megamenu';
import { IoHeartSharp } from 'react-icons/io5';
import { addToWishlist, removeFromWishlist } from '../app/slices/wishlistSlice';
import { HandleLoginChange, HandleLoginValidation } from '../app/slices/loginSlice';
import { SaveProductCart } from '../app/slices/CartSlice';
import { IoMdClose } from 'react-icons/io';

const ViewProduct = () => {
    let { pid } = useParams();
    const dispatch = useDispatch();
    const { productall } = useSelector((state) => state.product);
    const { loader } = useSelector(state => state.loader);
    const [sizeSelect, setsizeSelect] = useState({});
    const { login, loginValidation, } = useSelector(state => state.login);

    // useEffect(() => {
    //   alert(JSON.stringify(sizeSelect));
    // }, [sizeSelect])


    useEffect(() => {
        dispatch(fetchproductall({ pid: pid, isgrouppid: 1 }))
    }, [pid])

    useEffect(() => {
        if (loginValidation === true) {


            setTimeout(() => {
                dispatch(HandleLoginValidation(false))
            }, 3000);
        }
    }, [loginValidation])

    const [active, setActive] = React.useState();


    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        let data = { mrp: productall?.[0]?.mrp, pdiscount: productall?.[0]?.pdiscount };
        if (sizeSelect !== null) {
            data = sizeSelect;
        }
        setQuantity(quantity + 1);
        dispatch(calprice(productall, data, quantity + 1));
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            let data = { mrp: productall?.[0]?.mrp, pdiscount: productall?.[0]?.pdiscount };
            if (sizeSelect !== null) {
                data = sizeSelect;
            }
            setQuantity(quantity - 1);
            dispatch(calprice(productall, data, quantity - 1));
        }
    };

    const handleSizeVarient = (data) => {
        setsizeSelect(data);
        dispatch(calprice(productall, data, quantity));

    };

    const [isClicked, setIsClicked] = useState(false);

    const handleHeartClick = () => {
        if (isClicked) {
            setIsClicked(false);
            dispatch(removeFromWishlist()); // Remove from wishlist if heart is clicked again
        } else {
            setIsClicked(true);
            dispatch(addToWishlist());
        }
    };

    // Use useRef to track the carousel component
    const carouselRef = useRef(null);

    useEffect(() => {
        // Set the initial active image URL to the first image in the product's image array
        if (productall.length > 0) {
            const firstImage = JSON.parse(productall[0].imgpaths)[0]?.imgpath;
            setActive(getimgurl() + firstImage);
        }
    }, [productall]);

    // Function to handle image click and update the active image URL
    const handleImageClick = (imgPath) => {
        setActive(getimgurl() + imgPath);
        // Programmatically move the carousel to the clicked image
        if (carouselRef.current) {
            const imgIndex = JSON.parse(productall[0].imgpaths).findIndex(img => img.imgpath === imgPath);
            carouselRef.current.goToSlide(imgIndex);
        }
    };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const [activeIndex, setActiveIndex] = useState(0);

    // const handlePrev = () => {
    //     setActiveIndex((prevIndex) => {
    //         // If activeIndex is already at the first image, loop back to the last image
    //         if (prevIndex === 0) {
    //             return productall.length - 1;
    //         } else {
    //             return prevIndex - 1;
    //         }
    //     });
    // };

    // const handleNext = () => {
    //     setActiveIndex((prevIndex) => {
    //         // If activeIndex is already at the last image, loop back to the first image
    //         if (prevIndex === productall.length - 1) {
    //             return 0;
    //         } else {
    //             return prevIndex + 1;
    //         }
    //     });
    // };

    return (
        <>

            <div className={isSticky ? 'sticky top-0 z-50' : ''}>
                <TopMenu />
            </div>

            <div className={isSticky ? 'sticky top-20 z-50' : ''}>
                <Megamenu />
            </div>

            {
                loader === true ?
                    <Loader /> :
                    <div className='grid grid-rows-1 pt-6'>
                        <div style={{ position: "fixed", top: "10%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "999", display: loginValidation === true ? "block" : "none" }}>
                            <Alert color='indigo' icon={<IoMdClose onClick={() => { dispatch(HandleLoginValidation(false)) }} />}>{login?.msg}</Alert>
                        </div>
                        <div className='grid grid-cols-2 px-40'>
                            <div className='p-6 '>
                                <div className="grid gap-4">
                                    <div>
                                        {/* <img
                                            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                            src={active}
                                            alt=""
                                        /> */}

                                    </div>

                                    <Carousel className="rounded-xl w-[500px] h-[500px]"
                                        prevArrow={({ handlePrev }) => (
                                            <IconButton
                                                variant="text"
                                                color="black"
                                                size="lg"
                                                onClick={handlePrev}
                                                className="!absolute top-2/4 left-4 -translate-y-2/4"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                                    />
                                                </svg>
                                            </IconButton>
                                        )}
                                        nextArrow={({ handleNext }) => (
                                            <IconButton
                                                variant="text"
                                                color="black"
                                                size="lg"
                                                onClick={handleNext}
                                                className="!absolute top-2/4 !right-4 -translate-y-2/4"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                                    />
                                                </svg>
                                            </IconButton>
                                        )}>
                                        {productall.map((product, index) => {
                                            return (
                                                <>
                                                    <div className="absolute right-3 z-10" onClick={handleHeartClick}>
                                                        <IoHeartSharp size={33} className={`cursor-pointer ${isClicked ? 'text-red-500' : 'text-gray-300'}`} />
                                                    </div>
                                                    <img
                                                        key={index}
                                                        src={active}
                                                        alt={`Product ${index + 1}`}
                                                        className="w-[700px] h-[500px] object-cover"
                                                    />

                                                </>
                                            )
                                        })}
                                    </Carousel>
                                    <div className="grid-cols-auto grid-flow-col mx-auto">
                                        {productall.map((element, index) => {
                                            let imgpaths = JSON.parse(element.imgpaths);
                                            return (
                                                <div key={index} className='flex gap-4'>
                                                    {imgpaths.map((img, imgIndex) => (
                                                        <img
                                                            key={imgIndex}
                                                            onClick={() => setActive(`${getimgurl()}${img.imgpath}`)}
                                                            src={`${getimgurl()}${img.imgpath}`}
                                                            className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                                            alt={`gallery-image-${imgIndex}`}
                                                        />
                                                    ))}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div>
                                {
                                    productall?.map((element, index) => {
                                        let varient = JSON.parse(element?.varients)
                                        return (
                                            <>
                                                <div className='p-6'>
                                                    <div>
                                                        <h1 className='text-2xl text-indigo-900 font-medium'>{element?.pname}</h1>
                                                    </div>
                                                    <div>
                                                        <h1 className='text-2xl text-indigo-900 font-medium'>{element?.pdesc}</h1>
                                                    </div>
                                                    <div className='flex py-2'>
                                                        <Rating value={4} />
                                                        <p className='px-2'>2 reviews</p>
                                                    </div>
                                                    <div className='flex py-2'>
                                                        <p>M.R.P. :</p>
                                                        <del><h3 className='px-2'>₹{element?.mrp}</h3></del>
                                                        <h1 className='px-2 text-2xl text-red-500 font-bold'>₹{element?.fprice}</h1>
                                                        <p className='px-2'>Save ₹{Number(Number(element?.mrp * quantity) - Number(element?.fprice)).toFixed(2)}</p>
                                                        <p className='px-2 text-red-500 font-bold'>({element?.pdiscount}% OFF)</p>
                                                    </div>
                                                    <div className='py-2'>
                                                        <p>Inclusive of all taxes</p>
                                                    </div>
                                                    <div className='flex gap-4 py-2'>
                                                        {varient.some(element => element?.psize) && <h1 className='text-xl text-indigo-900 font-bold'>Size -</h1>}
                                                        {/* <h1 className='text-xl text-indigo-900 font-bold'>Size - </h1> */}
                                                        {
                                                            varient.map((element) => {
                                                                return (
                                                                    <>
                                                                        <Button type='button' onClick={() => {
                                                                            handleSizeVarient({ mrp: element?.mrp, pdiscount: element?.pdiscount, pvid: element?.pvid })
                                                                        }} variant="outlined" className='p-2' color='indigo'>{element?.psize}</Button>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className='flex gap-4 py-2'>
                                                        <h1 className='text-xl text-indigo-900 font-bold pt-2'>Quantity - </h1>
                                                        <div>
                                                            <div className="flex items-center p-2">
                                                                <button
                                                                    className="px-2 py-1 border-t border-b border-l border-gray-500 text-black rounded-l focus:outline-none"
                                                                    onClick={handleDecrement}
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="px-4 py-1 bg-white  border-gray-500 border-t border-b hover:outline-gray-500">{quantity}</span>
                                                                <button
                                                                    className="px-2 py-1 border-t border-b border-r border-gray-500 text-black rounded-r focus:outline-none"
                                                                    onClick={handleIncrement}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-4 pt-3'>
                                                        <div>
                                                            <Button variant="gradient" color='indigo' onClick={() => {
                                                                if (localStorage.getItem("loginid") == null || localStorage.getItem("loginid") == undefined) {
                                                                    dispatch(HandleLoginValidation(true));
                                                                    dispatch(HandleLoginChange("Please Login First", "msg"))
                                                                } else { dispatch(SaveProductCart({ loginid: localStorage.getItem("loginid"), pid: element.pid, pvid: sizeSelect?.mrp === undefined ? 0 : sizeSelect?.pvid, qty: quantity })) }
                                                            }}>Add to cart</Button>
                                                        </div>
                                                        <div className=''>
                                                            <Button variant="gradient" color='orange'>Quick Buy</Button>
                                                        </div>
                                                    </div>
                                                    <div className='pt-9'>
                                                        <h1 className='text-xl text-indigo-900 font-bold'>KEY FEATURES</h1>
                                                        <div className='leading-7 text-justify'>
                                                            {/* <li>{element?.ldesc}</li> */}
                                                            <li><span className='font-semibold'>DELICIOUS CHICKEN & MILK FLAVOUR:</span> Pedigree Puppy Dry Dog Food in Chicken and Milk Flavor is packed with mouth-watering kibbles to delight your puppy.</li>
                                                            <li><span className='font-semibold'>QUALITY INGREDIENTS: </span>This tasty and healthy food is made with high-quality ingredients, including chicken and milk, so you can be sure your little furry friend is getting the nutrition they need.</li>
                                                            <li><span className='font-semibold'>TAILOR MADE NUTRITION:</span> Specially formulated for puppies, this dry dog food provides complete and balanced nutrition with essential nutrients and high protein.</li>
                                                            <li><span className='font-semibold'>5 SIGNS OF GOOD HEALTH:</span> It strengthens their natural defenses, promotes healthy digestion, and helps them build strong muscles. It also keeps their coats shiny and their bones and teeth strong.</li>
                                                            <li><span className='font-semibold'>SUITABLE FOR:</span> This Pedigree Dry Dog Food in Chicken and Milk Flavor, is a healthy and tasty food suitable for puppies. Refer to the back of the pack for the feeding guide.</li>
                                                        </div>
                                                    </div>
                                                    {/* <div className="pt-9">
                                                        <h1 className="text-xl text-indigo-900 font-bold">KEY FEATURES</h1>
                                                        <div className="leading-7 text-justify">
                                                            <ul>
                                                                {features.map((feature, index) => (
                                                                    <li key={index}>{feature.ldesc}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
            }

            <div className='grid grid-rows-1'>
                <Footer />
            </div>
        </>
    );
};

export default ViewProduct;