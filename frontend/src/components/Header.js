import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>MyShop</Navbar.Brand>
          </LinkContainer> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          
            <Nav className='nav'>
              <LinkContainer to='/cart'>
                <Nav.Link><i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link ><i class="fa fa-user" aria-hidden="true"></i>Sign in</Nav.Link>
              </LinkContainer>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  )
}

export default Header
