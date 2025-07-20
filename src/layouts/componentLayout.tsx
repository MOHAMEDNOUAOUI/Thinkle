import React from 'react'
import Panel from '../components/Panel/Panel'
import './componentLayout.css'
import ShowPanel from '../components/Show-Panel/ShowPanel'

function ComponentLayout() {
  return (
    <div className='component-layout'>
        <Panel />
        <ShowPanel />
        <div className='component-layout__content glass'>
            <h1>Component Layout</h1>
            <p>This is a layout for displaying components.</p>  
        </div>
    </div>
  )
}

export default ComponentLayout