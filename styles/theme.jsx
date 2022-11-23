import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark'
	},
	typography: {
		homePageTitle: {
			fontSize: '4rem',
			fontWeight: 'bold',
		},
		homePageSubtitle: {
			fontSize: '1.5rem',
			fontWeight: 'normal',
		},
		aboutPageTitle: {
			fontSize: '2.5rem',
			fontWeight: 'bold',
		},
		aboutPageText: {
			fontSize: '1.5rem',
			fontWeight: 'lighter',
		},
	},
});

export default theme;