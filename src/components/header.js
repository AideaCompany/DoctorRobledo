import React from 'react';
import {Link} from 'gatsby'

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram , faYoutube , faLinkedinIn}from '@fortawesome/free-brands-svg-icons'


export default function Header () {
    return(
        <>
        <div className='cuadrado'></div>
        <header>
            <Link to='/' className='mainHeader'>
                <h1>Dr. Gabriel Robledo Kaiser</h1>
                <h2>Cardiologo</h2>
            </Link>
            <div className='navigation'>
                <ul>
                    <li><Link to='/quien-soy'>Quién Soy</Link></li>
                    <li><Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link></li>
                    <li><Link to='/servicios'>Servicios</Link></li>
                    <li><Link to='/biblioteca'>Biblioteca</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </header>
        <div className='verticalFooter'>
            <ul>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>
                </li>
            </ul>
        </div>
        </>
    )
}