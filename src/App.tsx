import React from 'react'
import { Footer, Heander } from './Components/Layout'
import { PagesContextProvider } from './context/PageContext'
import { PagePrincipal } from './Pages'

function App () {
  return (
    <PagesContextProvider>
      <Heander />
      <section className='container-xl my-4 '>
        <PagePrincipal />
      </section>
      <Footer />
    </PagesContextProvider>

  )
}

export default App
