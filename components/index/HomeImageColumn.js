import {styled} from '@mui/material/styles';

import HomeAboutMe from './HomeAboutMe';

const ColumnContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px 0;
`;

const ImageContainer = styled('div')`
  min-width: 300px;
  width: 100%;
  height: 500px;
  background-color: gray;
`;

export default function HomeImageColumn({}) {

    return (
        <>
            <ColumnContainer>
                <ImageContainer>

                </ImageContainer>
                <HomeAboutMe />
            </ColumnContainer>
        </>
    );
}
