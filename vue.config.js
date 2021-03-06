const path = require('path') // eslint-disable-line
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {
  devServer: {
    disableHostCheck: true
  },

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('prerender').use(PrerenderSPAPlugin, [
        {
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/', '/okulista', '/diabetolog', '/kontakt'],
        },
      ])
    }
  },
}