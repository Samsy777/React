const path = require('path');

const config = {
    entry: '/lib/component/index.js',
    output : {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {test:/\.js$/, use: 'babel-loader'}
        ]
    }

}
module.exports = config ;