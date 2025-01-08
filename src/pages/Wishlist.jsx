import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
useSelector
const Wishlist = () => {
  const userWishlist = useSelector(state =>state.wishlistReducer)
  const dispatch = useDispatch()
 
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
       { userWishlist?.length>0?
       <>
        <h1 className='text-4xl font-bold text-red-600'>My WishList</h1>
        
        <div  className='grid grid-cols-4 gap-4'>
          {userWishlist?.map(item=>(
            <div className='rounded border p-2 shadow'>
                <img src={item.thumbnail} width={'100%'} height={'200px'} alt="" />
               <div className='text-center'>
                <h3 className='text-xl font-bold'>{item.title}</h3>
                <div className='flex justify-evenly mt-3'>
                    <button onClick={()=>dispatch(removeItem(item?.id))} className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                    <button className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>
                </div>
               </div>
            </div>))
          }
        </div>
        </>
         :
          <div className='flex justify-center items-center h-screen'>
            <img src="https://sa.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
            <h1 className='text-3xl text-red-600'>Your Wishlist is empty </h1>
            </div>}
    </div>
    </>
  )
}

export default Wishlist