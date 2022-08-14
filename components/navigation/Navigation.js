import {AppBar} from '@mui/material';

import Banner from '../banner/Banner';
import NavigationLinks from './NavigationLinks';

export default function Navigation({}) {

    return (
        <>
            <AppBar position="relative">
                <Banner />
                <NavigationLinks />
            </AppBar>
        </>
    );
}
