// babel-preset-taro 鏇村閫夐��鍜岄粯璁ゅ€硷約1�7
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui-react",
        "libraryDirectory": "dist/esm",
        "style": true,
        "camel2DashComponentName": false
      },
      "nutui-react"
    ]
  ]
}
