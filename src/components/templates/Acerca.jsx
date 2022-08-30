import { About, colors } from '../styles';
import { Link } from 'react-router-dom';
import TagsCanvas from 'react-tags-canvas';
import { useGlobal } from '../../hooks/useGlobal';
import { RubberText } from '../atoms'

const Acerca = () => {
	const { theme, lang } = useGlobal();
	return (
		<About>
			<div className="left">
				{lang === 'en'?
				<RubberText word={ 'My, Myself & I' }></RubberText>
			:
			<RubberText word={'Quien soy Yo'}></RubberText>
			}
				{lang === 'en' ? (
					<p>
						I’m a <b>FullStack Developer</b> located in Colombia. I have a serious passion for optimization, animations
						and creating intuitive, dynamic user experiences.
						<br />
						<br />
						Social person, problem solver, autodidact with high attention to detail. Fan
						of Comics, swimming, TV series and English songs. A family person and father of one
						hiperactive boy,
						<br />
						<br />
						Interested in the entire frontend and backend spectrum and working on ambitious projects, startups, developers teams with positive
						people.
						<br />
						<br />
						<Link to="/contact">Let's something special</Link>
					</p>
				) : (
					<p>
						Soy un <b>Desarrollador Fullstack</b> ubicado en Colombia, tengo una gran pasion por la optimizacion, las animaciones
						y la creacion de experiencias de usuario intuitivas y dinamicas.
						<br />
						<br />
						Soy una persona sociable, un creador de soluciones, autodidacta con una alta atencion al detalle, fan de los Comics, 
						la natacion, las series de TV y las canciones en Inglés. Soy hogareño y padre de un niño hiperactivo.
						<br />
						<br />
						Tengo alto interes por el Frontend y Backend y anhelo trabajar con proyectos ambiciosos, startups, equipos de desarrollo y comuniades con personas positivas
						<br />
						<br />
						<Link to="/contact">Desarrollemos algo increible</Link>
					</p>
				)}
			</div>
			<div className="right">
				<TagsCanvas
					width={500}
					height={500}
					textColour={theme === 'dark' ? colors.green : colors.black}
					maxSpeed={0.06}
					freezeActive={true}
					shuffleTags
					shape="sphere"
					zoom={1}
					noSelect
					textFont={null}
					pinchZoom
					tags={[
						{ value: 'HTML5', weight: 1 },
						{ value: 'CSS3', weight: 1 },
						{ value: 'Javascript', weight: 1 },
						{ value: 'React', weight: 1 },
						{ value: 'ReactHooks', weight: 1 },
						{ value: 'Redux', weight: 1 },
						{ value: 'Angular', weight: 1 },
						{ value: 'NodeJS', weight: 1 },
						{ value: 'Python', weight: 1 },
						{ value: 'Django', weight: 1 },
						{ value: 'Flask', weight: 1 },
						{ value: 'MySQL', weight: 1 },
						{ value: 'Postgres', weight: 1 },
						{ value: 'MongoDB', weight: 1 },
						{ value: 'Firebase', weight: 1 },
						{ value: 'Git', weight: 1 },
						{ value: 'Github', weight: 1 },
						{ value: 'Blender', weight: 1 },
						{ value: 'Ilustrator', weight: 1 },
						{ value: 'Premiere', weight: 1 },
						{ value: 'Unity', weight: 1 },
						{ value: 'C#', weight: 1 },
						{ value: 'Java', weight: 1 }
					]}
				/>
			</div>
		</About>
	);
};

export {Acerca};
