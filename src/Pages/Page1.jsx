import React, { useRef, useState } from 'react'
import Tilttext from '../components/Tilttext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {

  const tiltRef = useRef(null)

  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {

    if (!tiltRef.current) return

    const rect = tiltRef.current.getBoundingClientRect()

    const x = (e.clientX - rect.left - rect.width / 2) / 70

    const y = -(e.clientY - rect.top - rect.height / 2) / 20

    setXVal(x)
    setYVal(y)
  }


  useGSAP(() => {

    if (!tiltRef.current) return

    gsap.to(tiltRef.current, {
      rotationX: yVal,
      rotationY: xVal,
      transformPerspective: 1000,
      duration: 0.8,
      ease: 'power3.out'
    })

  }, [xVal, yVal])


  return (
    <section
      id="home"
      onMouseMove={mouseMoving}
      className="relative h-full w-full bg-black"
    >

      <div
        id="page1-in"
        className="relative h-full w-full bg-black overflow-hidden"
      >

        {/* Positioning wrapper */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

          {/* This element gets the tilt */}
          <Tilttext abc={tiltRef} />

        </div>

      </div>

    </section>
  )
}

export default Page1