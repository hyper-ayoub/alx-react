const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',  //Mode set to development: ✅//
  entry: {  // entery point ✅//
    header: path.resolve(__dirname, './modules/header/header.js'),
    body: path.resolve(__dirname, './modules/body/body.js'),
    footer: path.resolve(__dirname, './modules/footer/footer.js'),
  },
  devtool: 'inline-source-map', //Inline source mapping: ✅//
  devServer:{ //Development server running on port 8564: ✅//
    static: './public',
    open: true,
    port: 8564,
  },

  plugins: [ //Plugin to clean build folder: ✅//
     new HtmlWebpackPlugin({
       title: 'Development',
       template: path.resolve(__dirname, './public/index.html'), //plugin to Webpack to automatically create an index.html HTML file ✅//
       filename: 'index.html',
      
     }),
     new CleanWebpackPlugin(),
    ],
  output: { // entry point ✅//
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    clean: true,
  }, 
  performance: { // webpack's performance hints✅//
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [ 
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { 
        test: /\.(gif|png|jp?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },//Webpack configuration to split the modules into chunks: ✅//
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
