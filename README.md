## Introduction 简介

This is a custom CSS snippet built for Obsidian. It adds small colored blocks to the left of H1~H6 headings to help you quickly distinguish heading levels. The snippet supports both Edit Mode (Live Preview / Source Mode) and Reading Mode.

这是一款为 Obsidian 设计的自定义 CSS 代码片段，作用是在 H1~H6 各级标题左侧添加彩色小色块标记，帮助快速区分标题层级。片段同时兼容**编辑模式（实时预览 / 源码模式）**与**阅读模式**。

## Features 功能特性

Separate unique marker colors for H1-H6, bringing clear visual hierarchy

为六级标题分别配置独立的标识色，视觉层级清晰

Fully customizable block size, border radius and position via CSS variables

色块尺寸、圆角、位置均可通过 CSS 变量自由自定义
  
Unified heading line height to minimize visual offset between Edit and Reading Mode

统一标题行高，最大程度消除编辑与阅读模式的视觉偏移

Toggle markers visibility in Reading Mode independently

支持独立开关阅读模式的色块显示

Horizontal offset adjustment for Reading Mode to fit various themes

提供阅读模式水平位置补偿参数，适配不同主题风格

## Installation Guide 安装方法

Save the file HeadingColors.css to your local computer.  

将 HeadingColors.css 文件保存到本地

Open your Obsidian vault folder and navigate to .obsidian/snippets (create the folder manually if it does not exist).

打开你的 Obsidian 库目录，进入 .obsidian/snippets 文件夹（若文件夹不存在请手动创建）

Put HeadingColors.css into the snippets folder.


Open Obsidian → Settings → Appearance, find the CSS Snippets section, click refresh, then enable HeadingColors.

打开 Obsidian → 设置 → 外观，找到「CSS 代码片段」区域，点击刷新按钮，开启 HeadingColors 即可生效

## Configuration Instructions 配置说明

All adjustable parameters are defined in the `:root` variables at the top of the CSS file. Modify the values directly to take effect globally.

所有可调参数均定义在文件顶部的 `:root` 变量中，直接修改对应数值即可全局生效。

### 1. Basic Marker Size 色块基础尺寸

```css
marker-width: 8px;   /* Marker width 色块宽度 */
marker-height: 10px; /* Marker height 色块高度 */
marker-radius: 2px;  /* Border radius; set to 0 for sharp corners 色块圆角大小，设为 0 则为直角 */
```

### 2. Position Offset for Edit Mode 编辑模式位置偏移

```css
marker-left: -14px;    /* Horizontal offset: negative = left, positive = right 水平偏移，负值向左移动，正值向右移动 */
marker-vertical: 0px;  /* Vertical offset: positive = down, negative = up 垂直偏移，正值向下移动，负值向上移动 */
```

### 3. Reading Mode Exclusive Settings 阅读模式专属设置

```css
reading-left-adjust: -1px; /* Horizontal compensation to align markers with Edit Mode 阅读模式水平补偿，用于对齐编辑模式位置 */
show-reading-markers: 1;   /* Toggle markers in Reading Mode: 1 = show, 0 = hide 阅读模式色块显示开关：1=开启，0=关闭 */
```

If markers shift right in Reading Mode, use a larger negative value for `reading-left-adjust`. Use positive values if markers shift left.
若阅读模式色块整体偏右，请将 `reading-left-adjust` 设为更大的负值；若偏左则设为正值。

### 4. Global Heading Line Height 全局标题行高

```css
heading-line-height: 1.37; /* Unified heading line height, matches Obsidian default theme 标题统一行高，默认匹配 Obsidian 默认主题 */
```

Adjust this value to match your theme’s heading line height if vertical misalignment occurs with third-party themes.

使用第三方主题出现垂直错位时，可调整此数值匹配主题的标题行高。

### 5. Heading Color Scheme 各层级标题配色

Separate colors are assigned for Edit Mode and Reading Mode. Replace `marker-color` of corresponding heading levels to customize colors.

片段中分别为编辑模式与阅读模式配置了六级标题颜色，找到对应层级的 `marker-color` 替换为目标色值即可自定义配色。

Default color palette 默认配色方案：

|Heading Level 标题层级|Color Code 颜色色值|Color Description 色彩描述|
|---|---|---|
|H1|`#FF6B6B`|Coral Red 珊瑚红|
|H2|`#4ECDC4`|Tiffany Blue 蒂芙尼蓝|
|H3|`#FFE66D`|Cream Yellow 鹅黄色|
|H4|`#A8E6CF`|Mint Green 薄荷绿|
|H5|`#DDA0DD`|Lavender Purple 淡紫色|
|H6|`#FFB347`|Light Orange 浅橙色|

![标题色块效果演示](https://github.com/IBARUI/heading-colors/blob/main/01.jpg)
