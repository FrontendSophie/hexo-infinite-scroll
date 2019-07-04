# [deprecated]hexo-infinite-scroll@1.0.0

[![Maintainability](https://api.codeclimate.com/v1/badges/2027fb1201b8dbe0ea7f/maintainability)](https://codeclimate.com/github/FrontendSophie/hexo-infinite-scroll/maintainability)
[![](https://data.jsdelivr.com/v1/package/gh/frontendsophie/hexo-infinite-scroll/badge)](https://www.jsdelivr.com/package/gh/frontendsophie/hexo-infinite-scroll)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/FrontendSophie/hexo-infinite-scroll/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


> 💮 A fake infinite loading plugin for hexo.

[View demo](http://ssnowy.coding.me/demo-autumn/)

## Installation & Usage

Check `head.ejs`(or `head.swig`) in the theme folder and add below:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/frontendsophie/hexo-infinite-scroll@1.0.0/dist/hexo-infinite-scroll.min.css">
<script src="https://cdn.jsdelivr.net/gh/frontendsophie/hexo-infinite-scroll@1.0.0/dist/hexo-infinite-scroll.min.js"></script>
<script>infiniteScroll();</script>
```

#### Tips

- This library depends on `jQuery`, please make sure `jQuery` has been loaded.
- In case not working, please check `_config.yml` and set all the `per_page` to 0 to disable pagination.
- To abandon animation, simply set `loading.enabled` to `false` and leave the css file.

## General Options

| key      | description               | default                                            | type   |
| :------- | ------------------------- | -------------------------------------------------- | ------ |
| item     | target item className     | `.post`                                            | string |
| pageSize | show num at a time        | 3                                                  | number |
| time     | load time(ms)             | 400                                                | number |
| loading  | loading animation options | { enabled: true, style: 'wave', color: '#f78769' } | object |

## Loading Options

| key     | values                   | default   | type    |
| :------ | ------------------------ | --------- | ------- |
| enabled | true, false              | true      | boolean |
| style   | `wave`, `line`, `circle` | `wave`    | string  |
| color   | ...                      | `#f78769` | string  |

#### Style Preview

- wave

![wave](https://cdn.jsdelivr.net/gh/frontendsophie/hexo-infinite-scroll@1.0.0/src/img/wave.gif)

- line

![line](https://cdn.jsdelivr.net/gh/frontendsophie/hexo-infinite-scroll@1.0.0/src/img/line.gif)

- circle

![circle](https://cdn.jsdelivr.net/gh/frontendsophie/hexo-infinite-scroll@1.0.0/src/img/circle.gif)
