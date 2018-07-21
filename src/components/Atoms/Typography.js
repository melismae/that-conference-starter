import styled from 'styled-components';

import { textColors, textSizes, textWeight } from '../../styles/theme';

const H1 = styled.h1`
    font-weight: ${textWeight.h1};
    font-size: ${textSizes.h1};
    color: ${textColors.dark};
`;

const H2 = styled.h2`
    font-weight: ${textWeight.h2};
    font-size: ${textSizes.h2};
    color: ${textColors.dark};
`;

const H3 = styled.h3`
    font-weight: ${textWeight.h3};
    font-size: ${textSizes.h3};
    color: ${textColors.dark};
`;

const H4 = styled.h4`
    font-weight: ${textWeight.h4};
    font-size: ${textSizes.h4};
    color: ${textColors.medium};
`;

const Paragraph = styled.p`
    font-weight: ${textWeight.p};
    font-size: ${textSizes.p};
    color: ${textColors.medium};
`

export { H1, H2, H3, H4, Paragraph };
