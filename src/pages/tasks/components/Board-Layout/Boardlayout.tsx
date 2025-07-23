import React from 'react'
import './Boardlayout.scss'
import BoardSection from './components/Board-Section/BoardSection'

function Boardlayout() {
  const labels = [{
    label: 'To Do',
    color: '#f0f0f0'
  }, {
    label: 'In Progress',
    color: '#d0e6ff'
  }, {
    label: 'Review',
    color: '#ffe0b3'
  }, {
    label: 'Done',
    color: '#c8e6c9'
  }]
  return (
    <div className='board-layout'>
      {labels.map((item, index) => (
        <BoardSection key={index} label={item.label} color={item.color} />
      ))}
    </div>
  )
}

export default Boardlayout