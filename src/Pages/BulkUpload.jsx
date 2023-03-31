import React from 'react'
import BulkUp from '../component/BulkU/BulkUp'
import Nav from '../component/Nav'
const BulkUpload = () => {
  return (
    <div>
    <Nav/>
    <div className="flex xs:flex-col xs:mt-24 flex-row xs:w-[340px] ms:w-[400px] sm:w-[600px] md:w-[900px] lg:w-[1050px] xl:w-[1460px] ">
<BulkUp/>
</div>
  </div>
  )
}

export default BulkUpload
