const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');

// Массив машин и переменная для хранения следующего id
const cars = [];
let nextId = 1;

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../views/car.html'));
// });
router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../views/car.html'), 'utf8', (err, html) => {
    if (err) {
      console.error('Error reading cars-list.html:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const $ = cheerio.load(html);

    if (cars.length === 0) {
      $('.cars').html('<p>No cars has been found.</p>');
    } else {
      const carList = $('<ul></ul>');
      // Добавляем информацию о последней машине в начало списка
      const lastCar = cars[cars.length - 1];
      const lastCarItem = $('<li></li>');
      lastCarItem.append(`<p><span class="bold">Make:</span> ${lastCar.make}</p>`);
      lastCarItem.append(`<p><span class="bold">Model:</span> ${lastCar.model}</p>`);
      lastCarItem.append(`<p><span class="bold">Year:</span> ${lastCar.year}</p>`);
      lastCarItem.append(`<p><span class="bold">Color:</span> ${lastCar.color}</p>`);
      carList.prepend(lastCarItem); // Вставляем информацию о последней машине в начало списка

      $('.car').html('<h2>Last added car</h2>');
      $('.car').append(carList);
    }

    res.send($.html());
  });
});

router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/add-car.html'));
});

router.get('/list', (req, res) => {
  fs.readFile(path.join(__dirname, '../views/cars-list.html'), 'utf8', (err, html) => {
    if (err) {
      console.error('Error reading cars-list.html:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const $ = cheerio.load(html);

    if (cars.length === 0) {
      $('.cars').html('<p>No cars has been found.</p>');
    } else {
      const carList = $('<ul></ul>');
      cars.forEach(car => {
        const carItem = $('<li></li>');
        carItem.append(`<p><span class="bold">Make:</span> ${car.make}</p>`);
        carItem.append(`<p><span class="bold">Model:</span> ${car.model}</p>`);
        carItem.append(`<p><span class="bold">Year:</span> ${car.year}</p>`);
        carItem.append(`<p><span class="bold">Color:</span> ${car.color}</p>`);
        carList.append(carItem);
      });
      $('.cars').html('<h2>Cars</h2>');
      $('.cars').append(carList);
    }

    res.send($.html());
  });
});

router.post('/add', (req, res) => {
  const newCar = {
    id: nextId++,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color
  };
  cars.push(newCar);
  res.redirect('/car');
});



module.exports = router;