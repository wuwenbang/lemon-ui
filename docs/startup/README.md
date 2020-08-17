---
title: 起步
---
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