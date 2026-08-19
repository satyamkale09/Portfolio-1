import React from 'react'

const Page2 = () => {
  return (
    <section
  id="projects"
  className="min-h-screen w-full bg-black text-[#DDDDDD]"
>

      {/* Projects Intro */}
      <div className="min-h-screen p-20 font-[anzo] ">

        <h1 className="text-[6vw] leading-[4.5vw] text-[#CB2957]">
          A LOT OF IDEAS,
          <br />
          BUT SOME ARE STILL
          <br />
          UNDER CONSTRUCTION.
        </h1>

        <p className="mt-8 text-[2vw] leading-[2.5vw] text-[#DDDDDD]">
          A collection of things I've built, explored,
          <br />
          and brought to life.
        </p>

      </div>


      {/* ================= PROJECT 01 ================= */}

      <div className="min-h-screen px-20 py-20 font-[anzo]">

        {/* Project Header */}
<div className="flex flex-row items-end justify-between gap-10 mb-12">

  {/* Left */}
  <div className="w-1/2">

    <p className="text-[#CB2957] text-2xl mb-4">
      01
    </p>

    <h3 className="text-[6vw] leading-[5.5vw] text-[#DDDDDD]">
      SMART EMAIL
      <br />
      ASSISTANT
    </h3>

  </div>


  {/* Right */}
  <div className="w-1/2 text-right pb-2">

    <p className="text-2xl md:text-3xl text-[#CB2957]">
      SPRING BOOT × GEMINI AI
    </p>

    <p className="text-xl md:text-2xl leading-8 text-[#AAAAAA] mt-4">
      Java · Spring Boot · REST APIs · Gemini API · Maven · JSON
    </p>

  </div>

</div>

        {/* Project Preview */}
        {/* <div className="w-full h-[55vh] rounded-[40px] bg-[#DDDDDD] flex items-center justify-center">

          <p className="text-black text-2xl font-[anzo]">
            PROJECT PREVIEW
          </p>

        </div> */}


        {/* Project Description */}
<div className="mt-16 flex flex-col lg:flex-row justify-between gap-16">

  <div className="w-full lg:w-[65%]">

    <p className="text-[1.7vw] leading-[2.5vw] text-[#DDDDDD]">
      An AI-powered email reply generator built using
      Spring Boot and Google's Gemini API to generate
      context-aware email responses.
    </p>

  </div>

  <div className="flex items-start">

    <a
      href="https://github.com/satyamkale09/email-reply-generator"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-[#CB2957] hover:text-[#DDDDDD] transition-colors duration-300"
    >
      GITHUB
      <i className="ri-arrow-right-up-line ml-2"></i>
    </a>

  </div>

</div>


{/* Features */}
<div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

  <div className="border-t border-[#444] pt-6 min-h-[140px]">
    <p className="text-[#CB2957] text-2xl">01</p>
    <p className="mt-4 text-xl leading-8">
      AI-powered email generation
    </p>
  </div>

  <div className="border-t border-[#444] pt-6 min-h-[140px]">
    <p className="text-[#CB2957] text-2xl">02</p>
    <p className="mt-4 text-xl leading-8">
      RESTful API architecture
    </p>
  </div>

  <div className="border-t border-[#444] pt-6 min-h-[140px]">
    <p className="text-[#CB2957] text-2xl">03</p>
    <p className="mt-4 text-xl leading-8">
      Input validation & exception handling
    </p>
  </div>

  <div className="border-t border-[#444] pt-6 min-h-[140px]">
    <p className="text-[#CB2957] text-2xl">04</p>
    <p className="mt-4 text-xl leading-8">
      API testing with Postman
    </p>
  </div>

</div>


      </div>


      {/* ================= PROJECT 02 ================= */}

      <div className="min-h-screen px-20 py-20 font-[anzo]">

        {/* Project Header */}
<div className="flex flex-row items-end justify-between gap-10 mb-12">

  {/* Left */}
  <div className="w-1/2">

    <p className="text-[#CB2957] text-2xl mb-4">
      02
    </p>

    <h3 className="text-[5.5vw] leading-[5vw] text-[#DDDDDD]">
      PRIVACY-PRESERVING
      <br />
      ACTIVITY TRACKING
    </h3>

  </div>


  {/* Right */}
  <div className="w-1/2 text-right pb-2">

    <p className="text-2xl md:text-3xl text-[#CB2957]">
      MACHINE LEARNING × COMPUTER VISION
    </p>

    <p className="text-xl md:text-2xl leading-8 text-[#AAAAAA] mt-4">
      Python · Machine Learning · Computer Vision · MySQL
    </p>

  </div>

</div>


        {/* Project Preview */}
        {/* <div className="w-full h-[55vh] rounded-[40px] bg-[#DDDDDD] flex items-center justify-center">

          <p className="text-black text-2xl font-[anzo]">
            PROJECT PREVIEW
          </p>

        </div> */}


        {/* Project Description */}
<div className="mt-16 flex flex-col lg:flex-row justify-between gap-16">

  <div className="w-full lg:w-[65%]">

    <p className="text-[1.7vw] leading-[2.5vw] text-[#DDDDDD]">
      A machine learning application for privacy-preserving
      activity classification in e-learning environments.
    </p>

  </div>

  <div className="flex items-start">

    <a
      href="https://drive.google.com/file/d/1yfbxSU0YIF7tVQ8ndOLCWaCq4lMKO8sk/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-[#CB2957] hover:text-[#DDDDDD] transition-colors duration-300"
    >
      RESEARCH PAPER
      <i className="ri-arrow-right-up-line ml-2"></i>
    </a>

  </div>

</div>


{/* Features */}
<div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

  <div className="border-t border-[#444] pt-6 min-h-[140px]">
    <p className="text-[#CB2957] text-2xl">01</p>
    <p className="mt-4 text-xl leading-8">
      Data preprocessing & evaluation
    </p>
  </div>

  <div className="border-t border-[#444] pt-6 min-h-[140px]">
    <p className="text-[#CB2957] text-2xl">02</p>
    <p className="mt-4 text-xl leading-8">
      Activity classification
    </p>
  </div>

  <div className="border-t border-[#444] pt-6 min-h-[140px]">
    <p className="text-[#CB2957] text-2xl">03</p>
    <p className="mt-4 text-xl leading-8">
      15% classification accuracy improvement
    </p>
  </div>

  <div className="border-t border-[#444] pt-6 min-h-[140px]">
    <p className="text-[#CB2957] text-2xl">04</p>
    <p className="mt-4 text-xl leading-8">
      Debugging & performance evaluation
    </p>
  </div>

</div>

      </div>

    </section>
  )
}

export default Page2