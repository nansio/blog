# Pug API Reference

### 1. `pug.compile(source, ?options)`

将 Pug 模版编译成一个函数，与传入的变量结合来渲染HTML页面

- source: string, 要编译的 pug 模版字符串
- options: 可选的 options obj
- returns: a function that generates html from an obj containing locals

```js
const pug = require('pug')

const fn = pug.compile('template string of pug', options)

const html = fn(locals)
```

## 2. `pug.compileFile(path, ?options)`

与`pug.compile`的区别只在第一个参数`path`，用以指定要编译的 pug 文件的位置

### 3. `pug.compileClient(source, ?options)`

与`pug.compile`的区别在于，返回的是函数的字符串

### 4. `pug.compileClientWithDependenciesTracked(source, ?options)`

与 3 不同的是，以对象的形式多返回一个 dependecies 属性

### 5. `pug.compileFileClient(path, ?options)`

在 options对象里指定 name 属性，会被作为 Client side template function

### 6. `pug.render(source, ?options, ?callback)`
## 7. `pug.renderFile(path, ?options, ?callback)`

```JS
const pug = require('pug')

const html = pug.render('template string of pug', options)
const html0 = pug.renderFile('path/to/file.pug', options)
```



