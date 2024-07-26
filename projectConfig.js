export const configMap = {
    projectA: {
        minify: true,
        pages: [
            {
                filename: 'projecta', // filename 默认是template文件名，就是beijing.html
                // 也可以自己配置自己的入口文件
                // entry: 'src/projects/projectA/main.js',
                entry: 'src/main.js',
                // 也可以自己配置自己的html文件
                template: 'index.html',
            },
        ],
    },
    projectB: {
        minify: true,
        pages: [
            {
                filename: 'projectb',
                // 也可以自己配置自己的入口文件
                // entry: 'src/projects/projectB/main.js',
                entry: 'src/main.js',
                // 也可以自己配置自己的html文件
                template: 'index.html',
            },
        ],
    }
}

