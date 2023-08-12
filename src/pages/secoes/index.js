import './index.scss';

import Alunos from '../../pages/alunos';
import Cabecalho from '../../pages/cabecalho';

export default function Secoes() {

  return (
    <div className='pagina-secoes'>
      <Cabecalho />

      <h1 className='titulo'> Teste de Componente </h1>

      <h1>
        Oieeee
      </h1>

      <div className='lista'>
      
        <Alunos nome="Bruno" curso="Técnico em Informática" linguagens={['HTML', 'JS', 'CSS']} tema="dark" />
        <Alunos nome="Helen" curso="Técnico em Informática" linguagens={['HTML', 'JS', 'CSS', 'Java', 'C#']} tema="light" />
        <Alunos nome="Joana" curso="Técnico em Comunicação Visual" linguagens={['Figma', 'Photoshop']} fundo="#ddedff" />

    <Alunos />
      </div>
    </div>
  )
}