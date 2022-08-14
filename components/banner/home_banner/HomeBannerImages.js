import {styled} from '@mui/material/styles';

const ImageContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 50px;
`;

const Image = styled('div')`
  height: 150px;
  width: 150px;
  
  border-radius: 50%;
  background-color: black;
`;

export default function HomeBannerImages({...rest}) {

    return (
        <>
            <ImageContainer {...rest}>
                <Image />
                <Image />
                <Image />
            </ImageContainer>
        </>
    );
}