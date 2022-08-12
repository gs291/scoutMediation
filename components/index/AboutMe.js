import Image from 'next/image';
import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import Card from "../card/Card";
import PDF from '../icon-links/PDF';
import GitHub from '../icon-links/GitHub';
import Twitter from '../icon-links/Twitter';
import LinkedIn from '../icon-links/LinkedIn';
import Polywork from '../icon-links/Polywork';
import Instagram from '../icon-links/Instagram';
import profilePic from '../../public/about.jpeg';
import {getMobile} from '../../lib/redux/selectors';
import ContactMeButton from '../button/ContactMeButton';


const ImageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-bottom: 30px;
`;

const ImageWrapper = styled('div')`
  position: relative;

  width: 300px;
  height: 300px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;

const Title = styled(Typography)`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Text = styled(Typography)`
  font-size: 1.25em;
  margin-bottom: 20px;
`;

const EducationText = styled(Typography)`
  margin-top: 10px;
  font-size: 1.15em;
`;

const SocialsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 20px;
  justify-content: center;
  align-items: end;
`;

const PDFContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PDFText = styled(Typography)`
  font-size: 1rem;
`;

export default function AboutMe({setOpenModal}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <Card>
                <ImageContainer>
                    <ImageWrapper>
                        <StyledImage
                            src={profilePic}
                            quality={100}
                            alt="Picture of Gregory Sanchez"
                            layout="fill"
                            priority
                        />
                    </ImageWrapper>
                </ImageContainer>
                <Text variant="body1">
                    I'm a full stack developer with 7 years of Computer Science experience!
                    I've worked and developed in all areas of Computer Science including program, web, Android and hardware development.
                </Text>
                <Text variant="body1">
                    Early in my life I had constant exposure to computers, and I have since been amazed at their potential.
                    I understood the possibilities that could come from technology, and I knew that I could be a creator of a possibility.
                    Being intrigued with new advancements in the world paved the way for wanting to work in Computer Science.
                </Text>
                <Text variant="body1">
                    I am a hard worker; I will complete a given task the most efficient and best way possible.
                    Also, I am confident in my ability to try new things and succeed.
                    This is because of my leadership skills and knowledge I have acquired while attending Oregon State University.
                </Text>

                <Title variant={mobile ? 'h6' : 'h5'}>
                    Education
                </Title>
                <ul>
                    <li>
                        <EducationText variant="body1">
                            B.S. Computer Science, Oregon State University (2016-2020)
                        </EducationText>
                        <EducationText variant="body1">
                            Cumulative GPA: 3.85
                        </EducationText>
                        <EducationText variant="body1">
                            Honors: Summa Cum Laude
                        </EducationText>
                    </li>
                </ul>
                <ContactMeButton setOpenModal={setOpenModal}/>
                <SocialsContainer>
                    <Twitter href="https://twitter.com/GS_291" />
                    <Instagram href="https://www.instagram.com/gregory_sanchez/" />
                    <LinkedIn href="https://www.linkedin.com/in/gs291" />
                    <GitHub href="https://github.com/gs291" />
                    <Polywork href="https://poly.work/sanchegr" />
                    <PDFContainer>
                        <PDFText variant="h6">
                            Resume
                        </PDFText>
                        <PDF href="gregory_sanchez_website_resume.pdf" />
                    </PDFContainer>
                </SocialsContainer>
            </Card>
        </>
    );
}