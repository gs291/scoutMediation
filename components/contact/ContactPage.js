import {styled} from '@mui/material/styles';

import ContactBox from './ContactBox';

const SpacedContactBox = styled(ContactBox)`
  margin-top: 2.5em;
`;

export default function ContactPage({}) {

    return (
        <>
            <SpacedContactBox includeTitle={false} messageLabel="Message"/>
        </>
    );
}