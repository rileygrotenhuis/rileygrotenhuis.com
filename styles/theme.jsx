import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark'
	},
	typography: {
		heroTitle: {
			fontSize: '4rem',
			fontWeight: 'bold',
		},
		heroSubtitle: {
			fontSize: '1.5rem',
			fontWeight: 'normal',
		},
	},
});

export default theme;