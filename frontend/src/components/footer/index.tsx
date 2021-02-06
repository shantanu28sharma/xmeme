import {Navbar, Nav} from 'react-bootstrap';

function Footer() {
    return (
        <Navbar bg="dark" expand="lg" fixed="bottom">
            <Navbar.Brand style={{color:"white"}}>Shantanu</Navbar.Brand>
            <Nav.Link href="https://github.com/shantanu28sharma" target="blank">Github</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/shantanu28/" target="blank">LinkedIn</Nav.Link>
        </Navbar>
    )
}

export default Footer;