import React from 'react'
import Header from '../components/Header'
const Wishlist = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
        <>
        <h1 className='text-4xl font-bold text-red-600'>My WishList</h1>
        <div className='grid grid-cols-4 gap-4'>
            <div className='rounded border p-2 shadow'>
                <img src="data:image/png;base64,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" width={'100%'} height={'200px'} alt="" />
               <div className='text-center'>
                <h3 className='text-xl font-bold'>Product name</h3>
                <div className='flex justify-evenly mt-3'>
                    <button className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                    <button className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>
                </div>
               </div>
            </div>
        </div>
        </>
    </div>
    </>
  )
}

export default Wishlist