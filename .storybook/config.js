import { configure } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTimesCircle, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTimesCircle, faExclamationTriangle, faInfoCircle);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
