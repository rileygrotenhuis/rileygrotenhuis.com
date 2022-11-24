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
			<body>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Container>
						<NavigationBar />
						{children}
					</Container>
				</ThemeProvider>
			</body>
		</html>
	);
};
