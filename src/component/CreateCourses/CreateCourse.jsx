import React from 'react'
import Nav from '../Nav'
import CreateCourseForm from './CreateCourseForm'
import CourseImage from './CourseImg/CourseImageData'
import CourseInt from './CourseIntegration/CourseInt'
const CreateCourse = () => {
  return (
    <div>

    <Nav />
    <div className="flex xs:flex-col flex-row xs:w-[350px] ms:w-[400px] sm:w-[600px] md:w-[920px] lg:w-[1050px] xl:w-[1460px] ">

      <CreateCourseForm/>
      <p className='ml-6 mt-10 font-bold sm:ml-20  lg:ml-24 xl:ml-40'>Course Images</p>
      <div className="relative box-content xs:w-[300px] xs:h-[300px] ms:w-[350px] ms:h-[350px] xs:ml-6 xs:mt-4 sm:w-[475px] sm:ml-16 sm:h-[385px] md:w-[800px] md:h-[250px] lg:ml-20 lg:w-[900px] xl:ml-36 xl:w-[1200px] xl:h-[300px] drop-shadow-xl rounded-2xl bg-white   ">
     <div className='ml-4 pt-6'>
      <p className='text-sm text-black'>Promotional Images</p>
      <p className='text-sm text-gray-400'>Maximum 4 Images can be uploaded</p>
</div>

      <CourseImage/>
      </div>
      <p className='ml-6 mt-10 font-bold ms:ml-10 sm:ml-20 lg:ml-24 xl:ml-36'>Course integration</p>
      <div className="relative box-content xs:w-[300px] ms:w-[340px] xs:h-[3640px] xs:ml-6 xs:mt-4 ms:ml-8 sm:w-[480px] sm:h-[4330px] sm:ml-[75px] md:w-[785px] md:h-[4400px] lg:w-[910px] lg:h-[3480px] xl:w-[1200px] xl:ml-[150px] xl:h-[3850px] drop-shadow-xl rounded-2xl bg-white   ">
<CourseInt/>
</div>
    </div>
    </div>
   
  )
}

export default CreateCourse
