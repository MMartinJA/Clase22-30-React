import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import Ejemplo01 from './pages/Ejemplo01';
import Ejemplo02 from './pages/Ejemplo02';
import Mapa from './pages/Mapa';
import Json from './pages/Json';
import Api from './pages/Api';

function App() {
  return (
    <div className="App">
      {/*<Header></Header>*/}
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          {/*aca vamos a delcarar todas las rutas*/}
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/ejemplo1' element={<Ejemplo01 />}></Route>
          <Route path='/ejemplo2' element={<Ejemplo02 />}></Route>
          <Route path='/ejemplo3' element={<Mapa />}></Route>
          <Route path='/json' element={<Json />}></Route>
          <Route path='/api' element={<Api />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
