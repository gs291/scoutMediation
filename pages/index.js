import {useState} from 'react';
import {Container} from '@mui/material';
import {styled} from '@mui/material/styles';

import AboutMe from '../components/index/AboutMe';
import Projects from '../components/project/Projects';
import Navigation from '../components/page/Navigation';
import TitleDivider from '../components/title/TitleDivider';
import Experiences from '../components/experience/Experiences';
import ContactMeModal from '../components/modal/ContactMeModal';


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
            <Navigation />
            <Container maxWidth="lg">
                <IndexContainer>
                    <TitleDivider title="About Me" id="about-me" />
                    <AboutMe setOpenModal={setOpenModal}/>
                </IndexContainer>
                <IndexContainer>
                    <TitleDivider title="Experience" id="experience" />
                    <Experiences />
                </IndexContainer>
                <IndexContainer>
                    <TitleDivider title="Projects" id="projects" />
                    <Projects />
                </IndexContainer>
            </Container>
            <ContactMeModal open={openModal} setOpen={setOpenModal} />
        </>
    )
}
