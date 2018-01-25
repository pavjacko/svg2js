# svg2js #

Handy utility to convert SVG images to inline Javascript


## Installation

`npm install --save svg2js`

## Usage

Svg2Js API is Promise based

#### Usage 1 (Save to file):

```js
import Svg2Js from 'svg2js'

Svg2Js.create({
  source: '/Users/userX/myImage.svg'),
  destination: '/Users/userX/myImage.js')
}).then(() => console.log('SUCCESS!'))

```

#### Usage 2 (Get inline value):

```js
import Svg2Js from 'svg2js'

Svg2Js.convert({
  source: '/Users/userX/myImage.svg')
}).then((result) => console.log('SUCCESS!', result))

```



## Contributing ##

Basicaly clone, change, test, push and pull request.

## License ##

icon-toolkit is licensed under the MIT license.
