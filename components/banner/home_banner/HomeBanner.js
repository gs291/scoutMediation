import {styled} from '@mui/material/styles';

import HomeBannerText from './HomeBannerText';
import HomeBannerImages from './HomeBannerImages';

const HomeBannerContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  gap: 0 20px;
`;

export default function HomeBanner({}) {

    return (
        <>
            <HomeBannerContainer>
                <HomeBannerText />
                <HomeBannerImages />
            </HomeBannerContainer>
        </>
    );
}