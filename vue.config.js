module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    // config.module.rules.delete('eslint');
    // config.module.rule('ts').use('ts-loader');
    config.module.rule('lang jsx')
      .test(/\.jsx$/)
      .use('babel-loader')
      .loader('babel-loader').end()

  },
  indexPath: '/demo/',
  pages: {
    index: {
      entry: 'demo/main.js',
      template: 'demo/index.html',
      filename: 'index.html',
      title: 'Index Page'
    }
  }
}
