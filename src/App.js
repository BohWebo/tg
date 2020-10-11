import React from 'react';
import {renderRoutes} from 'react-router-config';

const App = ({route}) => {
    return renderRoutes(route.routes);
};
export default App;
