const path = require('path')
const webpack = require('webpack')
const json = require('')

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
        module:{
                    rules:[ 
                        
                        {
                        test: '/\.js$/',
                        exclude: /node_modules/,
                        loader: "babel-loader"
                        }

                        {
                        test2 :'/\.json$/',
                        exclude: /node_modules/,
                        loader: "json-loader"
                        }


                    ]
        }
}