# hexo-infinite-scroll

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/2027fb1201b8dbe0ea7f/maintainability)](https://codeclimate.com/github/FrontendSophie/hexo-infinite-scroll/maintainability)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/FrontendSophie/hexo-infinite-scroll/blob/master/LICENSE)

> A loading plugin with simple effect for hexo.

## Demo
[View demo](http://ssnowy.coding.me/demo-autumn/)

## Usage

In normal conditions, find `head.ejs` (or `head.swig`) in the theme folder, import and run.

```
<link rel="stylesheet" href="http://osly086qe.bkt.clouddn.com/hexo-infinite-scroll-v1.0.1.min.css">
<script src="http://osly086qe.bkt.clouddn.com/hexo-infinite-scroll-v1.0.3.min.js"></script>
<script>
    infiniteScroll({
    // default options
      item: '.post',
      pageSize: 3,
      time: 400,
      loading: {
        enabled: true,
        style: 'wave',
        color: '#f78769'
      }
    })
</script>
```

#### Tips

* This lib depends on `jQuery`, so make sure `jQuery` has been loaded.
* If loading animation is needless, simply set `loading.enabled` to `false` and leave the css file.
* Check `_config.yml` and set all the `per_page` to 0 to disable pagination or it won't work.

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

* wave

![line](http://osly086qe.bkt.clouddn.com/wave.gif)

* line

![line](http://osly086qe.bkt.clouddn.com/line.gif)

* circle

![line](http://osly086qe.bkt.clouddn.com/circle.gif)
