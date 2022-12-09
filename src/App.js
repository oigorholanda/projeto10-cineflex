import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Assentos from './components/Assentos';
import Header from './components/Header';
import Horarios from './components/Horarios';
import ListaFilmes from './components/ListaFilmes';


export default function App() {

  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListaFilmes />} />
          <Route path='/sessoes/:idFilme' element={<Horarios />} />
          <Route path='/assentos/:idHorario' element={<Assentos />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 375px;
  margin: auto;
`