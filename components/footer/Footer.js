import {styled} from '@mui/material/styles';


const FooterContainer = styled('footer')`
  display: flex;
  flex-direction: row;
  gap: 0 20px;
  height: 100px;
`;

export default function Footer({ className }) {

    return (
        <FooterContainer className={className}>

        </FooterContainer>
    );
}