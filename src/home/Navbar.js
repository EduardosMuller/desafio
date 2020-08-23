import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../media/logo_webjump.png"
import axios from 'axios'

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId ] = useState(1 );

  //aqui está buscando a lista de categorias do banco de dados.
  useEffect(() => {
      (async function sendProducts() {
          try {
              const response = await axios.get('http://localhost:8888/api/V1/categories/list');
              setProducts(response.data.items);
          } catch (err) {
              console.error(err);
          }
      })();
  }, []); 
   //aqui está buscando todos os produtos do banco de dados
  useEffect(() => {
    (async function sendListProducts() {
        try {
            const list = await axios.get(`http://localhost:8888/api/V1/categories/${id}`);
            setData(list.data.items);
        } catch (err) {
            console.error(err);
        }
    })();
}, [data]); 
    return (
        
        <div>
       
          <div className="upperNavBar d-flex flex-row-reverse">
            <p className="linksUpperNavBar"><Link className="linksUpperNavBar" to="/acessar"><b>Acesse sua Conta</b></Link> ou <Link to="/cadastrar"><b>Cadastre-se</b></Link></p>
          </div>

          <header className="header">
            <nav className="navbar navbar-light bg-light">
          
              <Link className="navbar-brand" to="/">
                <img className="logo" src={LogoImg} alt="WebJump logomarca"/>
              </Link>
              
              <div className="navSearch ">
              
                 <form className="form-inline navSearch "  >
                  <input className="form-control" type="text" placeholder="" aria-label=""/>
                  <button className="btn" type="submit">BUSCAR</button>
                </form>
                
              </div>
            </nav>
            
          </header>

          <div className="navbarProducts">
          <nav className="navbar navbar-expand-sm  navbar-nav d-flex align-items-center">
          
        <ul className="navProducts d-flex align-items-center">
        <li className="nav-item">
          <Link className="navLink " to="/">PÁGINA INICIAL</Link>
        </li>
        {products.map((product, i) => {
            return (
            <li className="nav-item" key={i}><Link className="navLink" to={`/${product.path.toLowerCase()}`}onClick={() => setId(product.id)}>{product.name.toUpperCase()}</Link></li>
            )
          })}
          
        <li className="nav-item">
          <Link className="navLink " to="/contato">CONTATO</Link>
        </li>
      </ul>
        </nav>
        </div>
        
        </div>
   
    )
}

export default Navbar;