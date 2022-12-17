import React from 'react'
import { Footer, Heander } from './Components/Layout'
import { PagePrincipal } from './Pages'

function App () {
  return (
    <div>
      <Heander />
      <section className='container-xl my-5 '>
        <PagePrincipal />
      </section>
      <Footer />
    </div>

  )
}

export default App
