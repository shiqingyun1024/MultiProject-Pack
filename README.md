# MultiProject-Pack
- 【vite+vue3】一个项目包含多个小项目并实现多项目单独打包部署访问

## 打包逻辑和命令如下：

```js
模块化打包的概念可以理解为多个单独的项目可以单独进行打包，也可以全部模块进行打包
模块化打包的思路如下：

1、首先在src目录下新建projects文件夹（当然也可以直接在views文件下新建），然后在projects文件夹下新建模块化文件夹，例如projectA、projectB，然后在projectA、projectB等文件夹下开发对应的功能页面；

2、新建projects.js，逻辑为先获取projects文件夹下的文件夹名，然后遍历生成打包的命令；

3、新建dynamic-build-all.js，逻辑为先获取输入的命令的参数，然后对参数进行处理，得到相关的模块名（项目名），然后根据得到的模块名（项目名）进行针对性的打包；

4、得到打包之后的文件。


打包命令如下：

单独模块（项目）打包：
npm run build -- --projectA

多模块（项目）打包：
npm run build -- --projectA,projectB

所有模块（项目）打包
npm run build -- --all
```
### commonlint配置
```js
1、commitlint.config.cjs
2、.husky

type 用于说明 commit 的类别，如下：
'feat',//新特性、新功能
'fix',//修改bug
'docs',//文档修改
'style',//代码格式修改, 注意不是 css 修改
'refactor',//代码重构
'perf',//优化相关，比如提升性能、体验
'test',//测试用例修改
'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert',//回滚到上一个版本
'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动

注意：

type后面跟着的是英文冒号，还必须加一个空格！
当我们 commit 提交信息时，必须是 git commit -m ‘fix: xxx’ 符合类型的才可以，需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，这个是不能省略的。

# 提交到版本库 格式错误 提交失败
git commit -m '11'

# 提交到版本库 格式正确 提交成功
git commit -m 'fix: 修复了xxx的bug'

```
