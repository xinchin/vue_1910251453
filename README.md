# vue_1910251453

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



-----------

git remote add origin https://github.com/xinchin/vue_1910251453.git

git push -u origin master

-------
## 安裝 element-ui

### Reference

> https://element.eleme.io/#/zh-CN/component/installation

### command

> npm i element-ui -S


PS D:\RD_2019\Vue_Project\vue_1910251453> npm i element-ui -S
npm WARN ajv-keywords@3.4.1 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ element-ui@2.12.0
added 6 packages from 6 contributors and audited 11825 packages in 11.847s
found 10 vulnerabilities (6 moderate, 4 high)
  run `npm audit fix` to fix them, or `npm audit` for details
PS D:\RD_2019\Vue_Project\vue_1910251453>

----------
## Element UI 按需引入
---------------
按需引入

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

npm install babel-plugin-component -D

然后，将 .babelrc 修改为：

{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

---------------

### reference
> https://element.eleme.io/#/zh-CN/component/quickstart

---------------

### command

> npm install babel-plugin-component -D

PS D:\RD_2019\Vue_Project\vue_1910251453> npm install babel-plugin-component -D
npm WARN ajv-keywords@3.4.1 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ babel-plugin-component@1.1.1
added 4 packages from 3 contributors and audited 11832 packages in 8.184s
found 10 vulnerabilities (6 moderate, 4 high)
  run `npm audit fix` to fix them, or `npm audit` for details
PS D:\RD_2019\Vue_Project\vue_1910251453>

---------------

