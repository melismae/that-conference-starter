import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors } from '../../styles/theme';

const Icon = styled(FontAwesomeIcon)``;

const IconSuccess = Icon.extend.attrs({ icon: 'check-circle' })`
    color: ${colors.green};
`;

const IconError = Icon.extend.attrs({ icon: 'times-circle'})`
    color: ${colors.red};
`;

const IconWarning = Icon.extend.attrs({ icon: 'exclamation-triangle'})`
    color: ${colors.orange};
`;

export { Icon, IconSuccess, IconError, IconWarning };
