import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListImg from "../media/grid.svg";
import GridImg from "../media/menu.svg";
import Fade from "react-reveal/Fade";

const Camisetas = () =>{
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);
    const id= 1;
    //aqui está buscando a lista de categorias do banco de dados.
//   useEffect(() => {
//     (async function sendProducts() {
//         try {
//             const response = await axios.get('http://localhost:8888/api/V1/categories/list');
//             setProducts(response.data.items);
//         } catch (err) {
//             console.error(err);
//         }
//     })();
// }, []); 
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
}, [id]); 
return (

    <div>
    
        <div>
            <h6 className="navegacao">Página Inicial <span> {`>`} </span> <span className="spanRed">Camisetas</span></h6>
        </div>
        <div className="main d-flex flex-row">
            <div className="navbarLateralCamisetas w-100 col-3 ">
                <h4><b>FILTRE POR</b></h4>

                <h5>CATEGORIAS</h5>
                <ul className="listaLateral">
                    <li>Roupas</li>
                    <li>Sapatos</li>
                    <li>Acessórios</li>
                </ul>
                
                <h5>CORES</h5>
                <div className=" d-flex justify-content-start">
                    <ul className="coresLista">
                        <li className="corVermelha"></li>
                        <li className="corLaranja"></li>
                        <li className="corCiano"></li>
                    </ul>
                </div>
               
                <h5>TIPO</h5>
                <ul className="listaLateral">
                    <li>Corrida</li>
                    <li>Caminhada</li>
                    <li>Casual</li>
                    <li>Social</li>
                </ul>                    
            </div>

            <div className="productsArea">
                <div className="mainTitle"> 
                    <h2 className="ml-3 ">Sapatos</h2>
                    <hr className="ml-3"/>
                    <div className="divIcon d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="icon2" src={GridImg} alt="GridIcon"/>
                            <img className="icon1" src={ListImg} alt="ListIcon"/>
                        </div>

                    <form className="filtroSelect">
                        <label className='d-flex align-items-end' htmlFor="ordernar por">ORDENAR POR</label>
                        <select name="filtro de pesquisa" className="d-flex align-items-center form-control" >
                            <option value="menor preço">Preço</option>
                            <option value="maior preço">Tipo</option>
                        </select>
                    </form>
                </div>

                <hr className="ml-3"/>
            </div>

            <div className="card-deck">
                {data.map((value, i) => {
                    return (
                    <div className="col-sm-3" key={i}>
                    <Fade top>
                        <div className="card">
                            <Link to={`/`}>
                                <img className="card-img-top" src={value.image} alt={`Imagem produto ${value.name}`}/>
                            </Link>
                            <div className="card-body">
                                <div className="d-flex justify-content-center ">
                                    <h6 className="produtoNome">{value.name}</h6>
                                </div>
                                <div className="d-flex justify-content-center"><span>R${value.price},90</span>
                                </div>
                            </div>
                                <button className="btn">COMPRAR</button>
                        </div>
                        </Fade>
                    </div>
                    )
                })}
            </div>
        </div>
    
    </div>

    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            <li className="page-item disabled">
                <Link className="page-link" to="/camisetas" tabIndex="-1">{`<`}</Link>
            </li>
            <li className="page-item">
                <Link className="page-link" to="/camisetas">1</Link>
            </li>
            <li className="page-item">
                <Link className="page-link" to="/camisetas">2</Link>
            </li>
            <li className="page-item-selected">
                <Link className="page-link" to="/camisetas">3</Link>
            </li>
            <li className="page-item">
                <Link className="page-link" to="/camisetas">4</Link>
            </li>
            <li className="page-item">
                <Link className="page-link" to="/camisetas">5</Link>
            </li>
            <li className="page-item">
                <Link className="page-link" to="/camisetas">{`>`}</Link>
            </li>
        </ul>
    </nav>  
</div>
)
}

export default Camisetas

