import {useState} from 'react';
import axios from '../../utils/axios';
import {Toast, Form, FormControl, Button, Navbar, NavDropdown} from 'react-bootstrap';

const Header = () => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [caption, setCaption] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = async () => {
        try{
            if(url==="" || caption==="" || name===""){
                throw 'err';
            }
            if(!url.includes("jpg") || !url.includes("jpeg") || !url.includes("png")){
                throw 'err';
            }
            await axios.post('memes', {
                    name, url, caption
            });
            window.location.reload();
        }
        catch(e) {
            if(e==='err'){
                setErr("Please provide proper input");
            }
            else{
                setErr("Meme already exists");
            }
            setTimeout(()=>{
                setErr("")
            }, 2000)
            return;
        } 
    }
    return (
        <Navbar bg="dark" sticky="top">
            <Navbar.Brand style={{color: "white"}}>XMEME</Navbar.Brand>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/swagger-ui" style={{color: "white"}}>Swagger</a>
                </li>
                </ul>
                <NavDropdown title="Create Meme" id="collasible-nav-dropdown" style={{marginRight:"5px"}}>
                    <Form className="form-inline my-2 my-lg-0" style={{position: "absolute", right:"5px", backgroundColor:"white", padding:"5px"}}>
                        <FormControl className="form-control mr-sm-2" type="search" placeholder="Name" aria-label="Search" onChange={(e)=>setName(e.target.value)} value={name} style={{margin: "5px"}}/>
                        <FormControl className="form-control mr-sm-2" type="search" placeholder="URL" aria-label="URL" onChange={(e)=>setUrl(e.target.value)} value={url} style={{margin: "5px"}}/>
                        <FormControl className="form-control mr-sm-2" type="search" placeholder="Caption" aria-label="Caption" onChange={(e)=>setCaption(e.target.value)} value={caption} style={{margin: "5px"}}/>
                        <Button className="btn btn-primary" onClick={handleSubmit} style={{margin: "5px"}}>Submit</Button>
                    </Form>
                </NavDropdown>
                
            </div>
            <Toast show={err!==""} onClose={()=>setErr("")} style={{position: "absolute", height: "40px", top:"40px", right:"0", backgroundColor:'rgba(255,0, 0, 0.5)', zIndex:1000}}>
                <Toast.Body>{err}</Toast.Body>
            </Toast>
        </Navbar>
    )
}

export default Header;
