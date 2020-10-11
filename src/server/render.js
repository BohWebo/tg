import React from 'react';
import {assetsByChunkName} from '../../dist/public/stats.json';
import {ServerStyleSheets} from '@material-ui/core/styles';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from '../routes';


const template =  (content, css) => `
<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <style id="jss-server-side">${css}</style>
        <title>TG</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/dist/public/${assetsByChunkName.main}"></script>
    </body>
</html>
`;

export const renderer = (path, store, context) => {
    const sheets = new ServerStyleSheets();

    const content = renderToString(
        <StaticRouter location={path} context={context}>
            {sheets.collect(renderRoutes(routes))}
        </StaticRouter>
    );

    const css = sheets.toString();

    return template(content, css);
};
