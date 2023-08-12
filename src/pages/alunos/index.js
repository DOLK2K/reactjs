import './index.scss';

export default function alunos(props) {
  
  return (
    <div
      className='comp-alunos'
      style={{ backgroundColor: props.fundo }}
    >
      <main className={props.tema}>
        <h2> {props.nome} </h2>
        <div>
          <b> Curso: </b> {props.curso}
        </div>
        <div>
          <b> Linguagens: </b>
          <ul>
            {props.linguagens.map(item => <li> {item} </li>)}
          </ul>
          </div>
      </main>
    </div>
  )
}