import React from 'react'
import QuestBank from '../component/QuesBank/QuestBank'
import Nav from '../component/Nav'
const QuestionBank = () => {
  return (
    <div>
      <Nav/>
      <div className="flex xs:flex-col xs:mt-2 flex-row xs:w-[345px] ms:w-[400px] sm:w-[600px] md:w-[900px] lg:w-[1050px] xl:w-[1460px] xs:h-[850px] ">
<QuestBank/>
</div>
    </div>
  )
}

export default QuestionBank
