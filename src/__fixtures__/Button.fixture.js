import { Button } from '../components/Molecules/Button';

export default [
    {
        component: Button,
        name: 'Default',
        children: 'Click me!'
    },
    {
        component: Button,
        name: 'Secondary',
        children: 'Click me!',
        props: {
            variant: 'secondary'
        }
    },
    {
        component: Button,
        name: 'Warning',
        children: 'Click me!',
        props: {
            variant: 'warning'
        }
    },
    {
        component: Button,
        name: 'Disabled',
        children: 'Click me!',
        props: {
            variant: 'disabled'
        }
    },
    {
        component: Button,
        name: 'Rounded',
        children: 'Click me!',
        props: {
            rounded: 'true'
        }
    }
];
