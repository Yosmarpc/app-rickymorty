import React, { useEffect, useState } from 'react'
import { Button, Card, Placeholder } from 'react-bootstrap'
import { CardComponent } from '../../Components'

import { webApiService } from '../../Services/Index'
export const _data: any = [1, 2, 3, 4, 5, 6]
const PagePrincipal = () => {
  const [data, setData] = useState<{loading: boolean, dataResult: any[], informations: any}>({ loading: false, dataResult: [], informations: [] })

  const loadData = async () => {
    setData({ ...data, loading: true })
    webApiService.getAllCharaters().then((response) => {
      setData({ ...data, loading: false, dataResult: response.results, informations: response.info })
    })
  }

  const getPaginations = async (url: any) => {
    setData({ ...data, loading: true })
    webApiService.getAllPaginations(url).then((response) => {
      setData({ ...data, loading: false, dataResult: response.results, informations: response.info })
    })
  }

  useEffect(() => {
    loadData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (

    <div className='row gy-3'>

      {!data.loading && data.dataResult.length > 0
        ? (
          <div className='col-12 '>
            <div className='d-grid gap-2 d-md-flex justify-content-md-center sticky-top'>
              <Button className='btn btn-primary' onClick={() => getPaginations(data.informations.prev)} disabled={data.informations.prev === null}>Anterior</Button>
              <Button className='btn btn-primary' onClick={() => getPaginations(data.informations.next)}>Siguiente</Button>
            </div>
            <div className='col-12 my-3'>
              <CardComponent dataResult={data.dataResult} />
            </div>
          </div>
          )
        : (
          <>
            {_data.map((r: any, i: number) => (
              <div className='col-12 col-lg-4' key={i + 1}>
                <Card style={{ width: '18em' }}>
                  <Card.Body>
                    <Placeholder as={Card.Title} animation='glow'>
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation='glow'>
                      <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                      <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant='primary' xs={6} />
                  </Card.Body>
                </Card>
              </div>
            ))}
          </>

          )}
    </div>

  )
}

export default PagePrincipal
