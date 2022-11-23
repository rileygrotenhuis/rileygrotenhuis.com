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
		}
	},
});

export default theme;