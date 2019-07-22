module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',"@babel/preset-react"],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
