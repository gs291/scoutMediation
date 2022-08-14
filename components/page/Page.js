import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Global, css} from '@emotion/react';
import {styled} from '@mui/material/styles';
import {useMediaQuery, useTheme} from '@mui/material';

import Header from './Header';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import {updateMobile} from '../../lib/redux/actions';
import {ga4SendPageView} from '../../lib/utils/ga4';


const PageContainer = styled('div')`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Foot = styled(Footer)`
  justify-content: center;
  align-items: center;
  transition: 0.3s;
`;

const Main = styled('main')`
  flex: 1;
  background-color: ${props => props.theme.palette.background.default};
  padding-bottom: 30px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
`;

const Intro = styled('div')`
  transition: 0.3s;
`;

export default function Page(props) {
    const theme = useTheme();

    const dispatch = useDispatch();

    const screen = useMediaQuery('(max-width: 960px)');

    useEffect(() => {
        dispatch(updateMobile(screen));
    }, [screen]);

    useEffect(() => {
        ga4SendPageView();
    }, []);

    const globals = css`
      ::-webkit-scrollbar {
        width: 10px;
        background: ${theme.palette.background.default};
      }
    
      ::-webkit-scrollbar-track {
        background-color: ${theme.palette.background.default};
        border-radius: 20px;
      }
    
      ::-webkit-scrollbar-thumb {
        background-color: ${theme.palette.primary.main};
        border-radius: 20px;
      }
    
      ::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.palette.scrollbar.hover};
      }
    `;

    return (
        <>
            <Global styles={globals} />
            <Header />
            <PageContainer>
                <Navigation />
                <Main>
                    {props.children}
                </Main>
                <Foot />
            </PageContainer>
        </>
    );
}