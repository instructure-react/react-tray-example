module.exports = {
  entry: './index.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {text: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
