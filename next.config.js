const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();

const SASS_ROOT = path
  .resolve(CURRENT_WORKING_DIR, 'src', 'assets', 'scss')
  .replace(/\\/g, '/');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: [
      `@import "${SASS_ROOT}/variables";`,
      `@import "${SASS_ROOT}/functions";`,
      `@import "${SASS_ROOT}/mixins";`
    ].join('\r\n'),
    precision: 8,
    outputStyle: 'compressed',
    sourceComments: false,
    includePaths: [SASS_ROOT]
  }
};

module.exports = nextConfig;
