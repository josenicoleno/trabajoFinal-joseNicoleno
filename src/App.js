import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  /* const [carrito, setCarrito] = useState([])
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
 */
  return (
    {/* < CartContextProvider products={carrito}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route index element={<ItemListContainer />} />
          <Route path='personajes/:id' element={<ItemDetailContainer />} />
          <Route path='episodios' element={<Episodies />} />
          <Route path='episodio/:id' element={<EpisodeDetailContainer />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='carrito' element={<Cart />} />
          <Route path='sobre-nostros' element={<SobreNosotros />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider > */}
  );
}

export default App;
