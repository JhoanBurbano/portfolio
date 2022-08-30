import { colors } from ".";

export function setTags(tagName: string){
	return `
	&::before{
		content: '<${tagName}>';
		position: absolute;
		top: -1rem;
		left: -1.5rem;
		font-size: .9rem;
		font-family: 'La Belle Aurore';
		letter-spacing: 0;
		font-weight: 1;
		color:${colors.gray_l + '76'};
	}
	&::after{
		content: '</${tagName}>';
		position: absolute;
		bottom: -1rem;
		right: 0rem;
		font-size: .9rem;
		font-family: 'La Belle Aurore';
		letter-spacing: 0;
		font-weight: 1;
		color:${colors.gray_l + '76'};
	}
	`
}

export function setBigLetters(text: string): string {
	return `
	&::after {
		font-family: "Manrope";
		content: '${text.toUpperCase()}';
		font-size: 20rem;
		position: absolute;
		top: -12rem;
		right: -10rem;
		font-weight: 900;
	}
`
}

export const subtitles = (frase:string): unknown[] => frase.split('').map<unknown>((e, i): unknown => {
    //const rubber = ({ target }: MouseEvent): void => { target.classList.add('load') }

       return (
        <span 
        key={e + i} 
        // onMouseOver = {rubber}
        >{e === ' ' ? <>&nbsp;&nbsp;&nbsp;</> : e}
        </span>
        )  as unknown  
});

export function tags(pos: string, tag: string, side = 'left') {
	const arr = ['letter-spacing: 0;', 'position: absolute;', 'font-family: "La Belle Aurore";', `color:${colors.gray_l + '76'};`, 'font-weigth: 1; font-size: .9rem;', `${side}:-5%;`, pos === 'up' ? 'top:-18%;' : 'bottom:-22%;', `content:'${tag}';`]
	return (arr.join(''));
	// return 'position:absolute; content:"<h2>"; font-family: "La Belle Aurore", cursive; color: yellow;'	
}