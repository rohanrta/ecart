import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
            <img width={'450px'} height={'200px'} src="https://media.istockphoto.com/id/1308065543/video/shopping-cart-animation.jpg?s=640x640&k=20&c=iO3wDHHIWdzTubp9O1uIu3ot308gZ-j3XdAXO1Xl6nk=" alt="" />
            <div>
                <h3 className='font-bold'>PID: id</h3>
                <h1 className='text-5xl font-bold'>Product Name</h1>
                <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
                <h4>Brand : brand</h4>
                <h4>Category : category</h4>
                <p>
                    <span className='font-bold'>Description</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, labore dolorum dolores quibusdam dolor veritatis molestias fuga expedita error perspiciatis deleniti quod eligendi ea perferendis. Fugit quaerat placeat quidem voluptate?
                    Maiores beatae commodi sed molestiae nisi hic nemo, aliquid non officia deserunt ipsam, mollitia adipisci perspiciatis? Quas quod dolore sunt eius aspernatur. Necessitatibus, ex eveniet magni enim perferendis pariatur sed?
                    Tenetur, quidem consequuntur? Cumque accusamus minus nisi vel fugiat dolor consequatur eos quasi enim id repellat iste placeat ratione numquam sunt, quibusdam quisquam amet aspernatur autem error incidunt! Rem, debitis!
                    <div className='flex justify-between mt-5'>
                        <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
                        <button className='bg-green-600 text-white p-2'>Add to cart</button>
                    </div>
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default View