import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export default function HomeBannerText({...rest}) {

    return (
        <>
            <TextContainer {...rest}>
                <Typography variant="h2" component="h1">
                    Scout
                </Typography>
                <Typography variant="h2" component="h1">
                    Anatricia
                </Typography>
                <Typography variant="h2" component="h1">
                    Mediation
                </Typography>
            </TextContainer>
        </>
    );
}