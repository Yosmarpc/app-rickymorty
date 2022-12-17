import React, { useEffect, useState } from 'react'
import { Card, Placeholder } from 'react-bootstrap'
import CardComponent from '../../Components/card/Card'
import { webApiService } from '../../Services/Index'

const PagePrincipal = () => {
  const [data, setData] = useState<{loading: boolean, dataResult: any[]}>({ loading: false, dataResult: [] })

  const loadData = async () => {
    setData({ ...data, loading: true })
    webApiService.getAllCharaters().then((response) => {
      console.log('response ==>', response)
      setData({ ...data, dataResult: response.results })
    })
  }

  useEffect(() => {
    loadData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('data.dataResult ==>', data.dataResult)

  return (
    <div>
      <div className='row bg-while gy-3'>
        {data.dataResult && data.dataResult.length > 0
          ? (
            <div className='col-12 '>
              <CardComponent dataResult={data.dataResult} />
            </div>
            )
          : (
            <div className='col-12 '>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src='holder.js/100px180' />
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
            )}
      </div>
    </div>
  )
}

export default PagePrincipal
