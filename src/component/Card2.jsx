import React from 'react'
import Revenue from './Revenue/RevenueChart' 
import AddCourse from './AddCourse'
import BillPayout from './BillPayout'
import FirstRowData from './FirstRowData'
import PostShareChart from './PostShare/PostShareChart'
import NewFollowersChart from './NewFollower/NewFollowersChart'
import MultiLineChart from './Multiple/MultipleChart'
import MessagePop from './Revenue/MessagePop'
const Card2 = () => {
  return (
 

    <div className='bg-white  min-h-screen  '>
    <div>

    <div className='pt-28 lg:pr-4 md:pl-4'>
<FirstRowData/> </div>  
<div>
  <MessagePop/>
</div>
    </div>

<div>
<AddCourse/>
</div> 
<div className='bg-[#F8F8F8] 2xl:w-[1200px] lg:ml-12 lg:flex xs:w-[330px] 2xl:w-[950px] 2xl:h-[400px] xs:mr-4 ms:w-[340px] sm:w-[520px] sm:h-[950px] lg:w-[650px] lg:h-[350px] xl:w-[1000px] xl:h-[450px] xl:ml-20 relative pt-1 pb-6 mt-4 drop-shadow-md rounded-2xl	xs:ml-4 ms:ml-4 lg:pt-6  sm:ml-8'>

<Revenue/>

<div>
  <div className='flex space-x-6 xs:ml-1 sm:ml-6 ms:ml-2 mt-6 lg:ml-6 lg:mt-1 xl:ml-10'>
  <PostShareChart/>
  <NewFollowersChart/>
  </div>
  
  <MultiLineChart/>
</div>
</div>
<div>
  <BillPayout/>
</div> 

    </div>
  )
}

export default Card2
