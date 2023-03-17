import React from 'react'
import AddData from './AddData'

// import FirstRow from './FirstRow'
const AddCourse = () => {
  return (
    <div className='bg-gray-100 2xl:w-[1200px]  xs:w-[330px] xs:h-[480px] sm:w-[520px] sm:h-[600px] lg:w-[650px] lg:h-[280px] xl:w-[1000px] xl:h-[300px] xl:ml-20 xs:ml-4  xs:mt-4 lg:ml-12 rounded-lg	ms:w-[330px] ms:ml-6 sm:ml-8'>
    <div className='flex flex-wrap xs:space-x-2 xs:pl-1 sm:pl-4 sm:space-x-10 lg:space-x-80 '>
<div className='flex flex-wrap space-x-4 ms:space-x-4 lg:space-x-10 xs:mt-4 xl:pl-10 2xl:pl-10 2xl:space-x-32  xl:space-x-20'>
<a href="" className='text-sm sm:text-lg lg:text-xs text-black'>Populer Course</a>
<a href="" className='text-sm sm:text-lg lg:text-xs text-gray-400'>UnPopuler Course</a>

</div>
<p className='text-sm sm:text-lg lg:text-xs font-bold text-black xs:mt-4 xl:pl-52 2xl:pl-32 '>+Add Course</p>
</div>
<AddData/>
    </div>
  )
}

export default AddCourse