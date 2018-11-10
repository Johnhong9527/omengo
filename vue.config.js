// const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');

// module.exports = {
//   // outputDir: 'docs',
//   // baseUrl: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           autoprefixer(),
//           pxtorem({
//             rootValue: 37.5,
//             propList: ['*']
//           })
//         ]
//       }
//     }
//   }
// };

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://www.sonyo.com/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
};
