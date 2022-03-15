import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { Container, Image, Row, Col, Card } from 'react-bootstrap'
import { DeviceItem } from '../components/DeviceItem'
import { getDevices } from '../http/deviceApi'
import { Context } from '../index'
import { CarouselBar } from '../components/CarouselBar'

export const MainPage = observer(() => {
  const { device } = useContext(Context)

  function importAll(r) {
    return r.keys().map(r)
  }
  const brandsImg = importAll(require.context('../assets/brands_images', false, /\.(png|jpe?g|svg)$/))

  useEffect(() => {
    getDevices(null, null, null, null).then((data) => device.setDevices(data.rows))
  }, [])

  return (
    <Container fluid>
      <Row style={{ margin: '2rem 6rem', borderRadius: '50%' }}>
        <CarouselBar />
      </Row>
      <Row style={{ marginLeft: '1rem' }}>
        <h2>Хиты продаж</h2>
      </Row>
      <Row style={{ marginLeft: '1rem' }}>
        {device.devices.map((item) => {
          return <DeviceItem key={item.id} device={item} />
        })}
      </Row>
      <Row style={{ marginLeft: '1rem', marginTop: '2rem' }}>
        <h2>Популярные бренды</h2>
      </Row>
      <Row>
        {brandsImg.map((img) => {
          return (
            <Col md={3}>
              <Card>
                <Image src={img.default} width={120} height={50} />
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
})
