module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  'plugins': [
    [
      'import',
      {
        'libraryName': 'iview',
        'libraryDirectory': 'src/components'
      }
    ]
  ]
}
