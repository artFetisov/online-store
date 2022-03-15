import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { faShopify } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Container, Button, Nav, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Context } from '..'
import { searchDevice } from '../http/deviceApi'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'

export const NavBar = observer(() => {
  const { user, device } = useContext(Context)
  const history = useHistory()

  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
    history.push(LOGIN_ROUTE)
  }

  const searchDeviceHandler = (event) => {
    searchDevice(event.target.value).then((data) => device.setDevices(data))
    history.push(SHOP_ROUTE)
  }

  return (
    <Navbar bg="light" expand="lg" variant="dark" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Navbar.Brand href={SHOP_ROUTE} style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
          <FontAwesomeIcon icon={faShopify} style={{ marginRight: '4px' }} size="lg" />
          SHOP
        </Navbar.Brand>
        <Form style={{ width: '50%' }}>
          <Form.Control
            style={{ width: '100%' }}
            placeholder="Введите название товара..."
            type="text"
            onChange={searchDeviceHandler}
          />
        </Form>

        {user.isAuth ? (
          <Nav>
            <Button variant="success" onClick={() => history.push(ADMIN_ROUTE)}>
              Админ Панель
            </Button>{' '}
            <Button variant="success" className="ml-2" onClick={logout}>
              Выйти
            </Button>
            <Button
              variant="light"
              className="ml-2"
              style={{ color: 'rgba(0, 0, 0, 0.8)' }}
              onClick={() => history.push(BASKET_ROUTE)}
            >
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '4px' }} />в корзину
            </Button>
          </Nav>
        ) : (
          <Nav>
            <Button variant="success" onClick={() => history.push(LOGIN_ROUTE)}>
              Авторизация
            </Button>
            <Button
              variant="light"
              className="ml-2"
              style={{ color: 'rgba(0, 0, 0, 0.8)' }}
              onClick={() => history.push(BASKET_ROUTE)}
            >
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '4px' }} />В КОРЗИНУ
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})
