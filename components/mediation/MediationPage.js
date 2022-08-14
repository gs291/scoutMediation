import {styled} from '@mui/material/styles';

import ContactBox from '../contact/ContactBox';
import MediationPageText from './MediationPageText';

const SpacedMediationPageText = styled(MediationPageText)`
  margin-top: 2.5em;
`;

const SpacedContactBox = styled(ContactBox)`
  margin-top: 5em;
`;

export default function MediationPage({}) {

    return (
        <>
            <SpacedMediationPageText />
            <SpacedContactBox messageLabel="Please describe the nature of your case" />
        </>
    );
}