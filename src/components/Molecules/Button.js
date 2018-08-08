import PropTypes from 'prop-types'; 
import React, { Fragment, PureComponent } from 'react'
import styled from 'styled-components';

import { buttonStyles, textSizes, textWeights } from '../../styles/theme';

const StyledButton = styled.button`
    background-color: ${props => buttonStyles.background[props.variant]};
    color: ${props => buttonStyles.fontColor[props.variant]};
    border-radius: ${props => props.rounded ? '25px' : '3px'};
    font-size: ${textSizes.button};
    font-weight: ${textWeights.button};
    padding: 15px;
    min-width: 140px;
    border-color: 
    
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${props => buttonStyles.hoverFontColor[props.variant]};
    }
`

class Button extends PureComponent {
    static propTypes = {
        /* One of default, secondary, warning, or disabled */
        variant: PropTypes.string,
        /* Boolean to determine whether button should be rounded */
        rounded: PropTypes.bool
    }

    render() {
        return (
        <Fragment>
            <StyledButton {...this.props} />
        </Fragment>
        )
    }
}

Button.defaultProps = {
    variant: 'default',
    rounded: false
}

/** @component */
export default Button;
