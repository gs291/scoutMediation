import {styled} from '@mui/material/styles';
import {Card, CardContent} from '@mui/material';

const StyledCard = styled(Card)`
  width: 100%;
  border-radius: 0;
`;

const Square = styled('div')`
  width: 100%;
  border-top: 15px solid ${props => props.theme.palette.background.diamond.top};
  border-left: 15px solid ${props => props.theme.palette.background.diamond.side};
  border-right: 15px solid ${props => props.theme.palette.background.diamond.side};
  border-bottom: 15px solid ${props => props.theme.palette.background.diamond.bottom};
`;

export default function PageCard({children, ...rest}) {

    return (
        <>
            <Square
                {...rest}
            >
                <StyledCard
                    raised
                >
                    <CardContent>
                        {children}
                    </CardContent>
                </StyledCard>
            </Square>

        </>
    );
}
