import {styled} from '@mui/material/styles';

import HomeImageColumn from './HomeImageColumn';
import HomeDescription from './HomeDescription';

const HomeContainer = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 30px;
  
  margin-top: 30px;
`;


export default function HomePage({}) {

    return (
        <>
            <HomeContainer>
                <HomeImageColumn sx={{width: '30%'}}/>
                <HomeDescription sx={{width: '70%'}}/>
            </HomeContainer>
        </>
    );
}