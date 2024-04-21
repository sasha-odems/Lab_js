const http = require('http');
const htmlGenerator = require('./htmlGenerator');
const carsModule = require('./cars');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const carsData = carsModule.getCars();
    const numData = 2;
    console.log(carsData);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(htmlGenerator.getHTMLDocumentStart());
    res.write('<body>');

    const carInfo = carsModule.getCarInformation(numData);
    res.write(`<p>${carInfo}</p>`);

    const carAge = carsModule.getCarAge(numData);
    res.write(`<p>${carAge}</p>`);

    res.write('</body>');
    res.write(htmlGenerator.getHTMLDocumentEnd());
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.\nUse localhost:${PORT}`);
});
