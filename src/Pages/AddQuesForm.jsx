import React from 'react'
import QuesForm from '../component/AddQuesForm/QuesForm'
import Nav from '../component/Nav'
const AddQuesForm = () => {
  return(
  <div>
    <Nav/>
    <div className="flex xs:flex-col xs:mt-24 flex-row xs:w-[340px] ms:w-[400px] sm:w-[600px] md:w-[900px] lg:w-[1020px] xl:w-[1460px] ">
<QuesForm/>
</div>
  </div>
)
}

export default AddQuesForm