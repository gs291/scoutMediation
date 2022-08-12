import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import DarkMode from "../dark-mode/DarkMode";
import {getMobile} from '../../lib/redux/selectors';
import {globalOptions} from '../../lib/utils/emotionStyled';
import SplashBackground from '../background/SplashBackground';


const IntroductionContainer = styled('header', globalOptions)`
  background-color: ${props => props.theme.palette.background.default};
  min-height: 82.5vh;
  position: relative;
`;

const DarkModeContainer = styled('div', globalOptions)`
  position: absolute;
  z-index: 0;
  bottom: 20px;
  right: ${props => props['data-m'] ? 10 : 30}vw;
`;

const TextContainer = styled('div', globalOptions)`
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  
  width: 100%;
  height: 100%;
  padding: 0 ${props => props['data-m'] ? 0 : '5%'};
  padding-top: 5rem;
  transition: 0.3s;
`;


export default function Introduction({className}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <IntroductionContainer className={className} data-m={mobile}>
                <SplashBackground />
                <TextContainer data-m={mobile}>
                    <Typography variant={mobile ? 'h2' : 'h1'} component="h1">
                        Hi!
                    </Typography>
                    <Typography variant={mobile ? 'h2' : 'h1'} component="h1">
                        I'm Gregory Sanchez!
                    </Typography>
                    <br />
                    <Typography variant={mobile ? 'h5' : 'h3'}>
                        A Full Stack Developer
                    </Typography>
                </TextContainer>
                <DarkModeContainer data-m={mobile}>
                    <DarkMode />
                </DarkModeContainer>
            </IntroductionContainer>
        </>
    );
}