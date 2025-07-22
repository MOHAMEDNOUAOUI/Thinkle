// import React from 'react'
import './tasks.scss'
import ShinyButton from '../../components/ShinyButton/ShinyButton'
import DesignSwitch from './components/tasks-design_switcher/Design-Switch'
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
      
     {/* <div style={container}>
       <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    />
                ) : null}
            </AnimatePresence>

              <motion.button
                style={button}
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "Hide" : "Show"}
            </motion.button>
     </div> */}
    </section>
  )
}

export default Tasks

// const container: React.CSSProperties = {
//     display: "flex",
//     flexDirection: "column",
//     width: 100,
//     height: 160,
//     position: "relative",
// }

// const box: React.CSSProperties = {
//     width: 100,
//     height: 100,
//     backgroundColor: "#0cdcf7",
//     borderRadius: "10px",
// }

// const button: React.CSSProperties = {
//     backgroundColor: "#0cdcf7",
//     borderRadius: "10px",
//     padding: "10px 20px",
//     color: "#0f1115",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
// }