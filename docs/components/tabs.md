---
title: Tabs - 标签栏
---
# Tabs - 标签栏

## 基础用法
<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

## 禁用某项
<ClientOnly>
<tabs-disabled-demos></tabs-disabled-demos>
</ClientOnly>

## Tabs 属性
|   属性   |       说明       |  类型  | 可选值 | 默认值 |
| :------: | :--------------: | :----: | :----: | :----: |
| selected | 默认选中（必选） | string |  name  |

## TabsItem 属性
|   属性   |         说明         |  类型   |   可选值    | 默认值 |
| :------: | :------------------: | :-----: | :---------: | :----: |
|   name   | 唯一对应标识（必选） | string  | 任意字符串  |
| disabled |         禁用         | boolean | true、false | false  |

## TabsPane 属性
| 属性  |         说明         |  类型  |   可选值   | 默认值 |
| :---: | :------------------: | :----: | :--------: | :----: |
| name  | 唯一对应标识（必选） | string | 任意字符串 |
