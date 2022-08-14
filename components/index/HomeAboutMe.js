import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import PageCard from '../card/PageCard';

const AboutMeText = styled(Typography)`
  margin-bottom: 30px;
`;

export default function HomeAboutMe({}) {

    return (
        <>
            <PageCard>
                <AboutMeText variant="body2">
                    Scout Anatricia is a certified mediator with a diverse background. She has worn the caps of a newspaper reporter, a special needs therapist, a conservation league member, a ghost writer and a BA. She finds a great deal of joy in helping people connect with themselves, each other and their communities.
                </AboutMeText>
                <AboutMeText variant="body2">
                    Since 2019 Scout has been a volunteer mediator for Ada County Courthouse and the Eviction Court Mediation Director & Coordinator at Canyon County Courthouse 2021-2022.
                </AboutMeText>
                <Typography variant="body2">
                    As a private mediator Scout plans to implement conflict resolution workshops into businesses and schools as well as to continue facilitating private party mediations.
                </Typography>
            </PageCard>
        </>
    );
}
