import './index.scss';

import sorvetinho from '../assets/images/sorvetinho.png'
import logo from '../../../src/pages/assets/images/logo.svg'
import { useState } from 'react';


export default function Sorvete(){
    const [produto, setProduto] = useState('');
    const [pc, setPc] = useState(0);
    const [produtos, setProdutos] = useState([]);
    const [vl, setVl] = useState([]);
    const [total, setTotal] = useState(0);
  
    function exibir() {
      let ped = {
        produto: produto,
        preco: pc,
      };
  
      setProdutos([...produtos, ped]);
      setVl([...vl, pc]);
  
      let soma = pc;
      for (const prod of vl) {
        soma += prod;
      }
      setTotal(soma.toFixed(2));
    }
 
  return (
    <div className="App">

      <div className='homebar'>
        <img src={logo} alt=""/>
        <h1>Portifólio.me</h1>
      </div> 

    <div className='sorvete'>
        <img src={sorvetinho} alt=""/>
    </div>

    <div className='faixa-01'>
        <h1>Novo Item</h1>

    </div>

    <div className='faixa-02'>
            <input type="text"
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
                />
            
        <h1>R$</h1>
        <input
              type="Number"
              value={pc}
              onChange={(e) => setPc(Number(e.target.value))}
            />
        <button onClick={exibir}>Adicionar</button>
    </div>

    <div className='faixa-03'>
        <h1>Lista de Compras</h1>
        {produtos.map((item, index) => (
              <div key={index}>
                Produto: {item.produto}, Preço: {item.preco}
              </div>
            ))}
        <p>Total: R$ {total}</p>
        
    </div>
    



    </div>    
  )
}