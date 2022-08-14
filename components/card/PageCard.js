import {styled} from '@mui/material/styles';
import {Card, CardContent} from '@mui/material';

const StyledCard = styled(Card)`
  background-color: lightgreen;
  width: 100%;
`;

export default function PageCard({children, ...rest}) {

    return (
        <>
            <StyledCard
                raised
                {...rest}
            >
                <CardContent>
                    {children}
                </CardContent>
            </StyledCard>
        </>
    );
}
