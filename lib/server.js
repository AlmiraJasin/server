import http from 'http';

const server = {};

server.httpServer = http.createServer((req, res) => {
    console.log('gavau uzklausa');

    const baseUrl = 'http://localhost:65535/';
    const parseUrl = new URL()
    const URL = req.url;
    const httpMethod = req.method.toLowerCase();

    console.log(httpMethod);

    let responseContent;

    switch (req.url) {
        case '/':
            responseContent
    }

    console.log(req.url);

    res.end('Serverio atsakymas');
});

server.init = () => {
    console.log('pasileidzia');
    server.httpServer.listen(65535);
}

export default server;