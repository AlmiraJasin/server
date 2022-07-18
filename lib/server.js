import http from 'http';

const server = {};

server.httpServer = http.createServer((req, res) => {
    console.log('gavau uzklausa');

    res.end('Serverio atsakymas');
});

server.init = () => {
    console.log('pasileidzia');
    server.httpServer.listen(65535);
}

export default server;