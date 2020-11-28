/* jshint esversion: 9 */

class BaseApp {
  constructor() {
    this.modules = {
      Express: require('express'),
      Cors: require('cors'),
      Helmet: require('helmet')
    };

    this.routes = {
      Main: require('./routes/Main')
    };

    this.Express = this.modules.Express;
    this.App = this.Express();
    this.Express.port = 80;
  }
}

module.exports = BaseApp;