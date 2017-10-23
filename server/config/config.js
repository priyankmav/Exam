
//Configuring the server
var path = require('path'), 
rootPath = path.normalize(__dirname + '/..'), 
env = process.env.NODE_ENV || 'development';
var config = { 
    development: {
        root: rootPath,
        app: {
          name: 'Practice'
        },
        port: 5000,
        db: 'mongodb://127.0.0.1/todo-dev'
    },
        };
module.exports = config[env];

