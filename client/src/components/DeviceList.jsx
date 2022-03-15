import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '..'
import { DeviceItem } from './DeviceItem'

export const DeviceList = observer(() => {
  const { device } = useContext(Context)

  return (
    <Row>
      {device.devices.map((device) => {
        return <DeviceItem key={device.id} device={device} />
      })}
    </Row>
  )
})
