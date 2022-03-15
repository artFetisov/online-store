import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Pagination, Row } from 'react-bootstrap'
import { Context } from '..'

export const PaginationBar = observer(() => {
  const { device } = useContext(Context)

  const pageCount = Math.ceil(device.totalCount / device.limit)

  const pages = []

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (
    <Row>
      <Pagination style={{ margin: '1rem' }}>
        {pages.map((page) => {
          return (
            <Pagination.Item key={page} active={device.page === page} onClick={() => device.setPage(page)}>
              {page}
            </Pagination.Item>
          )
        })}
      </Pagination>
    </Row>
  )
})
