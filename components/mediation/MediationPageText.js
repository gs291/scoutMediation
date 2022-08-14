import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import PageCard from '../card/PageCard';

const MediationText = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
`;


export default function MediationPageText({...rest}) {

    return (
        <>
            <PageCard {...rest}>
                <MediationText variant="h3" component="h2">
                    Your mediation with Scout Anatricia is just a consultation away.
                </MediationText>
                <MediationText variant="h5" component="p">
                    Please submit a consultation request in the contact box and Scout will get back to you within 2-4 business days.
                </MediationText>
                <MediationText variant="h5" component="p">
                    Pricing is available upon consultation.
                    For lower income individuals and families, please use the contact box and a sliding scale evaluation will be used upon consultation.
                </MediationText>
                <MediationText variant="h5" component="p">
                    Thank you for choosing Your Justice, Your Way at Scout Anatricia Mediation.
                    The future of your conflict is in your hands.
                </MediationText>
                <MediationText variant="h5" component="p">
                    Homework: Begin brainstorming outcomes that you might like to reach in your mediation session.
                    Keep in mind that you are here to collaborate, thus the ultimate outcome will modify.
                </MediationText>
            </PageCard>
        </>
    );
}