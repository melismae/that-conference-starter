import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors, inputStyles } from '../../styles/theme';

import {IconSuccess} from './Icons';

const inputBorder = inputStyles.borderColor;
const inputBackground = inputStyles.background;

const Input = styled.input`
    display: flex;
    flex-basis: 100%;
    font-size: ${inputStyles.fontSize};
    padding: 14px 10px;
    border-radius: 3px;
    background: ${props => inputBackground[props.variant]};
    border: 1px solid ${props => inputBorder[props.variant]};
    color: ${inputStyles.fontColor};
    
    &:placeholder {
        color: ${inputStyles.placeholder};
    }

    &:focus {
        border-color: ${inputBorder.focused};
        outline: 0;
    }
`;

Input.propTypes = {
    variant: PropTypes.string
}

Input.defaultProps = {
    variant: 'default'
}

export { Input };
