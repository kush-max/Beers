import React from 'react'
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import Display from './Display'
import Favourites from './Favourites'

function Home() {

    return (
      <Router>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">Beans Love Beers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className="col-8"></div>
        <Navbar.Collapse id="responsive-navbar-nav" className="float-right ! important">        
          <Nav className ="navbar-nav ">
            <Link to="/Beers">Home</Link>             
            <Link to="/fav" style={{paddingLeft:"10px"}}>Favourites</Link>           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
       <Route exact path="/Beers" component={Display}/>
      <Route path="/fav" component={Favourites}/>     
      </Switch>
        </div>
        </Router>
    )
}

export default Home
