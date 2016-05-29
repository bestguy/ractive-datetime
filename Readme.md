# Ractive Date/Time helper

A date and time format mustache helper for [Ractive](http://www.ractivejs.org/), 
using [Moment.js](http://momentjs.com/)

----

## Usage

_Note: this helper is a self-registering CommonJS module, and in the browser 
requires a module system such as Webpack or Browserify._

    npm install ractive-datetime

### ES5:

```js
var Ractive = require('ractive');
require('ractive-date-time');
```

### ES6/2015+:

```js
import Ractive from 'ractive';
import 'ractive-date-time';
```

### In Ractive template:

    <h2>{{datetime(some_date, 'MMMM Do, YYYY')}}</h2>
    <h3>{{datetime(some_date, 'H:mmA')}}</h3>

#### Outputs:

May 28th, 2016

9:15AM

Full format options are [here](http://momentjs.com/docs/#/displaying/format/).

----

### Relative dates:

    <h2>{{fromNow(some_past_date)}}</h2>

#### Outputs:

7 months ago