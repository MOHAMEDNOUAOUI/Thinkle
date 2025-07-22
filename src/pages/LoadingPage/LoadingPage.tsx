import React, { useEffect, useState } from 'react'
import './LoadingPage.scss'
import { useDispatch } from 'react-redux'
import { setloadingState } from '../../store/slices/AppLoader'

function LoadingPage() {
  const dispatch = useDispatch()
  const [showParagraph , setShowParagraph] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true)

      // setTimeout(() => {
      //    dispatch(setloadingState(false))
      // } , 1000)   
       dispatch(setloadingState(false))
    
    } , 6000)
  

    return () => clearTimeout(timer)
  },[])
  return (
    <section className='page loading-page'>
      {/* <div className='breath'>
      </div> */}
      <img src="/logonobreath2.png" alt="" className='logo' />
      <div className='text'>
        <h1>Thinkle.</h1>
      {/* {showParagraph &&   <p>Your Best Solution</p>} */}
      </div>
    </section>
  )
}

export default LoadingPage