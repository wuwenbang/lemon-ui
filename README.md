# Lemon UI —— 一个 Vue UI 组件
[![Build Status](https://travis-ci.org/wuwenbang/lemon-ui.svg?branch=master)](https://travis-ci.org/wuwenbang/lemon-ui)
[![NPM](https://img.shields.io/npm/v/lemon-ui-vue)](https://npmjs.org/package/lemon-ui-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 关于项目
Lemon UI 是一个基于Vue2.0 + Sass 的 简易UI组件库，涵盖了Button、Icon、Toast、Tabs、Collapse、Popover等组件。
开发这套组件的目的主要是为了学习与提高，同时可以将自己的成功分享出来帮助到开源社区的开发者。<br>

## 开发者
* 吴文邦（Pray）
* [github](https://github.com/wuwenbang)
* [gitee](https://gitee.com/wuwenbang)

## 注意事项
Lemon-UI 是个人学习过程中造出来的UI库，如果你在使用过程中发现问题，非常感谢你提出宝贵意见。<br>
**PS：目前项目属于开发中，暂不建议在生产项目中使用。**

## 安装
### 搭建Vue的开发环境
```sh
vue create hello-world
```
> 如果你还没有安装vue-cli，请先安装[vue-cli](https://cli.vuejs.org/zh/guide/installation.html)，再进行下一步。
### 安装 Lemon UI
```sh
yarn add lemon-ui-vue
#or
npm install lemon-ui-vue --save
```
## 环境配置
### 样式引入
```js
import 'lemon-ui-vue/dist/index.css'
```
### 组件注册
```html
<script>
import 'lemon-ui-vue/dist/index.css'
import {Button} from 'lemon-ui-vue'
export default {
  name: 'yourApp',
  components: {
    Button
  }
}
</script>
```
### 使用第一个Button组件
```html
<Button>第一个的按钮</Button>
```

## 文档
[文档链接](http://wuwenbang.gitee.io/lemon-ui/)
## 提问

## 变更记录

## 联系方式

邮箱：wuwenbang@foxmail.com

## 贡献代码
Pray


