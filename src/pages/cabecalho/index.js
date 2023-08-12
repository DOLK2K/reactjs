import './index.scss';

import { Link } from 'react-router-dom';

export default function Cabecalho() {
  
  return (
    <header className='comp-cabecalho'>
      <h1>INSF</h1>
      <Link to='/media'> media </Link>
      <Link to='/sorveteria'>sorvete</Link>
      <img className='usuario' src='/assets/images/usuario-icone.png' alt='usuario' />
    </header>
  )
}