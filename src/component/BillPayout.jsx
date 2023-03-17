import React from 'react'
import AddData from './AddData'

// import FirstRow from './FirstRow'
const BillPayout = () => {
  return (
    <div className='bg-gray-100 2xl:w-[1200px] lg:ml-12 sm:w-[520px] xl:w-[1000px] xl:h-[300px] xl:mb-2 xl:ml-20 sm:h-[600px] sm:ml-8 lg:w-[650px] lg:h-[280px]  xs:w-[330px] xs:h-[480px] ms:ml-6 xs:ml-4 xs:mt-4 rounded-lg	'>
    <div className='flex flex-wrap xs:space-x-6 xs:pl-1 sm:pl-4 sm:space-x-20 lg:space-x-80 '>
<div className='flex flex-wrap space-x-4 sm:space-x-10  lg:space-x-20 xs:mt-4 xl:pl-10 xl:space-x-20 2xl:pl-10 2xl:space-x-28'>
<a href=""  className='text-sm sm:text-lg lg:text-xs font bold text-black'>Total Payout</a>
<a href=""  className='text-sm sm:text-lg lg:text-xs text-gray-400'>Pending bills</a>

</div>
<a href=""   className='text-sm sm:text-lg lg:text-xs font-bold text-black xs:mt-4 xl:pl-52 2xl:pl-32 '>+Add Course</a>
</div>
<AddData/>
    </div>
  )
}

export default BillPayout