import bmw from "../assets/bmw.jpg";
import audi from "../assets/audi.jpg";
import tesla from "../assets/tesla.jpg";
import mercedes from "../assets/mercedes.jpg";
import range from "../assets/range.jpg";
import porsche from "../assets/porsche.jpg";

export const cars = [
  {
    id: 1,
    name: "BMW M4",
    price: 12000,
    fuel: "Petrol",
    type: "Sports",
    mileage: "10 km/l",
    transmission: "Automatic",
    seats: 4,
    image: bmw
  },
  {
    id: 2,
    name: "Audi A6",
    price: 10000,
    fuel: "Diesel",
    type: "Sedan",
    mileage: "14 km/l",
    transmission: "Automatic",
    seats: 5,
    image: audi
  },
  {
    id: 3,
    name: "Tesla Model S",
    price: 15000,
    fuel: "Electric",
    type: "Luxury",
    mileage: "500 km/charge",
    transmission: "Automatic",
    seats: 5,
    image: tesla
  },
  {
    id: 4,
    name: "Mercedes C-Class",
    price: 11000,
    fuel: "Petrol",
    type: "Luxury",
    mileage: "12 km/l",
    transmission: "Automatic",
    seats: 5,
    image: mercedes
  },
  {
    id: 5,
    name: "Range Rover",
    price: 18000,
    fuel: "Diesel",
    type: "SUV",
    mileage: "9 km/l",
    transmission: "Automatic",
    seats: 7,
    image: range
  },
  {
    id: 6,
    name: "Porsche 911",
    price: 25000,
    fuel: "Petrol",
    type: "Sports",
    mileage: "8 km/l",
    transmission: "Automatic",
    seats: 2,
    image: porsche
  }
];