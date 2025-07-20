import React from 'react'
import Panel from '../components/Panel/Panel'
import './componentLayout.css'

function ComponentLayout() {
  return (
    <div className='component-layout'>
        <Panel />
        <div className='component-layout__content'>
            <h1>Component Layout</h1>
            <p>This is a layout for displaying components.</p>  
        </div>
    </div>
  )
}

export default ComponentLayout