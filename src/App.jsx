import React from 'react'
import Header from './components/Header'

import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'

const App = () => {
  return (
    <div className="fixed inset-0 bg-black">

      {/* Pages */}
      <main className="h-full w-full overflow-y-auto scrollbar-hide">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </main>


      {/* Filled Gray Frame */}
      <div
        className="
          pointer-events-none
          fixed inset-0
          z-[90]
          border-[28px] border-[#DDDDDD]
          rounded-none
        "
      />


      {/* Rounded Inner Cut */}
      <div
        className="
          pointer-events-none
          fixed
          top-[28px]
          left-[28px]
          right-[28px]
          bottom-[28px]
          rounded-[50px]
          shadow-[0_0_0_28px_#DDDDDD]
          z-[91]
        "
      />


      {/* Header */}
      <Header />

    </div>
  )
}

export default App