import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const CardComponent = ({ dataResult }: any) => {
  return (

    <div className='row bg-while gy-3'>
      {dataResult.map((row: any, i: number) => (
        <div className='col-12 col-lg-3 ' key={i + 1}>
          <Card className='h-100 Card shadow p-2 mb-2 bg-body rounded'>
            <Card.Img variant='top' src={row.image} />
            <Card.Body>
              <Card.Title className='fs-3 fw-bold'><b className={row.status === 'Alive' ? 'cicle bg-success' : 'cicle bg-danger'}>{' '}</b>  {row.name}</Card.Title>
              <Card.Text>
                <div className='row'>
                  <div className='col-12 fw-bold'>
                    species: {row.species}
                  </div>
                  <div className='col-12'>{row.gender}</div>
                  <div className='col-12'>
                    <div className='d-flex fw-bold'>
                      Last known location:
                    </div>
                    {row.location.name}
                  </div>
                </div>
              </Card.Text>
              <Button variant='primary' className='btn btn-sm w-100' disabled>View</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  )
}
