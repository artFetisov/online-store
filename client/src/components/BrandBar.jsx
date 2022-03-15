import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Card, Row, Dropdown } from 'react-bootstrap'
import { Context } from '..'

export const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <Dropdown className="mt-3 mb-3">
      <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
        {device.selectedBrand.name || 'Сортировка по бренду'}
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
  )
})
