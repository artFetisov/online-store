import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { BrandModal } from '../components/modals/BrandModal'
import { DeviceModal } from '../components/modals/DeviceModal'
import { TypeModal } from '../components/modals/TypeModal'

export const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
      <Button
        variant="outline-success"
        style={{ margin: '1rem', padding: '0.8rem' }}
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant="outline-success"
        style={{ margin: '1rem', padding: '0.8rem' }}
        onClick={() => setBrandVisible(true)}
      >
        Добавить брэнд
      </Button>
      <Button
        variant="outline-success"
        style={{ margin: '1rem', padding: '0.8rem' }}
        onClick={() => setDeviceVisible(true)}
      >
        Добавить устройство
      </Button>
      <BrandModal show={brandVisible} onHide={() => setBrandVisible(false)} />
      <TypeModal show={typeVisible} onHide={() => setTypeVisible(false)} />
      <DeviceModal show={deviceVisible} onHide={() => setDeviceVisible(false)} />
    </Container>
  )
}
