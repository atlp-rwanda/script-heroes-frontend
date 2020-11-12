module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./src/setupTest.js'],
  verbose: true,
  coverageDirectory: './coverage',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/__mocks__/fileMock.js',
  },
  setupFiles: ['./src/setupTest.js'],
  testPathIgnorePatterns: ['redux'],
  coveragePathIgnorePatterns: ['redux'],
};
