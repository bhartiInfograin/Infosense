import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap'
import Logo from '../../public/images/logo.png'
export default function MobileMenu() {
    return (
        <>
            <header className='mobile_menu'>
                <Navbar bg="light" expand="xl" className='for_mobile_menu'>
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <div className='mobileView_Logo'>
                                <Image src={Logo.src} fluid />
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '1000px' }}
                                navbarScroll
                            >

                                <NavDropdown title="Services" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Big Data Development Services</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                    Modern Data Architecture
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                    Data Engineering Services
                                    </NavDropdown.Item>
                                </NavDropdown>


                                <NavDropdown title="Industries" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Big Data Development Services</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                    Modern Data Architecture
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                    Data Engineering Services
                                    </NavDropdown.Item>
                                </NavDropdown>


                                <Nav.Link href="/use_cases">Use Cases</Nav.Link>

                        
                                <Nav.Link href="/about" >
                                About
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
