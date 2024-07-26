
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
directories.forEach(item => {
    projects[item] = {
        name: item,
        buildCommand: `cross-env PROJECT_NAME=${item} vite build`,
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

export { directories, projects }

