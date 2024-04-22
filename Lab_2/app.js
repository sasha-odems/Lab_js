const http = require('http');
const routes = require('./routes');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    switch (req.url) {
        case '/':
            if (req.method === 'GET') {
                routes.handleHome(res);
            }
            break;
        case '/add-car':
            if (req.method === 'GET') {
                routes.handleAddCar(req, res);
            } else if (req.method === 'POST') {
                routes.handleAddCarPost(req, res);
            }
            break;
        case '/car':
            if (req.method === 'GET') {
                routes.handleCar(res);
            }
            break;
        default:
            routes.handlePageNotFound(res);
    }
});

server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}.`);
});
