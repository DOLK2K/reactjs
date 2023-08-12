import './index.scss';

import sorvetinho from '../assets/images/sorvetinho.png'
import logo from '../../../src/pages/assets/images/logo.svg'
import { useState } from 'react';


export default function Sorveti() {
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
    <div className="pagina-sorveteria">
      <div className="conteiner">
        <div className="imagem">
          {sorvetinho}
          <h1>Sorveteria</h1>
        </div>
        <div className="cont1">
          <h2>Novo item</h2>
          <div className="cont1-input">
            <input
              type="text"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
            />
            <input
              type="Number"
              value={pc}
              onChange={(e) => setPc(Number(e.target.value))}
            />
            <button onClick={exibir}>Adicionar</button>
          </div>
        </div>
        <div className="cont2">
          <h3>Lista de Compras</h3>
          <div>
            {produtos.map((item, index) => (
              <div key={index}>
                Produto: {item.produto}, Preço: {item.preco}
              </div>
            ))}
          </div>
          <p>Total: R$ {total}</p>
        </div>
      </div>
    </div>
  );
}