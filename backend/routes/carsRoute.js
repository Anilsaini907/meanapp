const express = require('express');
const app = express();
const carsRoute = express.Router();

// Car model
let Car = require('../models/Car');

// Add Car
carsRoute.route('/create').post((req, res, next) => {
    Car.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Car
carsRoute.route('/').get((req, res) => {
    Car.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Car
carsRoute.route('/read/:id').get((req, res) => {
    Car.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Car
carsRoute.route('/update/:id').put((req, res, next) => {
    Car.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Car
carsRoute.route('/delete/:id').delete((req, res, next) => {
    Car.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = carsRoute;