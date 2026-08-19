import React from 'react'

const Page4 = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-black text-[#DDDDDD] font-[anzo] px-20 py-32"
    >

      {/* Heading */}
      <div>
        <p className="text-[#CB2957] text-2xl mb-8">
          CONTACT
        </p>

        <h1 className="text-[7vw] leading-[6.5vw]">
          LET'S BUILD
          <br />
          SOMETHING
          <br />
          TOGETHER.
        </h1>
      </div>


      {/* Contact Content */}
      <div className="mt-20 flex flex-col lg:flex-row justify-between gap-16">

        {/* Message */}
        <div className="lg:w-1/2">

          <p className="text-[2vw] leading-[3vw] text-[#AAAAAA]">
            Have an idea, an opportunity, or just want to
            say hello? I'd love to hear from you.
          </p>

        </div>


        {/* Contact Details */}
        <div className="lg:w-1/3">

          <p className="text-[#CB2957] text-xl mb-4">
            GET IN TOUCH
          </p>

          <a
            href="mailto:satyamkale22@gmail.com"
            className="block text-2xl md:text-3xl hover:text-[#CB2957] transition-colors duration-300"
          >
            satyamkale22@gmail.com
          </a>


          {/* Social Links */}
          <div className="mt-12 flex flex-col gap-5">

            <a
              href="https://linkedin.com/in/satyamkale" target="_blank"
              className="text-2xl hover:text-[#CB2957] transition-colors duration-300"
            >
              LINKEDIN
              <i className="ri-arrow-right-up-line ml-2"></i>
            </a>

            <a
              href="https://github.com/satyamkale09" target="_blank"
              className="text-2xl hover:text-[#CB2957] transition-colors duration-300"
            >
              GITHUB
              <i className="ri-arrow-right-up-line ml-2"></i>
            </a>

          </div>

        </div>

      </div>


      {/* Bottom CTA */}
      <div className="mt-32 border-t border-[#444] pt-8 flex flex-col md:flex-row justify-between gap-6">

        <p className="text-[#AAAAAA]">
          AVAILABLE FOR
        </p>

        <p className="text-xl text-[#CB2957]">
          SOFTWARE ENGINEERING OPPORTUNITIES
        </p>

      </div>

    </section>
  )
}

export default Page4