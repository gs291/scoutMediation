import {useState} from 'react';
import {Container} from '@mui/material';
import {styled} from '@mui/material/styles';


const IndexContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  margin-bottom: 50px;
`;

export default function Home() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Container maxWidth="lg">

            </Container>
        </>
    )
}
