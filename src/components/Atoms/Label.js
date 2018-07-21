import styled from 'styled-components';

import { textColors, textWeights, textSizes } from '../../styles/theme';

const Label = styled.label`
    margin-bottom: 8px;
    font-size: ${textSizes.label};
    color: ${textColors.medium};
`;

export { Label };
