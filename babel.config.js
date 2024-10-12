module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
    ],
     transform: {
    '^.+\\.jsx?$': 'babel-jest', // Add Babel as a transformer for JavaScript files
  },
};