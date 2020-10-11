import http from 'http';

import router from './router';
import '@babel/polyfill';

http
    .createServer(router)
    .listen(3001, () => {
        console.log('Server started on https://localhost:3001');
    });

