# Vue 3 Vertical and Horizontal Scroll Shadow

Component that adds shadow to scrollable area works both with vertical and horizontal scrolling.

## Installation

```bash
npm i vue-scroll-shadow-v3
```

## Usage

```javascript
import VueScrollShadow from "vue-scroll-shadow-v3";
import "vue-scroll-shadow/style.css";
```

```html
<template>
  <vue-scroll-shadow>
    <!-- Scrollable content here -->
  </vue-scroll-shadow>
</template>
```

## Props

| Name            | Type                       | Default  | Description                           |
| --------------- | -------------------------- | -------- | ------------------------------------- |
| scrollDirection | 'vertical' \| 'horizontal' | vertical | The scroll direction of the container |
| shadowLength    | String                     | '15px'   | Size of shadow                        |

### Demo

[Demo Link](https://vue-scroll-shadow-v3.netlify.app)
