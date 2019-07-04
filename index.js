'use strict'
hexo.extend.helper.register('infiniteScroll', function(customConfig) {
    const lib = '<script src="https://cdn.jsdelivr.net/gh/frontendsophie/hexo-infinite-scroll@2.0.0-alpha/dist/main.js" defer></script>' 
    const usage = `<script>
        window.addEventListener('DOMContentLoaded', function() {
            infiniteScroll(${customConfig})
        })
    </script>`
    return lib + usage
})