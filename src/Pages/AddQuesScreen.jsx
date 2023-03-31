import React from 'react'
import AddQues from '../component/CreateCourses/CourseIntegration/AddQues/AddQues'
import Nav from '../component/Nav'
const AddQuesScreen = () => {
  return (
    <div>
      <Nav/>
      <div className="flex xs:flex-col flex-row xs:w-[350px] ms:w-[400px] sm:w-[600px] md:w-[900px] lg:w-[1050px] xl:w-[1460px] lg:h-[800px] ">
<AddQues/>
</div>
    </div>
  )
}

export default AddQuesScreen
