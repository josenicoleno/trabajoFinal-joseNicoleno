import React, { useState, useEffect } from 'react';
import { CartContextProvider } from './context/cartContext'
import NavBar from './navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './itemdetail/ItemDetailContainer';
import ItemCartContainer from './cart/ItemCartContainer';
import Footer from './footer/Footer';
import PageNotFound from './pagenotfound/PageNotFound';
import AboutUs from './aboutus/AboutUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getCart } from './firebase/firebase'
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([])
  /*trae los datos del carrito */
  useEffect(() => {
    getCart()
      .then((snp) => {
        setCarrito(
          snp.docs.map((document) => ({
            ...document.data(),
            id: document.id
          }))
        )
      })
  }, [])
  
  return (
    < CartContextProvider products={carrito}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route index element={<ItemListContainer />} />
          <Route path='productos/:id' element={<ItemDetailContainer />} />
          {/*  <Route path='episodios' element={<Episodies />} />
          <Route path='episodio/:id' element={<EpisodeDetailContainer />} /> */}
          <Route path='carrito' element={<ItemCartContainer />} />
          <Route path='sobre-nostros' element={<AboutUs />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider >
  );
}

export default App;
