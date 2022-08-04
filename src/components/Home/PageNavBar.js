import { Link  } from 'react-router-dom'

// ! import react bootstrap components 
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const PageNavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      {/* Div with a class container */}
      <Container as='section'>
        <Navbar.Brand as={Link} to='/'>🎉</Navbar.Brand>
        {/* Better way on passing like */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        
          {/* <Nav.Link as={Link} to='/breads'>Bread</Nav.Link> */}
       
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {/* Link to home page works  */}
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          {/* ! link works to about page.  */}
      
       
        </Navbar.Collapse>
       
      </Container>
    </Navbar>


  )
}

export default PageNavBar