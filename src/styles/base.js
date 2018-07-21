import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

const baseStyles = injectGlobal`
    ${styledNormalize}

    body {
        font-family: 'Roboto', sans-serif;
    }
`

export { baseStyles }