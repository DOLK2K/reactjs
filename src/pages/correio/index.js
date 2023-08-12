import { Link } from "react-router-dom";
import './index.scss'
import { useState } from "react";
import axios from "axios";

export default function Correio(){
const [cep, setCEP] = useState('');
const [info, setInfo] = useState('')

async function buscar() {
    let url = 'https://viacep.com.br/ws/' + cep + '/json/';
    
    let resposta = await axios.get(url);

    setInfo(resposta.data.logradouro + ',Bairro:' + resposta.data.bairro);
}
return(
    <div className="pagina-lista-tarefa">
       <div className="container">
        <h1> Correio</h1>
        <div>
          CEP:
          <input type='text' value={cep} onChange={e => setCEP(e.target.value)}/>
          <button onClick={buscar}> Buscar </button>
        </div>
        <div>
           <h3>
            {info}
           </h3>
        </div>
       </div>

       <link className='voltar' to='/'> Voltar para Menu</link>
    </div>
)
}