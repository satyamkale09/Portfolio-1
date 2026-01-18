import React from 'react'

const Tilttext = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc} className='mt-60'>
                <h1 className='text-[5vw] text-white leading-[4vw] font-[anzo]'>I AM <span className='text-black'>DARK MODE</span>™</h1>
                <h1 className='text-[8.4vw] text-white leading-[8vw] font-[anzo]'>DEVELOPER</h1>
                <h1 className='text-[5vw] text-white leading-[4vw] font-[anzo]'>TO HIRE</h1>
            </div>
  )
}

export default Tilttext