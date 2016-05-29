/*
 * Formats a date using the specified format.
 */
var moment = require('moment');

function datetime(date, format) {
  return moment(date).format(format);
}

function fromNow(date) {
  return moment(date).fromNow();
}

// Self-registering in Ractive:

var Ractive = require('ractive');
var helpers = Ractive.defaults.data;

helpers.datetime = datetime;
helpers.fromNow = fromNow;

// Exporting for testing:

module.exports = {
  datetime: datetime,
  fromNow: fromNow
}