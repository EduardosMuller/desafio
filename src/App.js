import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Importando navbar, homepage(main) e footer
import Navbar from "./home/Navbar"
import Main from "./home/Main"
import Footer from "./home/Footer"


//Importando Lista de produtos
import Sapatos from "./Products/Sapatos"
import Calcas from "./Products/Calcas"
import Camisetas from "./Products/Camisetas"

//Importando Contato
import Contato from "./contato/Contato"

// import List from './pages/List/index'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sapatos" component={Sapatos} />
        <Route path="/calcas" component={Calcas} />
        <Route path="/camisetas" component={Camisetas} />
        <Route path="/contato" component={Contato}/>
      </Switch>
      </BrowserRouter>
      <Footer component={Footer}/>
    </>
  );
}

export default App;
