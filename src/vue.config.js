module.exports={//cli4中的配置是隐藏的，若需要额外的配置：vue.config.js中配置
    configWebpack:{
        resolve:{
            extentions:[],
            alias:{//起别名src: @
               'assets':'@/assets',
               'common':'@/common',
               'components':'@/components',
               'network':'@/network',
               'views':'@/views'

            }
        }
    }
}