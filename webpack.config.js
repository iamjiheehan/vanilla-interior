const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './public/index.js',
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
    },
  mode: 'development', // 개발 모드
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })] // 템플릿 경로를 지정
};