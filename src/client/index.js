import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import routes from '../routes';

ReactDOM.hydrate(
    // <Provider store={store}>
    <BrowserRouter>
        {renderRoutes(routes)}
    </BrowserRouter>,
    // </Provider>,
    document.querySelector('#root')
);
