import React from 'react'

const Page3 = () => {
  return (
    <section
      id="about"
      className="min-h-full w-full bg-black text-[#DDDDDD] font-[anzo]"
    >

      {/* About Header */}
      <div className="min-h-screen w-full px-20 py-32">

        <p className="text-[#CB2957] selection:bg-[#DDDDDD] text-2xl mb-8">
          ABOUT SATYAM
        </p>

        <h1 className="w-full text-[5vw] selection:bg-[#CB2957] leading-[5vw] text-[#DDDDDD]">
          MORE THAN JUST A TITLE—
          <br />
          LET'S DIVE DEEPER.
        </h1>


        {/* About Description */}
        <div className="w-full mt-20 selection:bg-[#CB2957]">

          <p className="w-full text-[2vw] leading-[3vw] text-[#DDDDDD]">
            I'm a recent Information Technology graduate with a passion
            for software development, problem-solving, and building
            meaningful digital experiences.
          </p>

          <p className="w-full mt-10 text-[1.5vw] leading-[2.3vw] text-[#AAAAAA]">
            My foundation is in Java, Data Structures and Algorithms,
            Object-Oriented Programming, and backend development.
            I've also explored web technologies and AI-powered
            applications through hands-on projects.
          </p>

          <p className="w-full mt-10 text-[1.5vw] leading-[2.3vw] text-[#AAAAAA]">
            I'm constantly learning, experimenting, and turning ideas
            into working solutions. I enjoy understanding how things
            work, breaking down complex problems, and building software
            that is both useful and reliable.
          </p>

          <p className="w-full mt-10 text-[1.5vw] leading-[2.3vw] text-[#AAAAAA]">
            I'm now looking for opportunities where I can grow as a
            software engineer, contribute to real-world products,
            and solve challenging problems with a great team.
          </p>

        </div>

      </div>


      {/* Skills */}
      <div className="w-full px-20 pb-32">

        <p className="text-[#CB2957] text-2xl mb-10 selection:bg-[#DDDDDD]">
          WHAT I WORK WITH
        </p>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 selection:bg-[#CB2957]">

          <div className="border-t border-[#444] pt-5">
            <p className="text-2xl">JAVA</p>
            <p className="text-[#888] mt-2">
              Core language
            </p>
          </div>

          <div className="border-t border-[#444] pt-5">
            <p className="text-2xl">DSA</p>
            <p className="text-[#888] mt-2">
              Problem solving
            </p>
          </div>

          <div className="border-t border-[#444] pt-5">
            <p className="text-2xl">SPRING BOOT</p>
            <p className="text-[#888] mt-2">
              Backend development
            </p>
          </div>

          <div className="border-t border-[#444] pt-5">
            <p className="text-2xl">AI / ML</p>
            <p className="text-[#888] mt-2">
              Exploration & projects
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Page3