# Lemon UI —— 一个 Vue UI 组件

作者 ： Pray

[![Build Status](https://travis-ci.org/wuwenbang/lemon-ui.svg?branch=master)](https://travis-ci.org/wuwenbang/lemon-ui)

## 介绍

这是一个基于 Vue 的UI框架，希望对你有帮助。

## 开始使用

1. 环境配置
   
    使用本框架前，请在 CSS 中设置 border-box
    ```css
    *,*::before,*::after{
        box-sizing: border-box;
    }
    /* IE8 以上浏览器都支持此样式 */
    ```
    你还需要设置默认颜色等变量（后续会改为SASS）
    ```css
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
2. 安装 lemon-ui-vue
   ```
   npm i --save lemon-ui-vue
   ```
3. 引入 lemon-ui-vue
    ```
    import { Button, Icon, ButtonGroup } from "lemon-ui-vue";
    import "lemon-ui-vue/dist/index.css";
    export default {
    name: "App",
    components: {
        "lm-button": Button,
        "lm-button-group": ButtonGroup,
    },
    };
    ```


   
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


