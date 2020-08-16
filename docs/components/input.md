---
title: Input - 输入框
---
# Input - 输入框

* 示例：

<input-demos></input-demos>


* 代码：
```html   
<lm-input></lm-input>
<lm-input disabled></lm-input>
<lm-input readonly></lm-input>
<lm-input error="错误信息"></lm-input>
```
* 属性：

|     属性     |   说明   |  类型   |                可选值                 | 默认值 |
| :----------: | :------: | :-----: | :-----------------------------------: | :----: |
|     icon     |   图标   | String  | settings、left、right、error、success |        |
| iconPosition | 图标位置 | String  |              left、right              |  left  |
|   loading    | 加载状态 | Boolean |              true、false              | false  |
|   disabled   | 禁用状态 | Boolean |              true、false              | false  |