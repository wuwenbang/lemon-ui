---
title: Toast - 弹窗
---
# Toast - 弹窗

## 自动关闭
<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>

## 手动关闭
<ClientOnly>
<toast-close-demos></toast-close-demos>
</ClientOnly>

## 自定义关闭
<ClientOnly>
<toast-custom-demos></toast-custom-demos>
</ClientOnly>

## 使用方法
引入Toast插件
```js
import Vue from 'vue'
import Toast from 'lemon-ui-vue'
Vue.use(Toast)
```
在组件中调用：
```js
this.$toast('message',options)
```

## Options 选项
|     属性      |       说明       |      类型       |       可选值        |              默认值              |
| :-----------: | :--------------: | :-------------: | :-----------------: | :------------------------------: |
|   position    |       位置       |     string      | top、middle、bottom |               top                |
|   autoClose   |  自动关闭及时间  | boolean、Number |  true、false、数字  |                5                 |
| isCloseButton | 是否启用关闭按钮 |     Boolean     |     true、false     |              false               |
|  closeButton  |     关闭按钮     |     Object      |   {text,callback}   | {text:"关闭",callback:undefined} |
|  enableHtml   |   支持html内容   |     boolean     |     true、false     |              false               |
