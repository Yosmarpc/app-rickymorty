import React from 'react'
import { PagePrincipal } from './Pages'

function App () {
  return (
    <div>
      <section className='container-fluid bg-white py-5 mb-4 sticky-top'>
        <div className='text-center p-2 h-100'>
          <h1 className='Title'>The Rick and Morty API </h1>
        </div>
      </section>
      <section className='container-xxl my-5 '>
        <PagePrincipal />
      </section>
      <section className='container-fluid'>
        <div className='text-center fs-6 py-3 text-white'>
          by Yosmar Hinestroza
        </div>
        <div className='d-flex justify-content-center py-3'>
          <a href='https://github.com/Yosmarpc' className='link-light ' target='_blank' rel='noreferrer'>github.com</a>
        </div>

      </section>
    </div>

  )
}

export default App
