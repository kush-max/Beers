import React,{useState} from 'react'
import {Modal,Container,Row,Col} from 'react-bootstrap'
import "../App.css"

function Searchbar({beers}) {
    const [state, setstate] = useState("")
    const [search,setSearch] =useState([])
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

    function handleChange1(e) {
        setstate(e.target.value);
      }

      function handleSearch(val) {
        setSearch(val);
        setShow(true)
      }
    
    const  handleclick =(e)=>
    {
        e.preventDefault();
        var data =beers.filter((value)=>(value.name).toLowerCase()===state.toLowerCase())
        if(data.length>0)
        handleSearch(data[0])  
        else{
            alert("No data found")
        }      
    }
    return (
        <div className="d-flex justify-content-center">
        <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable ">
            <Modal.Header closeButton>
                <Modal.Title>Custom Search</Modal.Title>
            </Modal.Header>
            <Modal.Body >
        <div>
            <Container fluid="md">
                <Row>
                    <Col className="text-center">
                        <img src={search.image_url} alt="beer" width="100px" height="120px"></img>
                    </Col>               
                    <Col className="text-center">
                        {search.name}
                    </Col>
                    
                </Row>
                <Row style={{marginTop:"10px"}}>
                    <Col className="text-center">
                        {search.description}
                    </Col>
                </Row>
            </Container>                       
        </div>
        
    </Modal.Body>
        </Modal>    
            <input className="input" style={{width:"300px"}}  value={state} onChange={handleChange1} placeholder="Search Here"/>
            <button className="input" onClick={handleclick}>search</button>
         
        </div>
    )
}

export default Searchbar
