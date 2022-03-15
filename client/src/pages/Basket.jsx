import { Container, Row, Col } from 'react-bootstrap'
import { SHOP_ROUTE } from '../utils/consts'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { getDevicesFromBasket } from '../http/basketApi'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { BasketItem } from '../components/BasketItem'
import { BasketOrder } from '../components/BasketOrder'

export const Basket = observer(() => {
  const { basket } = useContext(Context)

  useEffect(() => {
    getDevicesFromBasket().then((data) => basket.setDevices(data))
  }, [])

  return (
    <Container fluid style={{ padding: '0 6rem' }}>
      <Row style={{ marginTop: '2rem' }}>
        <h2>Ваша корзина пока пуста</h2>
      </Row>
      <Row>
        <NavLink to={SHOP_ROUTE}>Отправиться за покупками</NavLink>
      </Row>
      <Row>
        <Col md={8} style={{ padding: '10px' }}>
          <Row style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px' }}>
            {basket.devices.map((item) => {
              return <BasketItem device={item} key={item.id} />
            })}
          </Row>
        </Col>
        <Col md={4}>
          <BasketOrder />
        </Col>
      </Row>
    </Container>
  )
})
