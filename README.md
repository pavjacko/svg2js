# svg2js #

Handy utility to convert SVG images to inline Javascript


## Installation

`npm install --save svg2js`

## Usage

Svg2Js API is Promise based

#### Usage 1 (Save to file as Javascript Module):

```js
import Svg2Js from 'svg2js'

Svg2Js.create({
  source: '/Users/userX/myImage.svg',
  destination: '/Users/userX/myImage.js'
}).then(() => console.log('SUCCESS!'))

```

after conversion JS SVG can be used as regular JS module

```js
var MySvgImage = require('../../../../selectorAssets/runtime/icons/myImage.js')

//USE MySvgImage as inline value for rendering in various tools/libs

```

#### Usage 2 (Get inline value):

```js
import Svg2Js from 'svg2js'

Svg2Js.convert({
  source: '/Users/userX/myImage.svg'
}).then((result) => console.log('SUCCESS!', result))

```



## Contributing ##

Basicaly clone, change, test, push and pull request.

## License ##

icon-toolkit is licensed under the MIT license.
