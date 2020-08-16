---
title: Button - 按钮
---
# Button - 按钮
### 基本用法
* 示例：

<button-demos></button-demos>

* 代码：
```html  
<lm-button>默认按钮</lm-button>
<lm-button icon="settings">设置按钮</lm-button>
<lm-button :loading="isLoading" @click="isLoading=!isLoading">加载按钮</lm-button>
<lm-button disabled>禁用按钮</lm-button>
```
* 属性：

|     属性     |   说明   |  类型   |                可选值                 | 默认值 |
| :----------: | :------: | :-----: | :-----------------------------------: | :----: |
|     icon     |   图标   | String  | settings、left、right、error、success |        |
| iconPosition | 图标位置 | String  |              left、right              |  left  |
|   loading    | 加载状态 | Boolean |              true、false              | false  |
|   disabled   | 禁用状态 | Boolean |              true、false              | false  |