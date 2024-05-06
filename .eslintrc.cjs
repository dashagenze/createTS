const deepmerge = require('deepmerge')

const featureSlicedConfig = require('./eslint/featureSlicedConfig.cjs')
const baseConfig = require('./eslint/baseConfig.cjs')

module.exports = deepmerge(featureSlicedConfig, baseConfig)
