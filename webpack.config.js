/**
 * Created by skimeli on 7/29/17.
 */



module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    devServer:{
        inline:true,
        port:8081
    },

};
