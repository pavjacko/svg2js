'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Svg2Js = function Svg2Js() {
  //console.log('Svg2JS 🔧 ')

  _classCallCheck(this, Svg2Js);

  this.create = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      var data = _fs2.default.readFileSync(opts.source);

      _fs2.default.writeFile(opts.destination, 'module.exports = `' + data.toString() + '`\n', function (err) {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  };

  this.convert = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      var data = _fs2.default.readFileSync(opts.source);
      resolve(data.toString());
    });
  };
};

var mkdirp = function mkdirp(dir) {
  var sep = '/';

  var segments = dir.split(sep);
  var current = '';
  var i = 0;

  while (i < segments.length) {
    current = current + sep + segments[i];
    try {
      _fs2.default.statSync(current);
    } catch (e) {
      _fs2.default.mkdirSync(current);
    }

    i++;
  }
};

exports.default = new Svg2Js();