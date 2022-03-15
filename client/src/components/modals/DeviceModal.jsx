import { observer } from 'mobx-react-lite'
import { useContext, useState, useEffect } from 'react'
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../..'
import { getTypes, getBrands, createDevice } from '../../http/deviceApi'

export const DeviceModal = observer(({ show, onHide }) => {
  const { device } = useContext(Context)
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [file, setFile] = useState(null)

  useEffect(() => {
    getTypes().then((data) => device.setTypes(data))
    getBrands().then((data) => device.setBrands(data))
    device.setSelectedType({})
    device.setSelectedBrand({})
  }, [])

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)))
  }

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }

  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number))
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', Number(price))
    formData.append('img', file)
    formData.append('typeId', device.selectedType.id)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then((data) => console.log(data))
  }

  const setFileHandler = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3 mb-3">
            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
              {device.selectedType.name || 'Выбрать тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => {
                return (
                  <Dropdown.Item key={type.id} onClick={() => device.setSelectedType(type)}>
                    {type.name}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mt-3 mb-3">
            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
              {device.selectedBrand.name || 'Выбрать брэнд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => {
                return (
                  <Dropdown.Item key={brand.id} onClick={() => device.setSelectedBrand(brand)}>
                    {brand.name}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            placeholder="Введите название устройства..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3 mb-3"
          />

          <Form.Control
            placeholder="Введите стоимость устройства..."
            type="number"
            className="mt-3 mb-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Form.Control type="file" className="mt-3 mb-3" onChange={setFileHandler} />
          <hr />

          <Button variant="outline-success" onClick={addInfo}>
            Добавить Характеристики
          </Button>

          {info.map((item) => {
            return (
              <Row className="mt-4" key={item.number}>
                <Col md={4}>
                  <Form.Control
                    placeholder="Введите название характеристики"
                    onChange={(e) => changeInfo('title', e.target.value, item.number)}
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder="Введите описание характеристики"
                    type="text"
                    onChange={(e) => changeInfo('description', e.target.value, item.number)}
                  />
                </Col>
                <Col md={4}>
                  <Button variant="outline-danger" onClick={() => removeInfo(item.number)}>
                    Удалить
                  </Button>
                </Col>
              </Row>
            )
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="success" onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
})
