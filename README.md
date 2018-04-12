fis3-preprocessor-create-vue-router
===============

根据文件自动生成对应的vue-router,自己用的所以路径写死了。

## 功能

 根据文件自动生成对应的vue-router,路由路径是文件名

## 用法

### 安装插件

    $ npm install --save-dev fis3-preprocessor-create-vue-router

### 启用插件

```javascript
fis.match('./route.js', {
    preprocessor: fis.plugin('create-vue-router'),
    rExt: '.js',
    isMod: true
    
});
```
