import uniqueRandomArray from 'unique-random-array'
const amiciNames = require('./amici-names.json')

const mainExport = {
  all: amiciNames,
  random: uniqueRandomArray(amiciNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
