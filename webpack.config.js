const Path = require("path")
module.exports = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    port: 3000,
    contentBase: Path.join(__dirname, 'dist'),
    inline: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
    ]
  }
}