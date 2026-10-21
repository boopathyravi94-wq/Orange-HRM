module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    requireModule: [
      'ts-node/register',
      'dotenv/config'
    ],
    require: ['step-definitions/**/*.ts'],
    format: ['progress'],
    parallel: 1
  }
};
