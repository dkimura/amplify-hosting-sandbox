/** @type {import('prettier').Options} */
const config = {
  bracketSpacing: true,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  importOrder: ['^[./]', '^@app/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

module.exports = config
