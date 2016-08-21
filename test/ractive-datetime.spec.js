'use strict';
let assert = require('assert');
let Ractive = require('ractive');

let helpers = require('../ractive-datetime.js');

describe('Ractive', () => {
  it('should self-register Ractive helpers', () => {
    assert(Ractive.defaults.data.datetime, 'datetime is not registered');
  });
});

describe('datetime', () => {
  it('should format dates correctly', () => {
    let date = new Date(2016,4,28);
    assert.equal(helpers.datetime(date, 'MMMM Do, YYYY'), 'May 28th, 2016');
    assert.equal(helpers.datetime(date, 'MM/DD/YY'), '05/28/16');
  });
  it('should format times correctly', () => {
    let date = new Date(2016,4,28);
    assert.equal(helpers.datetime(date, 'h:mm:ssA'), '12:00:00AM');
  });
});
