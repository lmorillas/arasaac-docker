const path = require('path')
const IMAGE_DIR = '/app/pictograms'
// catalogs must "depend" on IMAGE_DIR to prevent error with hard links: EXDEV: cross-device link not permitted
const CATALOG_DIR = path.resolve(IMAGE_DIR, 'catalogs')

const tmpCatalogDir = (locale, bn) =>
  bn
    ? path.resolve(CATALOG_DIR, 'tmp', locale, 'NO_COLOR')
    : path.resolve(CATALOG_DIR, 'tmp', locale, 'COLOR')

// for progress_bar, each item corresponds to one step in catalogGeneration
const catalogProgress = [
  {
    init: 0,
    duration: 5
  },
  {
    init: 5,
    duration: 15
  },
  {
    init: 20,
    duration: 60
  },
  {
    init: 80,
    duration: 18
  },
  {
    init: 99,
    duration: 1
  }
]

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

/* websocket msg */
const WS_CATALOG_STATUS = 'catalogStatus'

module.exports = {
  IMAGE_DIR,
  CATALOG_DIR,
  tmpCatalogDir,
  schematic,
  hair,
  skin,
  WS_CATALOG_STATUS,
  catalogProgress
}
