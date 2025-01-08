import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const View = () => {
    const [products,setProducts]=useState({})
    const {id} = useParams()
    console.log(id);
   
    useEffect(()=>{
        if(sessionStorage.getItem("allproducts")){
           const allProducts = JSON.parse(sessionStorage.getItem("allproducts"))
           console.log( allProducts.find(item=>item.id==id));
           setProducts(allProducts.find(item=>item.id==id))      
        }
       
    },[])
    
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
            <div>
              <div className='flex justify-center'>
              <img width={'450px'} height={'200px'} src={products?.thumbnail} alt="" />
              </div>
            
            <div className='flex justify-between mt-5'>
                        <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
                        <button className='bg-green-600 text-white p-2'>Add to cart</button>
                    </div>
            </div>
            
            <div>
                <h3 className='font-bold'>PID:{products?.id}</h3>
                <h1 className='text-5xl font-bold'>{products?.title}</h1>
                <h4 className='font-bold text-red-600 text-2xl'>$ {products?.price}</h4>
                <h4>Brand : {products?.brand}</h4>
                <h4>Category : {products?.category}</h4>
                <p>
                    <span className='font-bold'>Description</span>: {products.description}
                    
                    <h2 className="mt-5 font-bold text-2xl mb-5">Client Reviews</h2>
            {
              products?.reviews?.length>0 ?
              products?.reviews?.map(item=>(
                <div key={item.date} className="shadow-border p-2 mb-2">
                    <h5>
                      <span className="font-bold">{item?.reviewerName}</span> : 
                      <span> {item?.comment}</span>
                    </h5>
                    <p>Rating : {item?.rating}<i class="fa-solid fa-star text-orange-500"></i></p>
                </div>
              )):
              <div>No Reviews Yet!!!</div>
            }
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default View