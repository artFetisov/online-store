import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { REACT_APP_API_URL } from '../http'
import { getOneDevice } from '../http/deviceApi'
import { SHOP_ROUTE } from '../utils/consts'

export const DevicePage = observer(() => {
  const [device, setDevice] = useState({ info: [] })
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    getOneDevice(id).then((data) => setDevice(data))
  }, [])

  return (
    <Container>
      <Row style={{ marginTop: '3rem', marginLeft: '0.1rem' }}>
        <Button variant="outline-success" onClick={() => history.push(SHOP_ROUTE)}>
          Назад
        </Button>
      </Row>
      <Row style={{ marginTop: '2rem', marginLeft: '0.1rem' }}>
        <h2>{device.name}</h2>
      </Row>
      <Row style={{ marginLeft: '0.1rem', marginTop: '1rem' }}>
        <div style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
          Артикул:
          <span style={{ color: 'black', paddingLeft: '0.5rem' }}>{Date.now().toString().slice(6)}</span>
          <span style={{ marginLeft: '0.5rem' }}>Заказали более {Math.random().toString().slice(2, 5)} раз</span>
        </div>
      </Row>
      <Row style={{ marginTop: '3rem' }}>
        <Col md={6}>
          <Image src={REACT_APP_API_URL + device.img} rounded width={300} height={300} />
        </Col>
        <Col md={6} style={{ paddingTop: '2rem' }}>
          <h2>{device.price} Р</h2>
          <Button variant="outline-success" className="mt-3" size="lg">
            Добавить в корзину
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: '3rem', marginLeft: '0.1rem' }} className="d-flex flex-column">
        <h1>Характеристики:</h1>
        {device.info.map((info, index) => {
          return (
            <Row
              key={info.id}
              style={{
                marginLeft: '0.1rem',
                backgroundColor: index % 2 === 0 ? 'rgba(0, 0, 0, 0.2)' : '',
                padding: '0.8rem',
                borderRadius: '2px',
                color: 'rgba(0, 0, 0, 0.8)',
              }}
            >
              {info.title} : {info.description}
            </Row>
          )
        })}
      </Row>
    </Container>
  )
})
