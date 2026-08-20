import React from 'react'
import Header from './components/Header'

import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'

const App = () => {
  return (
    <div className="fixed inset-0 bg-[#DDDDDD] p-7">

      <div className="relative h-full w-full rounded-[50px] overflow-hidden">

        <Header />

        <main className="h-full w-full overflow-y-auto scrollbar-hide">
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </main>

      </div>

    </div>
  )
}

export default App