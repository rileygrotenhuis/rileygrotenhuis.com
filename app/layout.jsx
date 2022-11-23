"use client";

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../styles/theme';

import NavigationBar from '../components/NavigationBar';
import { Container } from '@mui/system';

export default function RootLayout({ children }) {
	return (
		<html lang="en">			
			<head />
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<body>
					<NavigationBar />
					<Container 
						maxWidth="xl" 
						sx={{ 
							width: {
								xl: '60%',
								lg: '80%',
								md: '80%',
								sm: '80%',
								xs: '90%',
							},
						}}
					>
						{children}
					</Container>
				</body>
			</ThemeProvider>
		</html>
	);
};
