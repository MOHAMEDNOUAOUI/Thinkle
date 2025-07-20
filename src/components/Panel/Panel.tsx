import React from 'react'
import './Panel.css'

function Panel() {
  return (
    <div className='panel glass'>
      <div className='panel-header'>
        <div></div>
        <i className='pi pi-cog'></i>
      </div>
      <div className='panel-content'>
        <p>This is the content of the panel.</p>
      </div>
      <div className='panel-footer'>
        <button className='btn'>Action</button>
      </div>
    </div>
  )
}

export default Panel