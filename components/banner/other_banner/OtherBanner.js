import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';


const OtherBannerContainer = styled('div')`
  height: 200px;
  background-color: seagreen;
  
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CenteredCircle = styled('div')`
  width: 25%;
  height: 150%;
  border-radius: 50%;
  background-color: darkseagreen;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function OtherBanner({}) {
    const router = useRouter();
    const [path, setPath] = useState('');

    useEffect(() => {
        switch(router.pathname) {
            case '/mediation':
                setPath('Mediation');
                break;
            case '/contract-writing':
                setPath('Contract Writing');
                break;
            case '/contact':
                setPath('Contact');
                break;
            default:
                setPath('404');
                break;
        }
    }, [router.pathname])


    return (
        <>
            <OtherBannerContainer>
                <CenteredCircle>
                    <Typography variant="h2" component="h1" textAlign="center" marginBottom="10px">
                        {path}
                    </Typography>
                </CenteredCircle>
            </OtherBannerContainer>
        </>
    );
}