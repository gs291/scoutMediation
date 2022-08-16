import {AppBar} from '@mui/material';
import {useRouter} from 'next/router';

import Banner from '../banner/Banner';
import NavigationLinks from './NavigationLinks';
import RegularBanner from '../banner/RegularBanner';

export default function Navigation({}) {
    const router = useRouter();

    return (
        <>
            <AppBar
                position="relative"
                color="transparent"
                elevation={0}
            >
                {router.pathname === '/' ? (
                    <Banner />
                ) : (
                    <RegularBanner />
                )}
            </AppBar>
            <NavigationLinks />
        </>
    );
}
