import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'

const Header = () => {
  return (
    <>
      <Router>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand>Portfolio</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='/'>About</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
            </Nav>
          </Container>

        </Navbar>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>

      </Router>
    </>
  )
}

export default Header
