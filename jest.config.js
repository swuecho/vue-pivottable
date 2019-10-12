module.exports = {
  //  rootDir: "tests",
  reporters: [
    "default",
    ["jest-junit", {
      suiteName: "jest tests",
      "outputDirectory": "tests",
      "outputName": "test-results.xml",
    }]
  ],
  "testPathIgnorePatterns": ["third_party"],
  "coverageThreshold": {
    "global": {
      "branches": 1,
      "functions": 1,
      "lines": 1,
      "statements": -2000
    }
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,vue}',
    '!src/main.js', // No need to cover bootstrap file
  ],
  testURL: 'http://localhost/'
}