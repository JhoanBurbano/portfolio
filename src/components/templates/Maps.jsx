import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';
const { REACT_APP_GOOGLE_API_KEY } = process.env;

function MyMapComponent({mapId, center, zoom }) {
	const ref = useRef();

	useEffect(() => {
		new window.google.maps.Map(ref.current, {
            mapId,
			center,
			zoom
		});
	}, [ref]);

	return <div ref={ref} id="map" />;
}

const render = (status) => {
	if (status === Status.LOADING) return <p>Loading</p>;
	if (status === Status.FAILURE) return <p>Error</p>;
	return null;
};

const Maps = () => {
	const center = { lat: 2.4536928, lng: -76.6108475 };
	const zoom = 7;
	return (
		<Wrapper apiKey={REACT_APP_GOOGLE_API_KEY} render={render}>
			<MyMapComponent 
            mapId={'33c91ab528980779'}
            center={center}
            zoom={zoom}
            option
            >
                {/* <Marker position={center}/  > */}
            </MyMapComponent>
		</Wrapper>
	);
};

export {Maps};
