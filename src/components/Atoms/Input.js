import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inputStyles } from '../../styles/theme';

const inputBorder = inputStyles.borderColor;
const inputBackground = inputStyles.background;

const Input = styled.input`
    display: flex;
    flex-basis: 100%;
    font-size: ${inputStyles.fontSize};
    padding: 14px 10px;
    border-radius: 3px;
    background: ${props => inputBackground[props.variant]};
    border: ${props => `1px solid ${inputBorder[props.variant]}`};
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
