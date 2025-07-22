import Panel from '../components/Panel/Panel'
import './componentLayout.css'
import ShowPanel from '../components/Show-Panel/ShowPanel'
import { Link, useRoutes } from 'react-router-dom'
import { appRoutes } from '../routes'
import { animate, useMotionTemplate, useMotionValue , motion } from 'framer-motion'
import { useEffect } from 'react'

const COLORS = [
  "#DCA06D", // very dark red-brown
  "#A55B4B", // dark gray
  "#4F1C51", // dark purple
  // "#8A0000", // dark red
  // "#88304E", // dusky rose
  // "#C83F12", // strong orange-red
  // "#F7374F", // bright red-pink
  // "#FFF287"  // light yellow
];

function ComponentLayout() {
  const routesElements = useRoutes(appRoutes)
  const color = useMotionValue(COLORS[0])
  const image = useMotionTemplate`radial-gradient(125% 125% at 50% 0% , #000 50% , ${color})`;

  // useEffect(() => {
  //   animate(color , COLORS ,{
  //     ease:'easeInOut',
  //     duration:20,
  //     repeat:Infinity,
  //     repeatType:'mirror'
  //   })
  // })

  return (
    <motion.div className='component-layout' >
       <div className='component-layout_insider'>
         <Panel />
        {/* <ShowPanel/> */}
        <div className='component-layout__content glass'>
           {routesElements}
        </div>

        <Link to="/" className="circleLogo" title='home'>
          <img src="/logosecond2.png" alt="" />
        </Link>
       </div>
    </motion.div>
  )
}

export default ComponentLayout