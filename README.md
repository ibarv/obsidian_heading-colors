# Heading Colors
## 简介

这是一款为 Obsidian 设计的自定义 CSS 代码片段，作用是在 H1~H6 各级标题左侧添加彩色小色块标记，帮助快速区分标题层级。片段同时兼容**编辑模式（实时预览 / 源码模式）**与**阅读模式**。

<p align="center">
<img src="01.png" alt="效果演示" width="650" style="transform: rotate(90deg);transform-origin:center;margin:40px 0;">
</p>

## 功能特性

- 为六级标题分别配置独立的标识色，视觉层级清晰
- 色块尺寸、圆角、位置均可通过 CSS 变量自由自定义
- 统一标题行高，最大程度消除编辑与阅读模式的视觉偏移
- 支持独立开关阅读模式的色块显示
- 提供阅读模式水平位置补偿参数，适配不同主题风格

## 安装方法

1. 将 `HeadingColors.css` 文件保存到本地
2. 打开你的 Obsidian 库目录，进入 `.obsidian/snippets` 文件夹（若文件夹不存在请手动创建）
3. 把 `HeadingColors.css` 放入该文件夹
4. 打开 Obsidian → 设置 → 外观，找到「CSS 代码片段」区域，点击刷新按钮，开启 `HeadingColors` 即可生效

## 配置说明

所有可调参数均定义在文件顶部的 `:root` 变量中，直接修改对应数值即可全局生效。

### 1. 色块基础尺寸

css

```
--marker-width: 8px;   /* 色块宽度 */
--marker-height: 10px; /* 色块高度 */
--marker-radius: 2px;  /* 色块圆角大小，设为 0 则为直角 */
```

### 2. 编辑模式位置偏移

css

```
--marker-left: -14px;    /* 水平偏移，负值向左移动，正值向右移动 */
--marker-vertical: 0px;  /* 垂直偏移，正值向下移动，负值向上移动 */
```

### 3. 阅读模式专属设置

css

```
--reading-left-adjust: -1px; /* 阅读模式水平补偿，用于对齐编辑模式位置 */
--show-reading-markers: 1;   /* 阅读模式色块显示开关：1=开启，0=关闭 */
```

> 若阅读模式色块整体偏右，请将 `--reading-left-adjust` 设为更大的负值；若偏左则设为正值。

### 4. 全局标题行高

css

```
--heading-line-height: 1.37; /* 标题统一行高，默认匹配 Obsidian 默认主题 */
```

使用第三方主题出现垂直错位时，可调整此数值匹配主题的标题行高。

### 5. 各层级标题配色

片段中分别为编辑模式与阅读模式配置了六级标题颜色，找到对应层级的 `--marker-color` 替换为目标色值即可自定义配色。

默认配色方案：

|标题层级|颜色色值|色彩描述|
|---|---|---|
|H1|`#FF6B6B`|珊瑚红|
|H2|`#4ECDC4`|蒂芙尼蓝|
|H3|`#FFE66D`|鹅黄色|
|H4|`#A8E6CF`|薄荷绿|
|H5|`#DDA0DD`|淡紫色|
|H6|`#FFB347`|浅橙色|
