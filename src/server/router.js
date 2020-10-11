import path from 'path';
import {STATIC_PATH} from './constants';
import {MIME_TYPES} from './mime-types';
import {serveFile} from './serve';
import {renderer} from './render';

const returnStaticFiles = (req, res) => {
    const [name] = req.url
        .split('/')
        .slice(-1);

    const fileExt = path.extname(name).substring(1);
    res.writeHead(200, {
        'Content-Type': MIME_TYPES[fileExt]
    });

    const stream = serveFile(name);

    if (stream) stream.pipe(res);
};

const returnReactComponent = (req, res) => {
    const context = {};
    const content = renderer(req.url, {}, context);

    if (context.notFound) {
        res.writeHead(404);
        res.end();
    }

    res.write(content);
    res.end();
};

export default (req, res) => {
    if (req.url.startsWith(STATIC_PATH)) {
        returnStaticFiles(req, res);
    } else {
        returnReactComponent(req, res);
    }
}
