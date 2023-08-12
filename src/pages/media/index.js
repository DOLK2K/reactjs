import './index.scss';

import { Link } from 'react-router-dom';

export default function Media() {
  
  return (
    <header className='comp-media'>
      <h1>INSF</h1>
      <Link to='/cabecalho'> cabecalho </Link>

      <img className='usuario' src='/assets/images/usuario-icone.png' alt='usuario' />
    </header>
  )
}