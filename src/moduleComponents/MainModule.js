import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import BrokerBusinessList from './childComponents/BrokerBusinessList'
import BrokerBussinessListPage from './childComponents/BrokerBussinessListPage'
import CustomerListPage from './childComponents/CustomerListPage'
import PageCompany from './childComponents/PageCompany'
import User from './childComponents/User'

const MainModule = (props) => {
  return (
    <div>

<Navbar expand="lg" variant="light" bg="info">
  <Container>
  
    <Button variant="primary" className="d-flex justify-content-end" style={{marginLeft:'100%'}} onClick={()=>{props.history.push('/')}}>Loggin User</Button>
  
  </Container>
</Navbar>

<BrowserRouter>
<Navbar bg="primary" variant="dark" className='w-25' style={{height:"100vh", position :"relative", bottom :"80px"}}>
    <Container className=' flex-column ' style={{position:"relative",bottom : "17%"}}>
        <h1 style={{position : "relative", bottom :"80px" , color :"white"}}>  Main Menu</h1>
    <Navbar.Brand as={Link} to='/user' >User profile Page</Navbar.Brand>
    <Navbar.Brand as={Link} to='/pageCompany'>Company page</Navbar.Brand>
    <Navbar.Brand as={Link} to='/customerlistpage'>Customer listpage</Navbar.Brand>
    <Navbar.Brand as={Link} to='/brokerBusinessLIstPage'>BrokerBusinessLIstPage</Navbar.Brand>
    <Navbar.Brand as={Link} to='/brokerlistdata'>Brokerlistdata</Navbar.Brand>
    
    </Container>
  </Navbar>

    

<Route  path='/user' component={User}></Route>
<Route  path='/pageCompany' component={PageCompany}></Route>
<Route path='/customerlistpage' component={CustomerListPage}></Route>
<Route path="/brokerBusinessLIstPage" component={BrokerBussinessListPage}></Route>
<Route path="/brokerlistdata" component={BrokerBusinessList}></Route>
</BrowserRouter>


    </div>
  )
}

export default MainModule