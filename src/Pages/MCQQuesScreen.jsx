import React from 'react'
import Nav from '../component/Nav'
import MCQQues from '../component/QuizQues/MCQQues'
const MCQQuesScreen = () => {
  return (
    <div>
      <Nav/>
      <div className="flex xs:flex-col flex-row xs:w-[345px] ms:w-[400px] sm:w-[600px] md:w-[900px] lg:w-[1040px] xl:w-[1460px] ">
<MCQQues/>
</div>
    </div>
  )
}

export default MCQQuesScreen
