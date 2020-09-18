import React, { useState } from 'react';
import {Link} from 'gatsby'

//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram /* , faYoutube , faLinkedinIn, */} from '@fortawesome/free-brands-svg-icons'
import {faCalendarAlt, faBars} from '@fortawesome/free-solid-svg-icons'
//Antd
import {Drawer} from 'antd'


export default function Header () {

    const [openMenu, setOpenMenu] = useState(false)
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
            <FontAwesomeIcon onClick={()=>{setOpenMenu(true)}} className='iconHam' icon={faBars}/>
        </header>
        <Drawer visible={openMenu} onClose={()=>setOpenMenu(false)}>
            <div  className='inHam'>
                <ul className='manuHamItems'>
                    <li><Link to='/quien-soy'>Quién Soy</Link></li>
                    <li><Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link></li>
                    <li><Link to='/servicios'>Servicios</Link></li>
                    <li><Link to='/biblioteca'>Biblioteca</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
                <ul className='hamMenuSocial'>   
                    <li>
                        <Link to="/citas">
                            <FontAwesomeIcon icon={faCalendarAlt}/>
                        </Link>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.facebook.com/DrGabrielRobledoKaiser">
                            <FontAwesomeIcon icon={faFacebookF}/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/drgabrielrobledo/">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </li>
                </ul>
                <span>Dr Gabriel Robledo © 2020 - Powered By <a href="https://aidea.com.co">Aidea S.A.S.</a></span>
            </div>
        </Drawer>

        
        <div className='verticalFooter'>
            <ul>   
                <li>
                    <Link to="/citas">
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                    </Link>
                </li>
                <li>
                    <a target="_blank" href="https://www.facebook.com/DrGabrielRobledoKaiser">
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/drgabrielrobledo/">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
                {/* <li>
                    <a target="_blank" href="#">
                        <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="#">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>
                </li> */}
            </ul>
        </div>
        </>
    )
}