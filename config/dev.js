var path = require('path');
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  alias: {
    "~": path.resolve(__dirname, '..',"src"),
  },
  defineConstants: {
  },
  weapp: {},
  h5: {}
}
