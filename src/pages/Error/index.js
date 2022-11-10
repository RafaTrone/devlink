import './error.css'

import { Link } from 'react-router-dom'

export default function Error(){
    return(
        <div className='error'>
            <h1>Página não econtrada!</h1>
            <p>Está página que está procurando não existe.</p>

            <Link className="link" to="/">
            Voltar para a home
            </Link>
        </div>
    )
}