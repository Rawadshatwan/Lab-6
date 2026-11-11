// These Allow for this file to use code from other files and from react bootstrap
import Content from './components/content';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Read from './components/Read';
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//This is used to help create the user interface elements
function App() {

  return (
    <div>
      <BrowserRouter>
     <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
              
              <Nav.Link href="/Create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      
      {/* This is how each nav bar connects to the jsx file*/}
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        
        <Route path='/Create' element={<Create></Create> }></Route>
         <Route path='/read' element={<Read></Read> }></Route>
      </Routes>

    {/* <Content></Content>
    <Header></Header>
    <Footer></Footer> */}
    </BrowserRouter>
    </div>
  )
}
  
export default App