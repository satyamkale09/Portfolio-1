import React from 'react'

const Tilttext = (props) => {

  return (
    <div
      ref={props.abc}
      id="tiltDiv"
      className="text-left whitespace-nowrap"
      style={{
        transformStyle: 'preserve-3d'
      }}
    >

      <h1 className="text-[8.4vw] text-[#CB2957] leading-[8vw] font-[anzo]">
        SATYAM KALE
      </h1>

      <h1 className="text-[3vw] text-[#DDDDDD] leading-[4vw] font-[anzo]">
        A<span className="text-[#CB2957]"> developer</span> by passion,
      </h1>

      <h1 className="text-[3vw] text-[#DDDDDD] leading-[4vw] font-[anzo]">
        a <span className="text-[#CB2957]">problem-solver</span> by nature.
      </h1>

    </div>
  )
}

export default Tilttext