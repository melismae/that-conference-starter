import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../components/Molecules/Button'
import { InputField } from '../components/Molecules/InputField'

const fontReset = {
  fontFamily: 'Roboto'
};

const Body = (storyFn) => (
  <div style={fontReset}>
    {storyFn()}
  </div>
)

storiesOf('Button', module)
  .add(
    'with text', 
    withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `)
    (() => <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('rounded', () => <Button rounded onClick={action('clicked')}>Hello Button</Button>);

storiesOf('InputField', module)
  .addDecorator(Body)
  .add('basic', () => <InputField label='Name' placeholder='Wallace Doggo' />)
  .add('with user feedback', () => 
    <InputField 
      label='Name' 
      placeholder='Wallace Doggo' 
      feedbackMessage='Password  must be at least 8 characters'
      feedbackType='warning'
      />
    )
  .add('success', () => 
    <InputField 
      label='Name' 
      placeholder='Wallace Doggo' 
      displaySuccess
      />
    );