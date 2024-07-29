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
```
1、commitlint.config.cjs
2、.husky
```
