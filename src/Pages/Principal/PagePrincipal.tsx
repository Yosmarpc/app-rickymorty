import React from 'react'
import { Card, Placeholder } from 'react-bootstrap'
import { CardComponent } from '../../Components'
import Paginations from '../../Components/Paginations/Paginations'
import { _data } from '../../Constants/constants'
import { usePagesContext } from '../../context/PageContext'

const PagePrincipal = () => {
  const { data } = usePagesContext()

  return (

    <div className='row gy-3'>

      {!data.loading && data.dataResult.length > 0
        ? (
          <div className='col-12 '>
            <Paginations />
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
