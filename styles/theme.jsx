import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
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
        pageTitle: {
            fontSize: '3rem',
            fontWeight: 'bold',
        },
        pageSubtitle: {
            fontSize: '1rem',
            fontWeight: 'normal',
        },
        pageText: {
            fontSize: '1.35rem',
            fontWeight: 'lighter',
        },
    },
});

export default theme;
