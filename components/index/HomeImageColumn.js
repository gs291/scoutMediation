import Image from 'next/image';
import {styled} from '@mui/material/styles';

import HomeAboutMe from './HomeAboutMe';
import profilePic from '../../public/scout.jpg';

const ColumnContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px 0;
`;

const ImageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-bottom: 30px;
`;

const ImageWrapper = styled('div')`
  position: relative;

  min-width: 300px;
  max-width: 400px;
  height: 500px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function HomeImageColumn({...rest}) {

    return (
        <>
            <ColumnContainer {...rest}>
                <ImageContainer>
                    <ImageWrapper>
                        <StyledImage
                            src={profilePic}
                            quality={100}
                            alt="Picture of Scout Anatricia"
                            layout="fill"
                            priority
                        />
                    </ImageWrapper>
                </ImageContainer>
                <HomeAboutMe />
            </ColumnContainer>
        </>
    );
}
