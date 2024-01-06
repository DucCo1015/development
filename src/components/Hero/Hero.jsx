import React from 'react'
import imgContent from '../../assets/undraw_real_time_sync_re_nky7.svg'

const Hero = () => {
  return (
    <div className = 'h-[650px] md:h-[500px] bg-gradient-to-r from-violet-950 to-violet-950 pt-20 gap-8' >
      <section className='container flex flex-col items-center justify-between'>
        <div className="grid grid-cols-1 md:grid-cols-2 text-white">
          <div className='flex flex-col items-center justify-center text-center gap-4 md:items-start md:text-left'>
              <h1 className='text-4xl font-bold'>We Build Apps That Get Trending On App World</h1>
              <p className='pt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi modi molestias quis accusamus corporis, aliquid magnam mollitia voluptas similique ipsa explicabo, fugiat aspernatur laborum eveniet, consequatur dolore quam quas.</p>

              <div className='space-x-4'>
                <button className='btn_primary px-3'>Get Started</button>
                <button className='btn_outline'>Login</button>
              </div>
            </div>
            <div className='mx-auto max-w-xs p-4'>
              <img src={imgContent} alt="" />
            </div>  
        </div>
          
      </section>
    </div>
  )
}

export default Hero