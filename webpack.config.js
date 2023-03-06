const path = require('path');

module.exports = {
    entry: {
        main: './public/index.js',
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
    },
  mode: 'development', // 개발 모드
};