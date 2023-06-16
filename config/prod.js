module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    /**
     * WebpackChain 鎻掍欢閰嶇疆
     * @docs https://github.com/neutrinojs/webpack-chain
     */
    // webpackChain (chain) {
    //   /**
    //    * 濡傛灉 h5 绔紪璇戝悗浣撶Н杩囧ぇ锛屽彲浠ヤ娇鐢� webpack-bundle-analyzer 鎻掍欢瀵规墦鍖呬綋绉繘琛屽垎鏋愩€�
    //    * @docs https://github.com/webpack-contrib/webpack-bundle-analyzer
    //    */
    //   chain.plugin('analyzer')
    //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])

    //   /**
    //    * 濡傛灉 h5 绔灞忓姞杞芥椂闂磋繃闀匡紝鍙互浣跨敤 prerender-spa-plugin 鎻掍欢棰勫姞杞介椤点€�
    //    * @docs https://github.com/chrisvfritz/prerender-spa-plugin
    //    */
    //   const path = require('path')
    //   const Prerender = require('prerender-spa-plugin')
    //   const staticDir = path.join(__dirname, '..', 'dist')
    //   chain
    //     .plugin('prerender')
    //     .use(new Prerender({
    //       staticDir,
    //       routes: [ '/pages/index/index' ],
    //       postProcess: (context) => ({ ...context, outputPath: path.join(staticDir, 'index.html') })
    //     }))
    // }
  }
}
