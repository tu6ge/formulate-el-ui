const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  modulePaths: [
    "<rootDir>"
  ],
  transform: {
    '.*\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  collectCoverageFrom: [
    "src/*.{js,vue}",
    "src/inputs/*.{js,vue}",
    "src/i18n/*.{js,vue}",
    "src/slots/*.{js,vue}",
    "src/extends/*.{js,vue}",
  ],
  testMatch: ["<rootDir>/test/unit/*.test.js"]
  // verbose: true
}
