module.exports = {

  entry: './block.js',
  mode: 'production',
  output: {
    path: __dirname,
    filename: 'block.build.js',
  },

  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      },
    },
  ],
}

};