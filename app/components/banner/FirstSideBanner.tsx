import Image from 'next/image'
import React from 'react'
import Banner1 from '../../assets/images/banner1.webp' 
import Banner2 from '../../assets/images/banner2.webp' 
import Banner3 from '../../assets/images/banner3.webp' 
import Banner4 from '../../assets/images/banner4.webp' 

function FirstSideBanner() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-6 lg:mx-0 mt-4'>
        <Image src={Banner1} alt="" className='rounded-2xl' objectFit='cover'  />
        <Image src={Banner2} alt="" className='rounded-2xl' objectFit='cover'  />
        <Image src={Banner3} alt="" className='rounded-2xl' objectFit='cover'  />
        <Image src={Banner4} alt="" className='rounded-2xl' objectFit='cover'  />
    </div>
  )
}

export default FirstSideBanner