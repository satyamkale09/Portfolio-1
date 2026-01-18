import React, { useRef, useState } from 'react'
import Tilttext from '../components/Tilttext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)


   const mouseMoving = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x -tiltRef.current.getBoundingClientRect().width/2)/70)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y -tiltRef.current.getBoundingClientRect().height/2)/20)
   }

   useGSAP(function() {
    gsap.to(tiltRef.current,{
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: 'power3.out'
    })
   }, [xVal,yVal])

  return (                       

    <div onMouseMove={(e) => {
      mouseMoving(e)
    }} className='h-screen p-7 bg-white'>
        <div id='page1-in' className='relative h-full w-full p-24 rounded-[50px] bg-zinc-400'>
             <Tilttext abc={tiltRef}/>
        </div>
    </div>
  )
}

export default Page1