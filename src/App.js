import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTimesCircle, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { baseStyles } from './styles/base';
import { InputField } from './components/Molecules/InputField';
import { ContainerWrapper } from './components/Atoms/Layout';
import Button from './components/Molecules/Button';

baseStyles;
library.add(faCheckCircle, faTimesCircle, faExclamationTriangle, faInfoCircle);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerWrapper>   
          <Row>
              <Col xs={4}>
                <InputField placeholder="Text placeholder" displaySuccess/>
                <InputField label="Test Label" feedbackMessage="My error" feedbackType="error"/>
                <Button>Button</Button>
                <Button rounded>Button</Button>
                <Button variant="secondary" rounded>Button</Button>
              </Col>
          </Row>          
        </ContainerWrapper>
      </div>
    );
  }
}

export default App;
