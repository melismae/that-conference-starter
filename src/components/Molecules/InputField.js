import React, { Fragment } from 'react';
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
                <FormFieldFeedback variant='warning'>{props.feedbackMessage}</FormFieldFeedback>
            }
        </FormGroup>
    )
}

InputField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    feedbackMessage: PropTypes.string,
    displaySuccess: PropTypes.bool
}

InputField.defaultProps = {
    label: '',
    placeholder: '',
    feedbackMessage: '',
    displaySuccess: false
}

export { InputField };