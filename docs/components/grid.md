---
title: Grid - 网格
---
# Grid - 网格

通过基础的 24 分栏（同一`Row`内`Col`的`span`属性的和为24），迅速简便地创建布局。

## 基本用法
<ClientOnly>
 <grid-demos></grid-demos>
</ClientOnly>

## 分栏间隔
<ClientOnly>
 <grid-gutter-demos></grid-gutter-demos>
</ClientOnly>

## 分栏偏移
<ClientOnly>
 <grid-offset-demos></grid-offset-demos>
</ClientOnly>

## Row 属性
|  属性   |   说明   |      类型      |       可选值        | 默认值 |
| :-----: | :------: | :------------: | :-----------------: | :----: |
| gutter  |   间距   | string、number |      任意数字       |   0    |
| justify | 对齐方式 |     string     | left、center、right |  left  |

## Col 属性
|   属性   |        说明        |      类型      |         可选值          | 默认值 |
| :------: | :----------------: | :------------: | :---------------------: | :----: |
|   span   |   栅格占据的列数   | string、number |          1-24           |
|  offset  | 栅格左侧的间隔格数 | string、number |          1-24           |
|   ipad   |   ipad响应式布局   | number、object | 数字或{span,offset}对象 |
| narrowPc |  窄屏幕响应式布局  | number、object | 数字或{span,offset}对象 |
|    pc    | 普通电脑响应式布局 | number、object | 数字或{span,offset}对象 |
|  widePc  |   宽屏响应式布局   | number、object | 数字或{span,offset}对象 |