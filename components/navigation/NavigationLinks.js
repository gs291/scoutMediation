import Link from 'next/link';
import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';
import {Typography, Link as MUILink, Toolbar} from '@mui/material';

import {getMobile} from '../../lib/redux/selectors';
import {globalOptions} from '../../lib/utils/emotionStyled';

const NavToolbar = styled(Toolbar, globalOptions)`
  background-color: ${props => props.theme.palette.toolbar.primary};
  justify-content: center;
  gap: 0 ${props => props['data-m'] ? 20 : 40}px;
  
  z-index: 1;
  position: sticky;
  top: 0;
`;

const MLink = styled(MUILink)`
  color: ${props => props.theme.palette.textOpposite.primary};
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

export default function NavigationLinks({}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <NavToolbar data-m={mobile}>
                <LinkComponent href="/mediation" title="Mediation" mobile={mobile}/>
                <LinkComponent href="/contract-writing" title="Contract Writing" mobile={mobile}/>
                <LinkComponent href="/contact" title="Contact" mobile={mobile}/>
            </NavToolbar>
        </>
    );
}
