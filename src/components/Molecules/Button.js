import PropTypes from 'prop-types'; 
import styled from 'styled-components';

import { buttonStyles, textSizes, textWeights } from '../../styles/theme';

const Button = styled.button`
    background-color: ${props => buttonStyles.background[props.variant]};
    color: ${props => buttonStyles.fontColor[props.variant]};
    border-radius: ${props => props.rounded ? '25px' : '3px'};
    font-size: ${textSizes.button};
    font-weight: ${textWeights.button};
    padding: 15px;
    min-width: 140px;
    
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${props => buttonStyles.hoverFontColor[props.variant]};
    }
`

Button.propTypes = {
    variant: PropTypes.string,
    rounded: PropTypes.bool
}

Button.defaultProps = {
    variant: 'default',
    rounded: false
}

Button.displayName = 'Button'

export { Button };