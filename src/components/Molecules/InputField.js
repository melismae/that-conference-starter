import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input } from '../Atoms/Input';
import { Label } from '../Atoms/Label';
import { FormGroup } from '../Atoms/FormGroup';
import { IconSuccess } from '../Atoms/Icons';
import  { FormFieldFeedback } from './FormFieldFeedback';

const InputWrapper = styled.div`
    display: flex;
    position: relative;

    ${IconSuccess} {
        position: absolute;
        right: 10px;
        top: 16px;
    }
`

const InputField = props => {
    return (
        <FormGroup>
            {props.label  && <Label>{props.label}</Label>}
            <InputWrapper>
                <Input placeholder={props.placeholder} />
                {props.displaySuccess && <IconSuccess />}
            </InputWrapper>
            {props.feedbackMessage && 
                <FormFieldFeedback variant={props.feedbackType}>{props.feedbackMessage}</FormFieldFeedback>
            }
        </FormGroup>
    )
}

InputField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    feedbackMessage: PropTypes.string,
    displaySuccess: PropTypes.bool,
    feedbackType: PropTypes.string
}

InputField.defaultProps = {
    /* Label field. If not passed in, no label field appears. */
    label: '',
    /* input field placeholder */
    placeholder: '',
    /* Useful for things like error messages */
    feedbackMessage: '',
    /* If true, will show a check mark in the input field */
    displaySuccess: false,
    feedbackType: ''
}

InputField.displayName = 'InputField'

/** @component */
export { InputField };