import { observer } from 'mobx-react-lite'
import { Card, Image, Button } from 'react-bootstrap'
import { REACT_APP_API_URL } from '../http'
import { removeDevice } from '../http/basketApi'

export const BasketItem = observer(({ device }) => {
  const removeHandler = () => {
    removeDevice(device.id).then((data) => console.log(data))
  }

  return (
    <Card className="mt-3" style={{ maxWidth: '850px' }}>
      <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image src={REACT_APP_API_URL + device.img} width={80} height={80} />
        <Card.Title>{device.name}</Card.Title>
        <Button style={{ borderRadius: '50%' }} variant="outline-success">
          -
        </Button>
        <Card.Subtitle className="text-muted">1</Card.Subtitle>
        <Button style={{ borderRadius: '50%' }} variant="outline-success">
          +
        </Button>
        <Card.Subtitle className="text-muted">{device.price}Р</Card.Subtitle>
        <Button style={{ borderRadius: '50%' }} variant="outline-success" onClick={removeHandler}>
          X
        </Button>
      </Card.Body>
    </Card>
  )
})
