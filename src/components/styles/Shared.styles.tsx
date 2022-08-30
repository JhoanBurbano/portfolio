
export const colors = {
	gray: '#202020',
	gray_l: '#999999',
	gray_d: '#181818',
	gray_el: '#dfdfdf',
	green: '#66ff66',
	green_d: '#009966',
	blue: '#08fdd8',
	blue_d: '#0199ff',
	black: '#000',
	black_t: '#000c',
	white: '#fff',
	red_l: '#ff6666',
	red: '#ff4444',
	red_d: '#ff2222',
	purple: '#c237db',
	yellow: '#ffff33',
	yellow_l: '#ffff77',
	brown: '#dd8844',
};

export let _ = {
	background: colors.gray,
	Navbar: colors.gray_d,
	primary: colors.green,
	secondary: colors.red,
};

export const changeTheme = {
	dark: {
		background: colors.gray,
		Navbar: colors.gray_d,
		primary: colors.green,
		secondary: colors.red,
		color: colors.white,
		landing: colors.white,
		letter: colors.red_l,
		italic: colors.gray_l + '74',
		bigLetter: colors.gray_l + '22',
		links: colors.gray_l,
		inputs: colors.gray_l + '12',
		hover: colors.green,
		navLink: colors.gray_l,
		green_dt: colors.green + '88',
		transparent: '#000a',
		text_i: colors.white,
	},
	light: {
		background: `linear-gradient(to bottom left , ${'#dadada'} -60%, ${'#ffffff'} 80%)`,
		Navbar: colors.black,
		primary: colors.green_d,
		secondary: colors.red_d,
		color: colors.black,
		landing: colors.gray,
		letter: colors.red,
		italic: colors.gray_d + '74',
		bigLetter: colors.gray_d + '55',
		links: colors.gray_d,
		inputs: colors.gray_d + '99',
		hover: colors.green_d,
		navLink: colors.gray_l + 'aa',
		green_dt: colors.green_d + '88',
		transparent: '#0004',
		text_i: colors.black,
		}
	}
	


