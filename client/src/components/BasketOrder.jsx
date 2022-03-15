import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Context } from '..'

export const BasketOrder = observer(() => {
  const { basket } = useContext(Context)

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>В вашей корзине {basket.devices.length} товаров </Card.Title>
        <Card.Title>{basket.totalPrice}</Card.Title>
      </Card.Body>

      <Button>Заказать</Button>
    </Card>
  )
})
