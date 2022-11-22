import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/QuestionsData'

const Quiz = () => {
    const [current,setCurrent] = useState(0)
    const [answer,setAnswer] = useState("")

    const {score,setScore,setAppPage} = useContext(DataContext)

    const checkAnswer = () => {
        if(answer !== "") {
            if(answer === QuestionsData[current].answer){
                console.log("คุณตอบถูกต้อง รับคะแนนไปเลย");
                setScore(score + 1)
                nextQuestion()
            } else {
                console.log("คุณตอบผิด ไม่ได้คะแนน T__T");
                nextQuestion()
            }
        }
    }

    useEffect(() => {
        checkAnswer()
        // eslint-disable-next-line
    },[answer])

    const nextQuestion = () => {
        setAnswer("")
        if(current === QuestionsData.length - 1) {
            setAppPage("score")
        } else {
            setCurrent(current+1)
        }

    }

  return (
    <div className='quiz'>
        <h1>{QuestionsData[current].question}</h1>
        <div className='choice'>
            <button onClick={() => setAnswer("A")}>{QuestionsData[current].A}</button>
            <button onClick={() => setAnswer("B")}>{QuestionsData[current].B}</button>
            <button onClick={() => setAnswer("C")}>{QuestionsData[current].C}</button>
            <button onClick={() => setAnswer("D")}>{QuestionsData[current].D}</button>
        </div>
        <p>{`${current + 1} / ${QuestionsData.length}`}</p>
    </div>
  )
}

export default Quiz