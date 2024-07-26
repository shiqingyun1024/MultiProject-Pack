
import { projects, directories } from './projects.js';
import { execSync } from 'child_process';

// const projectNames = Object.keys(projects);
// app.js
// const myArg = process.argv.find(arg => arg.includes('--projectA'));
// console.log(process.argv[2]) // --projectA,projectB
let projectNames = process.argv[2].slice(2).split(',') // [projectA,projectB]
if (projectNames[0] === 'all') {
    projectNames = directories; //等于所有的projects文件夹下的项目名，相当于所有的都进行打包
}
console.log(projectNames); // 输出 "--myArgValue"

for (const projectName of projectNames) {
    console.log(`Building ${projectName}...`);
    const command = projects[projectName].buildCommand;
    execSync(command, { stdio: 'inherit' });
}

