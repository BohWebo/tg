import App from './App';
import Main from './Main';

export default [
    {
        component: App,
        routes: [{
            component: Main,
            path: '/',
            exact: true
        }]
    }
];
