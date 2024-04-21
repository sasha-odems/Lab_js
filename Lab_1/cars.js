const cars = [
    { id: 1, make: "Toyota", model: "Yaris", year: 2001, color: "white" },
    { id: 2, make: "Honda", model: "Civic", year: 2010, color: "black" },
    { id: 3, make: "Ford", model: "Focus", year: 2015, color: "blue" },
    { id: 4, make: "Chevrolet", model: "Cruze", year: 2018, color: "silver" },
    { id: 5, make: "BMW", model: "X5", year: 2020, color: "red" }
];

const carsModule = {
    getCars: function() {
        return cars;
    },
    getCarInformation: function(id) {
        const car = cars.find(car => car.id === id);
        if (car) {
            return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
        } else {
            return "Car doesn't exist";
        }
    },
    getCarAge: function(id) {
        const car = cars.find(car => car.id === id);
        if (car) {
            const currentYear = new Date().getFullYear();
            const carAge = currentYear - car.year;
            return `Car is ${carAge} years old.`;
        } else {
            return "Car doesn't exist";
        }
    }
};

module.exports = carsModule;
