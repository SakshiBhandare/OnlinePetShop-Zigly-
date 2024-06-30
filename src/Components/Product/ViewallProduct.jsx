import { Alert, Button, Card, } from '@material-tailwind/react';
import React, { useEffect, useState, } from 'react';
import { FaStar } from 'react-icons/fa6';
import { getimgurl } from '../../MIS/Global';
import { BiFoodTag } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproductall } from '../../app/slices/productSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
import { IoMdClose } from 'react-icons/io';
import { HandleLoginChange, HandleLoginValidation } from '../../app/slices/loginSlice';
import { SaveProductCart } from '../../app/slices/CartSlice';
import { IoHeartSharp } from 'react-icons/io5';
import { addToWishlist, removeFromWishlist } from '../../app/slices/wishlistSlice';

const ViewallProduct = () => {
    let { catgid, id } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { productall } = useSelector((state) => state.product);
    const { loader } = useSelector(state => state.loader);
    const { login, loginValidation, } = useSelector(state => state.login);
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

    useEffect(() => {
        let x = window.location.pathname.split("/")

        if (x[1] === "subProductPage") {
            //To display SubCategory Products.
            dispatch(fetchproductall({ subcatgid: catgid, catgid: id, isgrouppid: 1 }))
        } else if (x[1] === "products") {
            //To display Searched products from Nav Search.
            dispatch(fetchproductall({ isnavsearch: catgid, isgrouppid: 1 }))
        } else if (x[1] === "brandproducts") {
            //To display a particular brand products.
            dispatch(fetchproductall({ brandid: catgid, isgrouppid: 1 }))
        } else {
            dispatch(fetchproductall({ catgid: catgid, isgrouppid: 1 }))
        }

    }, [catgid])

    useEffect(() => {
        if (loginValidation === true) {


            setTimeout(() => {
                dispatch(HandleLoginValidation(false))
            }, 3000);
        }
    }, [loginValidation])



    // const handleMoveToCart = () => {
    //     dispatch(addToCart());
    // };

    return (
        <>
            {
                loader === true ?
                    <Loader /> :
                    <div className='grid grid-cols-3 gap-4 '>
                        <div style={{ position: "fixed", top: "10%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "999", display: loginValidation === true ? "block" : "none" }}>
                            <Alert color='indigo' icon={<IoMdClose onClick={() => { dispatch(HandleLoginValidation(false)) }} />}>{login?.msg}</Alert>
                        </div>
                        {
                            productall?.map((element, index) => {
                                let imgpath = JSON.parse(element.imgpaths)
                                if (imgpath.length > 0) {
                                    imgpath = imgpath.reduce((min, element) => min.pimgid < element.pimgid ? min : element)
                                }
                                let varient = JSON.parse(element?.varients)

                                return (
                                    <>
                                        <Card className="h-[100%]" >
                                            <div className="absolute right-3 z-10 pt-2" onClick={handleHeartClick}>
                                                <IoHeartSharp size={33} className={`cursor-pointer ${isClicked ? 'text-red-500' : 'text-gray-300'}`} />
                                            </div>
                                            <div className='grid grid-rows-1 mx-auto w-80 cursor-pointer h-[55%] pb-5' onClick={() => {
                                                navigate(`/viewproduct/${element?.pid}`)
                                            }}>
                                                <img src={`${getimgurl()}${imgpath?.imgpath}`} alt="" />
                                            </div>
                                            <div className='flex justify-between px-3 pt-4'>
                                                <div className='flex'>
                                                    <FaStar className='text-yellow-700 text-xl' />
                                                    <h2>4.7</h2>
                                                </div>
                                                {element?.ftype && ( // Check if element.ftype is not null or undefined
                                                    <BiFoodTag className={`text-${element.ftype}-500 text-2xl`} />
                                                )}
                                            </div>
                                            <div className='px-3 overflow-hidden h-[12%]'>
                                                <h2>{element?.pname}</h2>
                                                <h3 className='truncate-2-lines overflow-hidden'>{element?.pdesc}</h3>
                                            </div>
                                            <div className='flex gap-3 px-3 py-2 pt-3 h-[8%]'>
                                                <del><p className='text-xs'>₹{element?.mrp}</p></del>
                                                <p className='text-indigo-900 text-2xl font-bold'>₹{element?.fprice}</p>
                                                <h2 className='text-red-700 font-bold pt-1'>({element?.pdiscount}% OFF)</h2>
                                            </div>
                                            {/* <div className='flex gap-4 px-3 pt-1 h-[7%]'>
                                                <Button variant="outlined" className='p-2'>2.8kg</Button>
                                                <Button variant="outlined" className='p-2'>5.5kg</Button>
                                            </div> */}
                                            <div className='py-4 text-center flex px-9 h-[8%]'>
                                                <Button className='bg-[#3d187e] h-10 w-auto py-2 mx-2' type='button' onClick={() => {

                                                    if (localStorage.getItem("loginid") == null || localStorage.getItem("loginid") == undefined) {
                                                        dispatch(HandleLoginValidation(true));
                                                        dispatch(HandleLoginChange("Please Login First", "msg"))
                                                    } else { dispatch(SaveProductCart({ loginid: localStorage.getItem("loginid"), pid: element.pid, pvid: 0, qty: 1 })) }
                                                }}>Add To Cart</Button>
                                                <Button className='bg-[#feb204] h-10 w-auto py-2 px-9 mx-2'>Buy Now</Button>
                                            </div>

                                        </Card >
                                    </>
                                )
                            })
                        }
                    </div >
            }

        </>
    );
};

export default ViewallProduct;