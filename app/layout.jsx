"use client";

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../styles/theme';

import NavigationBar from '../components/NavigationBar';

export default function RootLayout({ children }) {
	return (
		<html lang="en">			
			<head />
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<body>
					<NavigationBar />
					{children}
				</body>
			</ThemeProvider>
		</html>
	);
};
