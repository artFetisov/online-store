import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { ListGroup, Dropdown } from 'react-bootstrap'
import { Context } from '../index'

export const TypeBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <Dropdown className="mt-3">
      <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
        {device.selectedType.name || 'Сортировка по типу'}
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
  )
})
