import React, { useContext } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/QuestionsData'

const Score = () => {
    const {score,setAppPage,setScore} = useContext(DataContext)

    const restartApp = () => {
        setScore(0)
        setAppPage("menu")
    }

  return (
    <div className='score'>
        <h1>Your Score</h1>
        <h2>{score} / {QuestionsData.length}</h2>
        <button onClick={restartApp}>Let's do it again!</button>
    </div>
  )
}

export default Score