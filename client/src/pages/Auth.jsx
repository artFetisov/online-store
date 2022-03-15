import { useHistory, useLocation } from 'react-router'
import { Container, Card, Form, FormControl, Row, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE, REGiSTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { Context } from '..'
import { login, registration } from '../http/userApi'

export const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const onClickHandler = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      history.push(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 700 }} className="p-5">
        <h4 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h4>
        <Form className="d-flex flex-column mt-3">
          <FormControl
            type="email"
            placeholder="Введите email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
          <FormControl
            type="password"
            placeholder="Введите пароль..."
            className="mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
          <Row className="d-flex justify-content-between mt-4 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта? <NavLink to={REGiSTRATION_ROUTE}>Зарегестрируйтесь!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button variant="success" onClick={onClickHandler}>
              {isLogin ? 'Войти' : 'Зарегестрироваться'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})
