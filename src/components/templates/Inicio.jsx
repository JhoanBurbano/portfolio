import { useRef, useState } from 'react';
import { Home } from '../styles';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { useGlobal } from '../../hooks/useGlobal';
import { Button } from '../atoms';

const Inicio = () => {

	const {lang} = useGlobal()

    const [state, setState] = useState({
        sound: 'OFF'
    })

	const rubberRef = useRef()

	const loaded = ({target})=>{
		target.classList.add('load')	
	}

    const handlerSound = ({target})=>{
        if(state.sound==='OFF'){
            setState({
                ...state,
                sound: 'ON'
            })
            target.classList.add('active')
            target.parentElement.classList.add('active')

        }else{
            setState({
                ...state,
                sound: 'OFF'
            })
            target.classList.remove('active')
            target.parentElement.classList.remove('active')
        }
    }


	return (
		<Home>
			<div className="scroll">
				<p>scroll down →</p>
			</div>
			<div className="landing">
				{lang==='en'?
				<h2 ref={rubberRef} >
				<span onMouseOver={loaded} className='letter'  >H</span>
				<span onMouseOver={loaded} className='letter'  >i</span>
				<span onMouseOver={loaded} className='letter'  >,</span>
				<br />
				<span onMouseOver={loaded} className='letter'  >I</span>
				<span onMouseOver={loaded} className='letter'  >’</span>
				<span onMouseOver={loaded} className='letter'  >m</span>
				<span onMouseOver={loaded} className='letter'  >&nbsp;</span>
				<span id="letter">S</span>
				<span onMouseOver={loaded} className='letter'  >e</span>
				<span onMouseOver={loaded} className='letter'  >b</span>
				<span onMouseOver={loaded} className='letter'  >a</span>
				<span onMouseOver={loaded} className='letter'  >s</span>
				<span onMouseOver={loaded} className='letter'  >&nbsp;</span>
				<br />
				<span onMouseOver={loaded} className='letter'  >B</span>
				<span onMouseOver={loaded} className='letter'  >u</span>
				<span onMouseOver={loaded} className='letter'  >r</span>
				<span onMouseOver={loaded} className='letter'  >b</span>
				<span onMouseOver={loaded} className='letter'  >a</span>
				<span onMouseOver={loaded} className='letter'  >n</span>
				<span onMouseOver={loaded} className='letter'  >o</span>
			</h2>:
			<h2 ref={rubberRef} >
			<span onMouseOver={loaded} className='letter'  >Ho</span>
			<span onMouseOver={loaded} className='letter'  >la</span>
			<span onMouseOver={loaded} className='letter'  >,</span>
			<br />
			<span onMouseOver={loaded} className='letter'  >S</span>
			<span onMouseOver={loaded} className='letter'  >o</span>
			<span onMouseOver={loaded} className='letter'  >y</span>
			<span onMouseOver={loaded} className='letter'  >&nbsp;&nbsp;</span>
			<span id="letter">S</span>
			<span onMouseOver={loaded} className='letter'  >e</span>
			<span onMouseOver={loaded} className='letter'  >b</span>
			<span onMouseOver={loaded} className='letter'  >a</span>
			<span onMouseOver={loaded} className='letter'  >s</span>
			<span onMouseOver={loaded} className='letter'  >&nbsp;</span>
			<br />
			<span onMouseOver={loaded} className='letter'  >B</span>
			<span onMouseOver={loaded} className='letter'  >u</span>
			<span onMouseOver={loaded} className='letter'  >r</span>
			<span onMouseOver={loaded} className='letter'  >b</span>
			<span onMouseOver={loaded} className='letter'  >a</span>
			<span onMouseOver={loaded} className='letter'  >n</span>
			<span onMouseOver={loaded} className='letter'  >o</span>
		</h2>}
				
                <canvas id='canvas'></canvas>
                <p>{lang === 'en'?'Web Developer & Amateur Designer':'Desarrollador Web & Diseñador Aficionado'}</p>
				<h3>
					{lang==='en'?'I am ': 'Soy'} &nbsp;
					<b>
						<Typewriter
							options={{
								autoStart: true,
								loop: true,
								delay: 40,
								strings: lang==='en'?[ 'Developer', 'Designer', 'Frelancer', 'Full Stack' ]:[ 'Desarrollador', 'Diseñador', 'Autonomo', 'Full Stack' ]
							}}
						/>
					</b>
				</h3>
				<Button title={lang==='en'?'Contact me':'Contáctame'}></Button>
				<div className="sound">
					<FontAwesomeIcon icon={faCloud} />
                    <p>Sound</p>
                    {/* <label htmlFor="check">
                        <input id="check" type="checkbox" />
                    </label> */}
                    <button onClick={handlerSound} >{state.sound}</button>
				</div>
			</div>
			<div className="scroll">
				<p>scroll down →</p>
			</div>
		</Home>
	);
};

export {Inicio};
