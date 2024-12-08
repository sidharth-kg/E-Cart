import React from 'react'
import { useDispatch } from 'react-redux';
import useFetch from '../hooks/userFetch';
import { addWishlistItems } from '../redux/slices/wishlistSlice';
import { addItemsToCart } from '../redux/slices/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';


function Home() {
    const data = useFetch('https://fakestoreapi.com/products')
    console.log(data);
    const dispatch = useDispatch()

    return (
        <>
            <div className='pt-32 px-10 mb-10 md:grid grid-cols-4 '>
                {data?.length > 0 &&
                    data?.map((item) => (
                        <div className='p-2'>
                            <div className="p-3 rounded shadow-lg">
                                <img src={item.image} alt="no image" className='w-full h-60' />
                                <h4 className='text-center text-3xl'>{item.title.slice(0, 20)}</h4>
                                <p className='text-justify pt-5'>{item.description.slice(0, 100)} </p>
                                <p className='text-2xl p-3'>Price <span className='text-purple-600'>$ {item.price}</span></p>
                                <div className='flex justify-between'>
                                    <button onClick={() => dispatch(addWishlistItems(item))} className='px-5 py-3 rounded text-white bg-red-600'><FontAwesomeIcon icon={faHeart} /></button>
                                    <button onClick={() => dispatch(addItemsToCart(item))} className='px-5 py-3 rounded text-white bg-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
                                </div>

                            </div>
                        </div>

                    ))
                }

            </div>
        </>
    )
}

export default Home