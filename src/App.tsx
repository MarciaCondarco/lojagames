import { BrowserRouter, Route, Routes } from "react-router-dom"
// import FormaCategoria from "./components/categoria/formcategoria/FormaCategoria"
import FormaCategoria from "./components/categoria/formcategoria/FormaCategoria"
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import PaginaProduto from "./components/produto/paginaproduto/PaginaProduto"
import Home from "./pages/home/Home"
import ListaProduto from "./components/produto/listaproduto/ListaProduto"
import FormProduto from "./components/produto/formproduto/FormProduto"


function App() {

  return (
    <>
      <main className="bg-black">
        {/* <img src="https://ik.imagekit.io/xmqgsi96x8/baixados%20(1).jpeg" alt="foto de fundo" className="absolute -z-10 w-full" /> */}
          {/* blur */}

          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route>
                  <Route path="/" element={<Home />} />
                  {/* <Route path="/produto" element={<P />} /> */}
                  <Route path="/listaproduto" element={<ListaProduto />} />
                  <Route path="/listacategoria" element={<ListaCategoria/>} />
                  <Route path="/formacategoria" element={<FormaCategoria/>} />
                  <Route path="/editar/:id" element={<FormaCategoria />} />
                  <Route path="/produtos/:id" element={<PaginaProduto />} />
                  {/* <Route path="/postagens" element={<ListaProduto />} /> */}
                  <Route path="/formproduto" element={<FormProduto />} />
                </Route>
              </Routes>
            <Footer />
          </BrowserRouter>
          
      </main>
    </>
  )
}

export default App
