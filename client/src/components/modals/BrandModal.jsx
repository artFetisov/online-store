import { useState } from 'react'
import { Modal, Button, FormControl, Form } from 'react-bootstrap'
import { createBrand } from '../../http/deviceApi'

export const BrandModal = ({ show, onHide }) => {
  const [value, setValue] = useState('')

  const addBrand = () => {
    createBrand({ name: value }).then(() => setValue(''))
  }

  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить брэнд</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            type="text"
            placeholder="Введите название брэнда..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger " onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="success" onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
