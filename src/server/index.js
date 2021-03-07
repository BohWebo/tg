import http from 'http';
import router from './router';

http
    .createServer(router)
    .listen(3001, () => {
        console.log('Server started on https://localhost:3001');
    });

