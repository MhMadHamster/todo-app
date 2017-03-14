module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
        }]
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
    ],
  }
}
