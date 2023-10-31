const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum:["AUS", "DFW", "DEN", "LAX", "SAN"]
  },
  arrival: Date
}, {
  timestamps: true
});

const ticketSchema = new Schema ({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, default: 200}
});

const flightSchema = new Schema({
  airline: String,
  airport: {type:String, enum:["AUS", "DFW", "DEN", "LAX", "SAN"], defult:"DEN"},
  flightNo: Number,
  departs: {type:Date, default:"1/1/1970"},
  destinations: [destinationSchema],
  tickets: [ticketSchema]
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);