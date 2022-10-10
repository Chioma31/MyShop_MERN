import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Screens/Home';
import ProductPage from './Screens/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={ <Home /> } exact />
              <Route path='/product/:id' element={ <ProductPage /> } />
            </Routes>
          </Container>
        </main>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
