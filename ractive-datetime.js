/*
 * Formats a date using the specified format.
 */
var fecha = require('fecha');

function datetime(date, format) {
  return fecha.format(date, format);
}

// Self-registering in Ractive:

var Ractive = require('ractive');
var helpers = Ractive.defaults.data;

helpers.datetime = datetime;

// Exporting for testing:

module.exports = {
  datetime: datetime
}