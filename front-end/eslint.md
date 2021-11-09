# Eslint配置

### 1. 基础规则配置

```
{
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "doublbe"]
  }
}
```

规则`semi`的第一个值可选值为：

1. `"off" or 0` 关闭规则
2. `"warn" or 1` 警告
3. `"error" or 2` 报错

### 2. 配置继承规则

```
{
  "extends": "eslint:recommended"
}
```

### 3. ESlint配置

配置Eslint规则的两种方式：

- 通过JS的注释直接在文件中使用内联应用规则
- 使用配置文件`.eslintrc.*`文件或者在package.json文件中设置`eslintConfig`字段

<h4>3.0 .eslintrc可配置的字段</h4>

##### 3.0.1 配置`Environments`
如下通过 **`env`** 字段配置
```
{
  "env": {
    "browser": true,
    "node": true
  }
}
```
可选的环境如下：
- browser
- node
- commonjs
- shared-node-browser
- es6
- es2017
- es2020
- es2021
- worker
- amd
- mocha
- jasmine
- jest
- phantomjs
- protractor
- qunit
- jquery
- prototypejs
- shelljs
- meteor
- mongo
- applescript
- nashorn
- serviceworker
- atomtest
- embertest
- webextensions
- greasemonkey
> enable哪个环境，就会启用该环境下预设的 globals, 环境间彼此并不互斥，可同时启用。

> 此部分详情参见[这里](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments)

##### 3.0.2 配置`Globals`
```
{
  "globals": {
    "var1": "writable",
    "var2": "readonly",
    "Promise": "off" // disable
  }
}
```
> 此部分详情参见[这里](https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals)

##### 3.0.3 配置`Rules`
```
{
  "rules": {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "single"]
  }
}
```
> 若规则(quotes)含有其他配置项，则可以使用数组形式进行声明

**规则的禁用**
```js
/* eslint-disable */
// 放在文件首行 禁用所有规则
/* eslint-disable no-alert, no-console */
// 这段代码里上述规则被禁用
/* eslint-enable no-alert, no-console */

alert('foo') // eslint-disable-line
// eslint-disable-nextline
alert('bar')
```
在配置文件中禁用规则
```
{
  "rules": {...},
  "overrides": [
    {
      "files": ["*-test.js", "*-spec.js"],
      "rules": {
        "no-unused-expressions": "off"
      }
    }
  ]
}
```

禁用行内规则注释
```
{
  "rules": {...},
  "noInlineConfig: true
}
```
报告无用的`eslint-disable`注释
```
{
  "rules": {...},
  "reportUnusedDisableDirectives": true
}
```
> 此部分详情参见[这里](https://eslint.org/docs/user-guide/configuring/rules)

##### 3.0.4 配置`Plugins`

指明`Parser`,Eslint默认使用的解析器是`Espree`，与Eslint兼容的解析器有: `Esprima`,`@babel/eslint-parser`,`@typescript-eslint/parser`
```
{
  "parser": "esprima",
  "rules": {
    "semi": "error"
  }
}
```

指明`Processor`, `Plugins`可能会提供`Processor`
```
{
  "plugins": ["a-plugin"],
  "processor": "a-plugin/a-processor"

  // 针对特殊格式的文件使用某一Processor
  "overrides": [
    {
      "files": ["*.md"],
      "processor": "a-plugin/markdown",
      "rules": {
        "strict": "off" // 关闭strict规则
      }
    }
  ]
}
```
配置`Plugins`
```
{
  "plugins": [
    "plugin1",
    "eslint-plugin-plugin2", // eslint-plugin前缀是可以省略的
    "@jquery/jquery", // 省略的规则同样适用于scoped packages, 这个等于 @jquery/eslint-plugin-jquery
    "@foobar" // means @foobar/eslint-plugin
  ]
}
```
插件的使用
```
{
  "plugins": [
    "jquery",
    "@foo/foo",
    "@bar"
  ],
  "extends": [
    "plugin:@foo/foo/recommended",
    "plugin:@bar/recommended"
  ],
  "rules": {
    "jquery/a-rule": 2,
    "@foo/foo/some-rule": 1,
    "@bar/another-rule": 0
  },
  "env": {
    "jquery/jqury": true,
    "@foo/foo/env-foo": true,
    "@bar/env-bar": true
  }
}
```
所指明的使用的插件都需要使用npm install 进行安装

> 此部分详情参见[这里](https://eslint.org/docs/user-guide/configuring/plugins)
