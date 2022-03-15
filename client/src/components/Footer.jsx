import { Container, Nav, Navbar } from 'react-bootstrap'

export const Footer = () => {
  return (
    <Navbar
      bg="dark"
      style={{
        bottom: 0,
        right: 0,
        left: 0,
        height: '200px',
        marginTop: 'auto',
        color: 'white',
      }}
    >
      <Container>FOOTER</Container>
    </Navbar>
  )
}
