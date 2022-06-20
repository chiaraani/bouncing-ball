const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: ['./test/setup.js', './test/run.js'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // load chai.js like a normal <script> tag
        test: [require.resolve('chai/chai.js'), require.resolve('mocha/mocha.js')],
        use: 'script-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'test/index.html'
    })
  ]
}
