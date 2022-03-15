import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer } from 'mobx-react-lite'
import { Button, Card, Col, Image } from 'react-bootstrap'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'
import star from '../assets/star.png'
import { REACT_APP_API_URL } from '../http'
import { DEVICE_ROUTE } from '../utils/consts'
import { addDeviceToBasket } from '../http/basketApi'

export const DeviceItem = observer(({ device }) => {
  const history = useHistory()

  const pushHistoryHandler = (e) => {
    history.push(DEVICE_ROUTE + '/' + device.id)
  }

  const addToBasket = (event) => {
    event.stopPropagation()
    addDeviceToBasket(device.id)
  }

  return (
    <Col
      md={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
      }}
    >
      <Card
        style={{
          maxWidth: '16rem',
          width: '400px',
          maxHeight: '430px',
          cursor: 'pointer',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          overflow: 'hidden',
          wordWrap: 'break-all',
        }}
        border="light"
        className="mt-3 d-flex flex-column"
        onClick={pushHistoryHandler}
      >
        <Image
          variant="top"
          src={REACT_APP_API_URL + device.img}
          width={180}
          height={180}
          style={{ marginRight: 'auto' }}
        />
        <Card.Body
          style={{
            fontSize: '18px',
            padding: '0',
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Card.Text style={{ wordBreak: 'break-all' }}>{device.name}</Card.Text>
          <Card.Text>
            Rating {device.rating} <Image src={star} width={18} height={18} style={{ marginLeft: '0.4rem' }} />
            <Card.Title className="mt-2">{device.price}Р</Card.Title>
          </Card.Text>
        </Card.Body>
        <Button variant="success" style={{ width: '9rem' }} onClick={addToBasket}>
          <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '0.7rem' }} />В корзину
        </Button>
      </Card>
    </Col>
  )
})
