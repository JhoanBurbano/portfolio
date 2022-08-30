import { useGlobal } from '../../hooks/useGlobal';
import { RubberText, Skills, subtitles } from '../styles';

const Habilidades = () => {
	const { lang } = useGlobal();

	const ejm = [
		{
			job: 'Fullstack Developer',
			enterprise: 'BurbanoStudio',
			time: '2014 - 2021',
			description: 'Award-winning Content Marketing Agency specialises in creating and sharing engaging content.'
		},
		{
			job: 'Fullstack Developer',
			enterprise: 'Casa Veintidos',
			time: '2021',
			description:
				'Creative brand, website design and development studio that can bring your online business dreams to life.'
		}
	];
	return (
		<Skills>
			<div className="left">
				{lang === 'en' ? (
					<RubberText>
						{subtitles('Skills &')}
						<br />
						{subtitles('Experience')}
					</RubberText>
				) : (
					<RubberText>
						{subtitles('Habilidades &')}
						<br />
						{subtitles('Experiencia')}
					</RubberText>
				)}
				{lang === 'en' ? (
					<p>
						Since beginning my journey as a freelance developer nearly 7 years ago, I’ve done remote work
						for local agencies, consulted for startups, and collaborated with talented people to create web
						products for both business and consumer use.<br />
						<br /> I create successful responsive websites that are fast, easy to use, and built with best
						practices. The main area of my expertise is front-end development with React, Angular, Next &
						Vue, building small and medium web apps, custom plugins and libraries, features, animations, and
						coding interactive layouts.<br />
						<br /> I also have full-stack developer experience with the most popular stacks like
						MEAN(MongoDB, Express, Angular, Node) & MERN (MongoDB, Express, React, Node). <br />
						<br />Visit my LinkedIn profile for more details or just contact me.
					</p>
				) : (
					<p>
						Desde que comencé mi viaje como desarrollador independiente hace casi 10 años, he realizado
						trabajo remoto para agencias, soy consultor para startups y colaboro ​​​​con personas talentosas
						para crear productos web para tanto para el uso comercial como para el consumidor.<br />
						<br />Creo sitios web receptivos exitosos que son rápidos, fáciles de usar y construidos con las
						mejores prácticas. El área principal de mi experiencia es el desarrollo front-end con React,
						Angular, Next & Vue, la construcción de pequeñas y medianas aplicaciones web, plugins y
						librerias personalizadas, animaciones y diseños interactivos de codificación.<br />
						<br /> También tengo experiencia de desarrollador full-stack con las stacks mas populares y
						demandadas como MEAN(MongoDB, Express, Angular, Node) & MERN (MongoDB, Express, React, Node).{' '}
						<br />
						<br />Visita mi Linkedin para mas detalles o Contactame.
					</p>
				)}
			</div>
			<div className="right">
				<ul>
					<li>
						<h3>
							Javascript<span>
								<span id="Javascript" />
							</span>
						</h3>
					</li>
					<li>
						<h3>
							ReactJS<span>
								<span id="ReactJS" />
							</span>
						</h3>
					</li>
					<li>
						<h3>
							Redux<span>
								<span id="Redux" />
							</span>
						</h3>
					</li>
					<li>
						<h3>
							AngularJS<span>
								<span id="AngularJS" />
							</span>
						</h3>
					</li>
					<li>
						<h3>
							NextJS<span>
								<span id="NextJS" />
							</span>
						</h3>
					</li>
					<li>
						<h3>
							NodeJS, ExpressJS<span>
								<span id="NodeJS" />
							</span>
						</h3>
					</li>
					<li>
						<h3>
							MongoDB<span>
								<span id="MongoDB" />
							</span>
						</h3>
					</li>
					<li>
						<h3>
							PostgreSQL, My SQL<span>
								<span id="PostgreSQL" />
							</span>
						</h3>
					</li>
				</ul>
				<div className="notes">
					{ejm.map((e) => (
						<div key={e.enterprise} className="chart">
							<h4>{e.job}</h4>
							<b>{e.enterprise}</b>
							<p>{e.time}</p>
							<p className="description">{e.description}</p>
						</div>
					))}
				</div>
			</div>
		</Skills>
	);
};

export {Habilidades};
