import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { textSizes, functionalColors, colors } from '../../styles/theme'
import { IconWarning, IconError, IconSuccess } from '../Atoms/Icons'

const FormFieldFeedbackWrapper = styled.div`
    display: flex;
    flex-basis: 100%;
    font-size: ${textSizes.label};
    padding: 10px 20px;
    border-radius: 3px;
    background: ${colors.white};
    border: 0px;
    color: ${props => functionalColors[props.variant]};
    box-shadow: 0px 5px 5px 0px rgba(236,236,236,1);

    ${IconWarning}, ${IconSuccess} {
        margin-right: 15px;
    } 
`;

const FormFieldFeedback = props => {
    return (<FormFieldFeedbackWrapper variant={props.variant}>
        {props.variant && (
            props.variant === 'warning' && <IconWarning />
            || props.variant === 'error' && <IconError />
        )}
        {props.children}
    </FormFieldFeedbackWrapper>
    )
}

FormFieldFeedback.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

FormFieldFeedback.defaultProps = {
    variant: '',
    children: null
}

export { FormFieldFeedback };
