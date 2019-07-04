# hexo-infinite-scroll

[![Maintainability](https://api.codeclimate.com/v1/badges/2027fb1201b8dbe0ea7f/maintainability)](https://codeclimate.com/github/FrontendSophie/hexo-infinite-scroll/maintainability)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/FrontendSophie/hexo-infinite-scroll/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


> ⌛ A fake infinite loading plugin for hexo.


[View demo](http://ssnowy.coding.me/demo-autumn/)

## Install
```
npm install hexo-infinite-scroll -S
```

## Usage

Check `head.ejs`(or `head.swig`) in the theme folder and add:

```
<%- infiniteScroll() %>
```

#### Tips

In case not working, please check `_config.yml` and set all the `per_page` to 0 to disable pagination.

## Config

| key | description | default | type |
| :--- | --------- | -------- | ------ |
| post | selector of post | '.post'| string |
| showNum | posts show number per scroll | 3 | number |
| loadTime | loading animation show time(ms) | 400 | number |
| style | class Name of loader | 'line-scale'  | string |
| color | color of loader | '#f78769'  | string |

#### About Loaders

Loaders are all generated through [loaders.css](https://github.com/ConnorAtherton/loaders.css) by ConnorAtherton.    
[Click to preview](https://connoratherton.com/loaders) and pick up what you like.  
Set its className to the config, for example:
```
<%- infiniteScroll({
    style: 'ball-pulse'
}) %>
```
🎉

## About v2

#### Improvements

+ Abandoned jquery and embraced TypeScript.
+ Simplified install process, followed hexo plugin custom (use npm install), bundled js and css into one file.
+ Fixed Android scroll bug.
+ More loader options coming from loaders.css.

#### Breaking changes from v1

+ API: 
    - v2 flattened and renamed API to be more readable.
    - v2 removed `loading.enabled` option which means loader will always display. 
+ Loaders: 
    - v2 replaced old loaders with new loaders from loaders.css.

v1 is still available and its source code is now under `v1/` folder.