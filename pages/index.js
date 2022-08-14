import {useState} from 'react';
import {Container} from '@mui/material';

import HomePage from '../components/index/HomePage';


export default function Home() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Container maxWidth="lg">
                <HomePage />
            </Container>
        </>
    )
}
