![示例图片]（https://github.com/IBARUI/heading-colors/blob/main/SamplePicture.jpg）
# Introduction

- This is a custom CSS snippet designed for Obsidian. It adds colored small block markers to the left of H1~H6 headings to help quickly distinguish heading levels. The snippet supports both Edit mode (Live Preview / Source Mode) and Reading mode.

# Installation Method

1. Save the HeadingColors.css file locally.
2. Open your Obsidian vault folder and navigate to the .obsidian/snippets directory. (Create the folder manually if it does not exist)
3. Place HeadingColors.css into the snippets folder.
4. Open Obsidian → Settings → Appearance, locate the "CSS Snippets" section, and enable HeadingColors to take effect.

# Custom Configuration Instructions

## 1. Basic Marker Size
```css
marker-width: 8px;   /* Marker block width */
marker-height: 10px; /* Marker block height */
marker-radius: 2px;  /* Marker block rounded corner radius; set to 0 for right angles */
```

## 2. Position Offset for Edit Mode
```css
marker-left: -14px;    /* Horizontal offset; negative values shift left, positive values shift right */
marker-vertical: 0px;  /* Vertical offset; positive values shift down, negative values shift up */
```

## 3. Exclusive Settings for Reading Mode
```css
reading-left-adjust: -1px; /* Horizontal offset compensation for Reading Mode to align positions with Edit Mode */
show-reading-markers: 1;   /* Toggle for markers in Reading Mode: 1 = enabled, 0 = disabled */
```

## 4. Global Heading Line Height
```css
heading-line-height: 1.37; /* Unified line height for all headings, matches Obsidian default theme by default */
```

- Adjust this value to match the heading line height of third-party themes if vertical misalignment occurs.

## 5. Color Configuration for Each Heading Level

- Separate marker-color values for Edit Mode and Reading Mode are configured in the snippet. Locate the corresponding level's `marker-color` and replace it with your target color code to customize colors.

### 5.1 Default Color Scheme:

|Heading Level|Color Code|Color Name|
|---|---|---|
|H1|`#FF6B6B`|Coral Red|
|H2|`#4ECDC4`|Tiffany Blue|
|H3|`#FFE66D`|Butter Yellow|
|H4|`#A8E6CF`|Mint Green|
|H5|`#DDA0DD`|Lavender|
|H6|`#FFB347`|Light Orange|
