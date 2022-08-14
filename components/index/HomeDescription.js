import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import PageCard from '../card/PageCard';

const DescriptionContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;

const DescriptionText = styled(Typography)`
  margin-bottom: 30px;
`;


export default function HomeDescription({...rest}) {

    return (
        <>
            <DescriptionContainer {...rest}>
                <PageCard>
                    <Typography variant="h3" component="h2" align="center" fontWeight="700" sx={{ marginBottom: '40px'}}>
                        Welcome to Scout Anatricia Mediation
                    </Typography>
                    <Typography variant="h4" component="h3" align="center">

                        Here you will find Mediation, Alternative Dispute Resolution, Contract Writing and options for workplace and education workshops.
                    </Typography>
                </PageCard>
                <PageCard>
                    <DescriptionText variant="h6" component="p">
                        From conflict management workshops to private party mediation, this is a place of communication and resolution.
                        You are here because you have decided to take a creative approach to solving your problem and I commend you for that.
                    </DescriptionText>
                    <DescriptionText variant="h6" component="p">
                        Choosing mediation over other possible avenues of resolving your dispute means that you value relationships and have a desire to create the best possible outcome for yourself and your constituents.
                    </DescriptionText>
                    <DescriptionText variant="h6" component="p">
                        Mediation is unique in that it can be as creative as the participating parties choose to make it.
                        It is never an all-or-nothing negotiation.
                        What you get out of your session will be equivalent and representative to what you choose to put into it.
                    </DescriptionText>
                    <DescriptionText variant="h6" component="p">
                        The mediator’s role is to provide a safe and neutral environment and a platform on which all involved parties are free to give background, storytell, express themselves and successfully reach a mutually acceptable agreement.
                    </DescriptionText>
                    <Typography variant="h6" component="p">
                        The ultimate goal of mediation is not to win or lose but rather to communicate and collaborate.
                    </Typography>
                </PageCard>
            </DescriptionContainer>
        </>
    );
}
