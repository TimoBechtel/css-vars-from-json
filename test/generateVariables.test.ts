import cssVars from '../src/index';

test('generate variables string from json object', () => {
	const theme = {
		colors: {
			primary: 'red',
			secondary: 'blue',
		},
		shadows: {
			main: 'box-shadow: 1px 1px black',
		},
		font: {
			family: {
				primary: 'Arial',
			},
		},
	};

	const style = cssVars(theme);

	expect(style).toBe(
		'--colors-primary: red;--colors-secondary: blue;--shadows-main: box-shadow: 1px 1px black;--font-family-primary: Arial;'
	);
});
