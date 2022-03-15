import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.'
import { AppRouter } from './components/AppRouter'
import { NavBar } from './components/NavBar'
import { check } from './http/userApi'
import { Footer } from './components/Footer'
import { MainPage } from './pages/MainPage'

export const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data)
        user.setIsAuth(true)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation="border" variant="secondary" />
  }

  return (
    <BrowserRouter>
      <Container
        fluid
        style={{
          padding: 0,
          margin: 0,
          boxSizing: 'border-box',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavBar />
        <AppRouter />
        <Footer />
      </Container>
    </BrowserRouter>
  )
})
