const path = require("path");

module.exports = {
    mode : "production",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: "node",
    devServer: {
        port : "3000",
        contentBase: ["./public"],
        open: true
    },
    resolve: {
        extensions: [".js",".jsx",".json"]
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins:[
        new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, 'dist'),
            // Required - Routes to render.
            routes: [ '/', '/about', '/some/deep/nested/route' ],
          })
    ]
    
}