---
title: Collapse - 折叠栏
---
# Collapse - 折叠栏

## 多项展开
<ClientOnly>
 <collapse-demos></collapse-demos>
</ClientOnly>

## 单项展开
<ClientOnly>
 <collapse-single-demos></collapse-single-demos>
</ClientOnly>

## Collapse 属性
|   属性   |     说明     |  类型   |   可选值    | 默认值 |
| :------: | :----------: | :-----: | :---------: | :----: |
| selected |  默认选中项  |  Array  | 任意字符串  |   []   |
|  single  | 是否单一展示 | boolean | true、false | false  |

## CollapseItem 属性
| 属性  |       说明       |  类型  |   可选值   | 默认值 |
| :---: | :--------------: | :----: | :--------: | :----: |
| title |       标题       | string | 任意字符串 |
| name  | 唯一标识（必填） | string | 任意字符串 |