module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target:'https://www.missevan.com',
                changeOrigin:true,
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    }
}