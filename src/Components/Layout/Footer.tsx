import React from 'react'
import { usePagesContext } from '../../context/PageContext'

const Footer = () => {
  const { data } = usePagesContext()

  const _pages: number = data.informations.length > 0 ? Number(data.informations.next.split('=')[1]) : 0
  return (
    <section className='container-fluid'>
      <div className='d-grid gap-2 d-md-flex justify-content-center '>
        <h6 className='text-white'>Cantidad de Registro: {data.informations.count}</h6>
        <h6 className='text-white'>Cantidad de Paginas: {_pages === 0 ? 1 : 0} de {data.informations.pages}</h6>
      </div>
      <div className='text-center fs-6 py-3 text-white'>
        by Yosmar Hinestroza
      </div>

      <div className='d-flex justify-content-center py-3'>
        <a href='https://github.com/Yosmarpc' className='link-light ' target='_blank' rel='noreferrer'>github.com</a>
      </div>
    </section>
  )
}

export default Footer
