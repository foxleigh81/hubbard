module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/.storybook/**',
    '!**/tests/**',
    '!**/themes/**',
    '!**/lib/helpers/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!**/pages/_app.tsx',
    '!**/pages/_document.tsx',
    '!**/*.stories.tsx',
    '!**/*.d.ts'
  ],
  // Coverage set to 0 for new apps, please add your own coverage minimums
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10
    }
  },
  automock: false,
  setupFilesAfterEnv: ['<rootDir>/config/setup.js'],
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/tests/',
    '/themes/',
    '/coverage/',
    '/.storybook/',
    '/cypress/',
    '/pages/_app.tsx',
    '/pages/_document.tsx',
    "^.+\\.d.ts$",
    "^.+\\.stories.tsx$"
  ],
  testResultsProcessor: "jest-sonar-reporter",
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/file-mock.js',
    // Any changes to the below should also be reflected in the 'paths' section of tsconfig.json
    '@mocks/(.*)': '<rootDir>/mocks/$1',
    '@templates/(.*)': '<rootDir>/templates/$1',
    '@helpers/(.*)': '<rootDir>/lib/helpers/$1',
    '@components/(.*)': '<rootDir>/components/$1',
    '@defs/(.*)': '<rootDir>/lib/custom-types/$1',
    '@themes/(.*)': '<rootDir>/themes/$1',
    '@helpers/': '<rootDir>/lib/helpers/index',
    '@themes/': '<rootDir>/themes/index'
    
  },
  transform: {
    '.(ts|tsx)': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
