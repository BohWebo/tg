import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import '@babel/polyfill';

import routes from '../routes';
import {renderRoutes} from 'react-router-config';

ReactDOM.hydrate(
    // <Provider store={store}>
    <BrowserRouter>
        <CssBaseline>
            {renderRoutes(routes)}
        </CssBaseline>
    </BrowserRouter>,
    // </Provider>,
    document.querySelector('#root')
);
