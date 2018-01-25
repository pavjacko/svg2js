import path from 'path'
import fs from 'fs'

class Svg2Js {
  constructor () {
    //console.log('Svg2JS 🔧 ')
  }

  create = (opts = {}) => new Promise((resolve, reject) => {
    var data = fs.readFileSync(opts.source)

    fs.writeFile(opts.destination, 'module.exports = `' + data.toString() + '`\n', function (err) {
      if (err) {
        reject(err)
      }
      resolve()
    })
  }

  convert = (opts = {}) => new Promise((resolve, reject) => {
    var data = fs.readFileSync(opts.source)
    resolve(data.toString())
  }

}

const mkdirp = (dir) => {
  var sep = '/'

  var segments = dir.split(sep)
  var current = ''
  var i = 0

  while (i < segments.length) {
    current = current + sep + segments[i]
    try {
      fs.statSync(current)
    } catch (e) {
      fs.mkdirSync(current)
    }

    i++
  }
}

export default new Svg2Js()
