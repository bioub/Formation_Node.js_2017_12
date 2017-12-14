const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {

  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ];

  if (env === 'prod') {
    plugins.push(new UglifyJsWebpackPlugin());
  }

  return {
    entry: './src/js/index',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {
                  targets: {
                    browsers: ['chrome >= 62', 'ie 11']
                  },
                  modules: false
                }]
              ]
            }
          }
        }
      ]
    },
    plugins,
  };
};
