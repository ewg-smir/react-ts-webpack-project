const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Точка входа
  entry: './src/index.tsx',

  // Режим
  mode: 'development',

  // Выходной бандл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // очищает dist перед сборкой
  },

  // Расширения для импорта без указания расширения
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  // Правила
  module: {
    rules: [
      // TypeScript / TSX
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      // SCSS-МОДУЛИ: *.module.scss
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // имяФайла_имяКласса__хэш
                localIdentName: '[name]_[local]__[hash:base64:5]',
              },
              importLoaders: 1,
              esModule: false, // 🔥 важное место — чтобы import styles from ... работал
            },
          },
          'sass-loader',
        ],
      },

      // Обычный SCSS (не модули)
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      // CSS-МОДУЛИ: *.module.css
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]__[hash:base64:5]',
              },
              esModule: false, // тоже важно
            },
          },
        ],
      },

      // Обычный CSS
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      // Картинки
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // Плагины
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      title: 'React TS Webpack App',
    }),
  ],

  // DevServer
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },

  // Source-maps
  devtool: 'eval-source-map',
};
