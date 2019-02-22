const path = require('path')
const IMAGE_DIR = '/app/pictograms'
// catalogs must "depend" on IMAGE_DIR to prevent error with hard links: EXDEV: cross-device link not permitted
const CATALOG_DIR = path.resolve(IMAGE_DIR, 'catalogs')

const tmpCatalogDir = locale => path.resolve(CATALOG_DIR, 'tmp', locale)

const skin = {
  white: '#F5E5DE',
  black: '#A65C17',
  assian: '#F4ECAD',
  mulatto: '#E3AB72',
  aztec: '#CF9D7C'
}

const schematic = '#FEFEFE'

const hair = {
  brown: '#A65E26',
  blonde: '#FDD700',
  red: '#ED4120',
  black: '#020100',
  gray: '#EFEFEF',
  darkGray: '#AAABAB',
  darkBrown: '#6A2703'
}

module.exports = {
  IMAGE_DIR,
  CATALOG_DIR,
  tmpCatalogDir,
  schematic,
  hair,
  skin
}
