import {Link as MUILink, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import PageCard from '../card/PageCard';
import Link from 'next/link';

const ContractWritingText = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
`;

const LegislatureLink = styled(MUILink)`
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.palette.primary.hover};
  }
`;


export default function ContractWritingPageText({...rest}) {

    return (
        <>
            <PageCard {...rest}>
                <ContractWritingText variant="h4" component="h2">
                    <Link
                        passHref
                        target="_blank"
                        rel="noopener"
                        href="https://legislature.idaho.gov/statutesrules/idstat/title9/t9ch5/sect9-505/"
                    >
                        <LegislatureLink underline="none">
                            https://legislature.idaho.gov/statutesrules/idstat/title9/t9ch5/sect9-505/
                        </LegislatureLink>
                    </Link>
                </ContractWritingText>
                <ContractWritingText variant="h4" component="p">
                    According to Idaho Legislature, a written and signed contract between two parties is enforceable in a court of law.
                    In order to avoid a fraudulent contract we consider mutual assent, adequate consideration, capacity and legality in agreement writing.
                    Both parties must perform all of the above considerations as well as participate in signing the contract agreement.
                </ContractWritingText>
                <ContractWritingText variant="h4" component="p">
                    For independent contractors and others seeking written contracts/agreements, please use the contact box for correspondence.
                    Scout Anatricia will respond within 1-3 days with a quote or further questions.
                </ContractWritingText>
            </PageCard>
        </>
    );
}