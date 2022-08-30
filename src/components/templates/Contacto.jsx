import { useRef, useState } from 'react';
import { Button, Contact, RubberText, subtitles } from '../styles';
import {Maps} from './Maps';
import {MapsLight} from './MapsLight';
import { useGlobal } from '../../hooks/useGlobal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// const { GOOGLE_API_KEY } = process.env;

// const { BACK_SERVER } = process.env;


const Contacto = () => {
	const MySwal = withReactContent(Swal)
	const [ state, setState ] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const formRef = useRef()
	const { theme, lang } = useGlobal();

	const handlerChange = ({ target: { name, value } }) => {
		setState({
			...state,
			[name]: value
		});
	};

	const submitHandler = async () => {
		let { name, email, subject, message } = state;
		let [ tEmail, tName, tSubject, tMessage ] = [
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email),
			name.length > 3,
			subject.length > 10,
			message.length > 15 && message.length < 500
		];
		if (tName && tEmail && tSubject && tMessage) {
			alert('Es correcto');
			try {
				const txt = await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_USER_ID)
				await MySwal({
					title:txt.text,
					icon: 'success'
				})
			} catch (error) {
				console.log(error)				
			}
		} else {
			if (!tName) {
				alert('El nombre debe tener mas de 3 caracteres');
			}
			if (!tEmail) {
				alert('El email es incorrecto, debe contener un dominio valido');
			}
			if (!tSubject) {
				alert('El sujeto debe ser especifico y tener 20 caracteres o menos');
			}
			if (!tMessage) {
				alert('El mensaje debe tener mas de 15 caracteres y 500 o menos');
			}
		}
	};

	return (
		<Contact>
			<div className="left">
				{
					lang === 'en'?
					<RubberText> {subtitles('Contact me')} </RubberText>
					:
					<RubberText> {subtitles('Contactame')} </RubberText>
				}
				{lang === 'en' ? (
					<p>
						I’m interested in freelance opportunities or job opportunities especially with ambitious or large projects. However, if
						you have other request or question, don’t hesitate to use the form.
					</p>
				) : (
					<p>
						Estoy interesado en oportunidades laborales independientes o en empresas con grandes
						espectativas, especialmente con proyectos ambiciosos o grandes. Sin embargo, si tiene otra
						solicitud o pregunta, no dude en utilizar el formulario.
					</p>
				)}
				<form
					ref = {formRef}
					onSubmit={(e) => {
						e.preventDefault();
						submitHandler();
					}}
					>
					<input
						className={!(state.name.length>=3)?'error':'active'}
						name="name"
						type="text"
						onChange={handlerChange}
						placeholder="Name"
						value={state.name}
						required
					/>
					<input
						className={!(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(state.email))?'error':'active'}
						name="email"
						type="email"
						onChange={handlerChange}
						placeholder="Email"
						value={state.email}
						required
					/>
					<br />
					<input
						className={!(state.subject.length>=10)?'error':'active'}
						name="subject"
						type="text"
						onChange={handlerChange}
						placeholder="Subject"
						value={state.subject}
						required
					/>
					<br />
					<textarea
						className={!(state.message.length<250&&state.message.length>=20)?'error':'active'}
						name="message"
						onChange={handlerChange}
						placeholder="Message"
						value={state.message}
						required
					/>
					<div>
						<Button>
							{lang === 'en'?'Send Message':'Enviar Mensaje'} <span />{' '}
						</Button>
					</div>
				</form>
			</div>
			<div className="right">{theme === 'dark' ? <Maps /> : <MapsLight />} <span><p>Popayan, Cauca</p> <FontAwesomeIcon className='svg' icon={faLocationArrow}/> </span></div>
		</Contact>
	);
};

export {Contacto};
