import React from 'react';
import {Link} from 'gatsby'

export default function Header () {
    return(
        <header>
            <div className='mainHeader'>
                <h1>Dr. Gabriel Robledo Kaiser</h1>
                <h2>Crdiologo</h2>
            </div>
            <div className='navigation'>
                <ul>
                    <li><Link>Quién Soy</Link></li>
                    <li><Link>Preguntas Frecuentes</Link></li>
                    {/* <li><Link>Cardio Oncología</Link></li>
                    <li><Link>Contrapulzación externa</Link></li>
                    <li><Link>Rigidez Arterial</Link></li> */}
                    <li><Link>Servicios</Link></li>
                    <li><Link>Biblioteca</Link></li>
                    <li><Link>Contacto</Link></li>
                </ul>
            </div>
        </header>
    )
}