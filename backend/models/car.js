const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Car = new Schema({
   name: {
      type: String
   },
   model: {
      type: String
   },
   modelyear: {
      type: String
   }
}, {
   collection: 'cars'
})

module.exports = mongoose.model('Car', Car)