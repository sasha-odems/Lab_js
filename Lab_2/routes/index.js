const fs = require('fs');
const queryString = require('querystring');
const path = require('path');
const homeView = require('../views/home');
const carView = require('../views/car');
const addCarView = require('../views/add-car');

const viewsPath = path.join(__dirname, '../views');

module.exports = {
    handleHome: function(res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(homeView.renderPage());
    },
    handleAddCar: function(req, res) {
        fs.readFile(path.join(viewsPath, 'add-car.js'), 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(addCarView.renderPage());
            }
        });
    },
    handleAddCarPost: function(req, res) {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = queryString.parse(body);
            const formDataJson = JSON.stringify(formData);
            fs.writeFile('formData.json', formDataJson, err => {
                if (err) {
                    console.error(err);
                    res.writeHead(500);
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(302, {'Location': '/car'});
                    res.end();
                }
            });
        });
    },
    handleCar: function(res) {
        fs.readFile('formData.json', 'utf8', (err, data) => {
            // formating data
            const formattedData = JSON.stringify(JSON.parse(data), null, 2);
            if (err) {
                console.error(err);
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(carView.renderPage(formattedData));
            }
        });
    },
    handlePageNotFound: function(res) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 Page Not Found');
    }
};
