import {styled} from '@mui/material/styles';

import ContactBox from '../contact/ContactBox';
import ContractWritingPageText from './ContractWritingPageText';

const SpacedContractWritingPageText = styled(ContractWritingPageText)`
  margin-top: 2.5em;
`;

const SpacedContactBox = styled(ContactBox)`
  margin-top: 5em;
`;

export default function ContractWritingPage({}) {

    return (
        <>
            <SpacedContractWritingPageText />
            <SpacedContactBox messageLabel="Please describe the nature of your contract"/>
        </>
    );
}