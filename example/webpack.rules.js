module.exports = [
  {
    test: /\.jsx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        exclude: /node_modules/,
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-export-namespace-from', 'react-native-electron/plugin'],
      },
    },
  },
  {
    test: /\.node$/,
    use: 'node-loader',
  },
]
