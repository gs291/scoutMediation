import Link from 'next/link';
import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';
import {AppBar, Toolbar, Typography, Link as MUILink} from '@mui/material';

import {getMobile} from '../../lib/redux/selectors';
import {globalOptions} from '../../lib/utils/emotionStyled';


const NavAppBar = styled(AppBar, globalOptions)`
  padding: ${props => props['data-m'] ? 1 : 2}em 0;
  margin-bottom: 2em;
  transition: 0.3s;
  
  background-color: ${props => props.theme.palette.background.paper}
`;

const NavToolbar = styled(Toolbar, globalOptions)`
  justify-content: center;
  gap: 0 ${props => props['data-m'] ? 20 : 40}px;
`;

const MLink = styled(MUILink)`
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.palette.primary.hover};
  }
`;

const NavText = styled(Typography)`
  text-align: center;
`;

const LinkComponent = ({href, title, mobile}) => (
    <Link href={href} passHref>
        <MLink underline="none">
            <NavText variant={mobile ? 'h5' : 'h3'}>
                {title}
            </NavText>
        </MLink>
    </Link>
);

export default function Navigation() {
    const mobile = useSelector(getMobile);

    return (
        <>
            <NavAppBar
                position="relative"
                component="div"
                data-m={mobile}
            >
                <NavToolbar data-m={mobile}>
                    <LinkComponent href="#about-me" title="About Me" mobile={mobile}/>
                    <LinkComponent href="#experience" title="Experience" mobile={mobile}/>
                    <LinkComponent href="#projects" title="Projects" mobile={mobile}/>
                </NavToolbar>
            </NavAppBar>
        </>
    );
}