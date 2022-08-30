import { NavLink, Link } from 'react-router-dom';
import { Navbar } from '../styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faAdjust} from '@fortawesome/free-solid-svg-icons' 
import { useGlobal } from '../../hooks/useGlobal';

const Navigation = () => {

    const { toggleTheme, lang, toggleLang} = useGlobal()
    return (

    <Navbar>
    <div className="logo">
      <Link to={''}> 
      <img src={"https://burbanostudio-assets.s3.us-east-2.amazonaws.com/assets/imgs/profile_pro.jpg"} alt="sebas burbano" />
      <span className='back'><p>Back to home</p></span>
      <p className='name'>Sebas Burbano</p>
      </Link>
    </div>
    <div className="menu">
      <NavLink to={'about'}>{lang==='en'?'About':'Más Sobre Mi'}</NavLink>
      <NavLink to={'my-skills'}>{lang==='en'?'My Skills': 'Habilidades'}</NavLink>
      <NavLink to={'portfolio'}>{lang==='en'?'Portfolio':'Portafolio'}</NavLink>
      <NavLink to={'contact'}>{lang==='en'?'Contact':'Contacto'}</NavLink>
      <NavLink to={'curriculum-vitae'}>{lang==='en'?'Document':'Documentos'}</NavLink>
      <div className="redes">
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sebastian-burbano/'><FontAwesomeIcon icon={faLinkedin}/></a>
        <a target='_blank' rel='noreferrer' href='https://github.com/JhoanBurbano'><FontAwesomeIcon icon={faGithub}/></a>
        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/sebas.burbano07'><FontAwesomeIcon icon={faInstagram}/></a>
      </div>
      <div className="config">
        <button onClick={toggleTheme} ><FontAwesomeIcon icon={faAdjust}/></button>
        <button onClick={toggleLang}><p>{lang.toUpperCase()}</p></button>
      </div>
    </div>  
  </Navbar>
        )
}

export {Navigation}
