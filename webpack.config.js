const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack =require("webpack");
const seo = require('./seo.json');

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

    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                //   MiniCssExtractPlugin.loader, // 프로덕션 환경
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }
                ]
              },
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
        new webpack.BannerPlugin({
            banner : `빌드 날짜: ${new Date().toLocaleString()}`
        }),
        new PrerenderSPAPlugin({ 
            // routes: ["/" , "/detail/1","/detail/2","/detail/3"], 
            // staticDir: path.join(__dirname, './public'),
            // postProcess(renderedRoute) {
            //     let { html , route} = renderedRoute;
            //     const {name , meta , image} = seo.find(i => `/detail/${i.id}` === route)
            //     const metaData = `<title>${name}</title>` +
            //      `<meta name="title" content="${name}" />` + 
            //      `<meta name="description" content="${meta.join(',')}" />` + 
            //      `<meta name="keywords" content="${meta}" />` + 
            //      `<meta property="og:type" content="website" />` + 
            //      `<meta property="og:title" content="${name}" />` + 
            //      `<meta property="og:description" content="${meta.join(',')}" />` + 
            //      `<meta property="og:image" content="${image}" />`
            //      const start = html.indexOf('<head>') + '<head>'.length; 
            //      html = html.slice(0, start) + metaData + html.slice(start); 
            //      renderedRoute.html = html; 
            //      console.log(html)
            //      return renderedRoute;

            // }, 
            // renderer: new PrerenderSPAPlugin.PuppeteerRenderer({ 
            //     maxConcurrentRoutes: 2,
            //     args: ["--no-sandbox", "--disable-setuid-sandbox"], 
            //     headless: false }) })
            "routes" : [],
            "staticDir" :path.join(__dirname,"public"),
            "postProcess"(renderedRoute){},
            "renderer":new PrerenderSPAPlugin.PuppeteerRenderer({
              "args": ["--no--sandbox","--disable-setuid-sandbox"],
              "headless":false
            })})
         ,
        new MiniCssExtractPlugin({
            filename: path.join(__dirname, '../../../../../[id].css'),
            chunkFilename: "[id].css"
        })
    ]
    
}