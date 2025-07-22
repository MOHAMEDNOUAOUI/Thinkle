import React from 'react'
import {motion} from 'framer-motion'
import './ShinyButton.css'


type props = {
  label:string
  icon?:string
}
function ShinyButton({label , icon}:props) {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="buttoncss radial-gradient"
    >
      <span className="startnow linear-mask">
        {icon && (<i className={'pi ' + icon}></i>)}
        {label}
      </span>
      <span className="span linear-overlay" />
    </motion.button>
  )
}

export default ShinyButton