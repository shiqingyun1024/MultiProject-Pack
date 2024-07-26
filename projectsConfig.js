
import { readdirSync, readdir } from 'node:fs';
import { fileURLToPath, URL } from 'node:url'
// 获取projects文件夹中的文件夹名
// const directoryPath = join(__dirname, './src/projects');
const directoryPath = fileURLToPath(new URL('./src/projects', import.meta.url));
let directories = readdirSync(directoryPath); // 同步获取src/projects文件夹中所有的文件夹名，也就是项目名（模块名）
// 异步获取
// readdir(directoryPath, { withFileTypes: true }, (err, files) => {
//     console.log('执行2')
//     if (err) {
//         console.error('读取目录出错:', err);
//         return;
//     }

//     directories = files.filter(file => file.isDirectory()).map(file => file.name);
//     console.log('文件夹名:', directories);
// });


let projects = {} // 存储所有的打包命令，和文件名形成映射
let configMap = {} // 所有项目的配置，例如每个项目的filename、entry、template
directories.forEach(item => {
    projects[item] = {
        name: item,
        buildCommand: `cross-env PROJECT_NAME=${item} vite build`,
    }
    configMap[item] = {
        minify: true,
        pages: [
            {
                filename: item, // filename 默认是template文件名
                // 也可以自己配置自己的入口文件
                // entry: 'src/projects/projectA/main.js',
                entry: 'src/main.js',
                // 也可以自己配置自己的html文件
                template: 'index.html',
            },
        ],
    }
})
// projects = {
//     projectA: {
//         name: "projectA",
//         buildCommand: "cross-env PROJECT_NAME=projectA vite build",
//     },
//     projectB: {
//         name: "projectB",
//         buildCommand: "cross-env PROJECT_NAME=projectB vite build",
//     }
// }

// configMap = {
//     projectA: {
//         minify: true,
//         pages: [
//             {
//                 filename: 'projectA', // filename 默认是文件名
//                 // 也可以自己配置自己的入口文件
//                 // entry: 'src/projects/projectA/main.js',
//                 entry: 'src/main.js',
//                 // 也可以自己配置自己的html文件
//                 template: 'index.html',
//             },
//         ],
//     },
//     projectB: {
//         minify: true,
//         pages: [
//             {
//                 filename: 'projectB',
//                 // 也可以自己配置自己的入口文件
//                 // entry: 'src/projects/projectB/main.js',
//                 entry: 'src/main.js',
//                 // 也可以自己配置自己的html文件
//                 template: 'index.html',
//             },
//         ],
//     }
// }





export { directories, projects, configMap }

