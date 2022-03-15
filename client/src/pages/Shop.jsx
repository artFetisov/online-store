import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import { BrandBar } from '../components/BrandBar'
import { DeviceList } from '../components/DeviceList'
import { PaginationBar } from '../components/PaginationBar'
import { TypeBar } from '../components/TypeBar'
import { getBrands, getDevices, getTypes } from '../http/deviceApi'

export const Shop = observer(() => {
  const { device } = useContext(Context)

  useEffect(() => {
    getTypes().then((data) => device.setTypes(data))
    getBrands().then((data) => device.setBrands(data))
    getDevices().then((data) => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
    device.setSelectedType({})
    device.setSelectedBrand({})
  }, [])

  useEffect(() => {
    getDevices(device.selectedType.id, device.selectedBrand.id, device.page, 7).then((data) => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedBrand, device.selectedType])

  return (
    <Container fluid style={{ marginBottom: '4rem' }}>
      <Row>
        <Col md={3}>
          <TypeBar />
          <BrandBar />
        </Col>
        <Col md={9}>
          <PaginationBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  )
})
