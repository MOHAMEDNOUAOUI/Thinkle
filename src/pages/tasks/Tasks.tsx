// import React from 'react'
import './tasks.scss'
import ShinyButton from '../../components/ShinyButton/ShinyButton'
import DesignSwitch from './components/tasks-design_switcher/Design-Switch'
import LayoutHolder from './components/Layout-Holder/LayoutHolder'
// import { AnimatePresence, motion } from "framer-motion"
// import { useState } from "react"

function Tasks() {
  // const [isVisible, setIsVisible] = useState(false)


  return (
    <section className='page task-page'>
      <div className='page-title'>
      <h1 className='page-title-header'>Tasks</h1>
<p className='page-title-desc'>Stay on top of your goals with a clear view of what matters most — one task at a time.</p>
      </div>
      <div className="treatement-row">
        <DesignSwitch></DesignSwitch>
        <ShinyButton label='New Task' icon='pi-plus'></ShinyButton>  
      </div>
      
      <LayoutHolder />
     
    </section>
  )
}

export default Tasks
