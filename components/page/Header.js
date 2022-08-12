import Head from 'next/head';
import {useTheme} from '@mui/material';


export default function Header() {
    const theme = useTheme();

    const barColor = theme.palette.background.default;
    return (
        <>
            <Head>
                <title>Gregory Sanchez - Full Stack Developer</title>
                <link rel="icon" href="/favicon.ico" />

                {/*// <!-- Chrome, Firefox OS and Opera -->*/}
                <meta name="theme-color" content={barColor} />
                {/*// <!-- Windows Phone -->*/}
                <meta name="msapplication-navbutton-color" content={barColor} />
                {/*// <!-- iOS Safari -->*/}
                <meta name="apple-mobile-web-app-status-bar-style" content={barColor} />
            </Head>
        </>
    );
}