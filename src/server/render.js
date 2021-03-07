import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {assetsByChunkName} from '../../dist/public/stats.json';
import {renderRoutes} from 'react-router-config';
import routes from '../routes';
import {STATIC_PATH} from "./constants";


const template =  (content) => `
<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="${STATIC_PATH}/styles/main.css"/>
        <link rel="manifest" href="${STATIC_PATH}/manifest.json">
        <title>TG</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="${STATIC_PATH}/${assetsByChunkName.main}"></script>
    </body>
</html>
`;

export const renderer = (path, store, context) => {
    const content = renderToString(
        <StaticRouter location={path} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    );


    return template(content);
};
