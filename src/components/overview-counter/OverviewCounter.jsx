import React from 'react'
import CountUp from 'react-countup'

const overview = [
 {
  name: '534',
  des: 'Clients'
 },
 {
  name: '56',
  des: 'Project'
 },
 {
  name: '234',
  des: 'Subscribers'
 },{
  name: '160527',
  des: 'Clients'
 }
]
const OverviewCounter = () => {
  return (
    <section className="container h-12 md:h-32">
     <div className=" grid grid-cols-4 divide-x mx-auto w-full bg-white dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] shadow-lg -translate-y-16 md:-translate-y-16 my-4 md:p-6">  
        {
         overview.map((item,index) => (
          <div key={index} className='flex items-center justify-center text-center'>
           <div>
             <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
              <CountUp end = {item.name} suffix='+' duration={2.75}/>
              </h1>
             <h1 className="sm:text-md text-xs  md:text-lg">{item.des}</h1>
           </div>
          </div>   
         ))
        }
     </div>
    </section>
  )
}

export default OverviewCounter