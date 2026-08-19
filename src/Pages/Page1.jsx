import React, { useRef, useState } from 'react'
import Tilttext from '../components/Tilttext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) / 70
    )

    setYVal(
      -(e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2) / 20
    )
  }

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: 'power3.out'
    })
  }, [xVal, yVal])

  return (
    <section
      onMouseMove={mouseMoving}
      id="home"
      className="relative h-screen w-full bg-black"
    >


      <div
        id="page1-in"
        className="relative h-full w-full p-24 bg-black overflow-hidden"
      >
        <Tilttext abc={tiltRef} />
      </div>

    </section>
  )
}

export default Page1