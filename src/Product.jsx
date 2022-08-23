import React from 'react'
import perfumeImg from './assets/perfume-img.jpg'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Product = () => {
    return (
        <div className='md:w-[750px] md:h-[568px] md:flex-row flex-col w-[359px] h-[706px] rounded-2xl flex justify-center items-center drop-shadow-lg bg-white'>
            <div className=''>
                <img className='object-cover object-center w-[375px] md:h-[568px] h-[279px] md:rounded-l-2xl rounded-t-2xl' src={perfumeImg} alt="/" />
            </div>
            <div className='w-[375px] md:h-[568px] h-[427px] flex flex-col justify-center items-left md:p-9 px-9 py-7'>
                <p className='text-silver md:text-xl tracking-[0.2em]'>PERFUME</p>
                <h1 className='md:text-4xl text-3xl font-extrabold leading-10 md:py-5 py-4 md:pr-2'>Gabrielle Essence Eau De Parfum</h1>
                <p className='text-silver pr-7'>A floral, solar and volumptous interpretation composed by Olivier Polge, Perfumer-Creator for the house of CHANEL.</p>
                <div className='flex items-center justify-between md:py-7 py-5 w-[259px]'>
                    <p className='md:text-4xl text-3xl font-extrabold font-libre text-bermuda'>$149.99</p>
                    <p className='text-silver line-through'>$169.99</p>
                </div>

                <button className='md:w-[259px] h-[57px] w-[301px] bg-bermuda rounded-lg font-bold text-white flex justify-center items-center drop-shadow-lg'><AiOutlineShoppingCart className='mr-2' size={27} /> Add to Cart</button>
            </div>

        </div >
    )
}

export default Product