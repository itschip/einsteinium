const webpack = require('webpack');
const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');

const buildPath = path.resolve(__dirname, '../dist');

const client = {
  entry: './client.ts',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, 'client')],
      },
      watch: {
        include: [path.resolve(buildPath, 'client')],
      },
    }),
    // Ignore cardinal as its optional
    new webpack.IgnorePlugin(/^cardinal$/, /./),
  ],
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'client.js',
    path: path.resolve(buildPath, 'client')
  }
}

const server = {
  entry: './server.ts',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, 'server')],
      },
      watch: {
        include: [path.resolve(buildPath, 'server')],
      },
    }),
    // Ignore cardinal as its optional
    new webpack.IgnorePlugin(/^cardinal$/, /./),
  ],
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    filename: 'client.js',
    path: path.resolve(buildPath, 'server')
  },
  target: 'node'
}

module.exports = [client, server];