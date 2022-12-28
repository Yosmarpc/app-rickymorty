
import React from 'react'
import { Button } from 'react-bootstrap'
import { usePagesContext } from '../../context/PageContext'

import { webApiService } from '../../Services/Index'

const Paginations = () => {
  const { data, setData } = usePagesContext()

  const getPaginations = async (url: any) => {
    setData({ ...data, loading: true })
    webApiService.getAllPaginations(url).then((response) => {
      setData({ ...data, loading: false, dataResult: response.results, informations: response.info })
    })
  }
  // number page next
  const _pagesNext: number = data.informations ? Number(data.informations.next.split('=')[1]) : 0
  //  number page previous
  const _pagesPrevious: number = data.informations.prev !== null ? Number(data.informations.prev.split('=')[1]) : 0
  return (
    <div className='d-grid gap-2 d-md-flex justify-content-md-center sticky-top'>
      <Button className='btn btn-primary' onClick={() => getPaginations(data.informations.prev)} disabled={data.informations.prev === null}>Anterior {_pagesPrevious > 0 && _pagesPrevious}</Button>
      <Button className='btn btn-primary' onClick={() => getPaginations(data.informations.next)}>Siguiente {_pagesNext}</Button>
    </div>
  )
}

export default Paginations
