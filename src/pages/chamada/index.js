import { Link } from "react-router-dom";
import '/index.scss'
import { useState } from "react";

export default function Alunos() {
    const [nomeAluno, setNome] =useState('')
    const [chamadaAluno, setChamada] = useState(0)
    const [alunos, setAlunos] = useState([])


    function adicionarAluno(){
        let aluno ={
            nome:nomeAluno
            chamada:chamadaAluno
        }

        setAlunos([...alunos, aluno]);
    }

    return(
        <div className="pagina-lista-tarefa">
          <div className="container">
            <h1>Lista de Alunos</h1>
            </div>
            <label>Nome:</label>
            <input type="text" value={nomeAluno} onChange={e=> setNome(e.target.value)} />
            <div>
                <label>Chamada:</label>
                <input type="text" value={chamadaAluno} onChange={e=> setChamada(e.target.value)} />
            </div>
                <div>
                    <button onClick={adicionarAluno}>Adicionar</button>
                </div>
              <div>
                <table>
                    <thead>
                        <tr>
                            <th>Chamada</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map(item =>
                         <tr>
                            <td>{item.chamada}</td>
                            <td>{}item.nome</td>
                         </tr>
                        ){
                        
                    </tbody>
                </table>
              </div>
            
        </div>  
        
    )

        

}