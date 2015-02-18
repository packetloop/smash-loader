# smash-loader
Webpack loader for Smash (https://github.com/mbostock/smash)

## Usage

```
let d3_interpolate = require('exports?d3!imports?d3=>{}!smash!../../node_modules/d3/src/interpolate');
```

## Loading multiple files and utilizing Smash's code dedupe feature

Create custom `d3_custom.js` file:

```
import '../node_modules/d3/src/core/'
import '../node_modules/d3/src/color/'
import '../node_modules/d3/src/interpolate/'
```

Then import it as usual:

```
let d3_custom = require('exports?d3!imports?d3=>{}!smash!./d3_custom');
```

To avoid using `exports` and `import` loaders and type only `require('smash!./d3_custom')`,
modify content of `d3_custom.js` to:

```javascript
var d3 = {};
import '../node_modules/d3/src/core/'
import '../node_modules/d3/src/color/'
import '../node_modules/d3/src/interpolate/'
module.exports = d3;
```


## Development and Test

```
git clone git@github.com:packetloop/smash-loader.git smash-loader
cd smash-loader
npm install
npm test
```
