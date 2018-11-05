/**
 * https://github.com/FrontendSophie/hexo-infinite-scroll
 * A fake infinite loading plugin for hexo.
 * @version v1.0.0
 * @author Sophie He
 * @copyright ©2018 Sophie He
 * Released under the MIT license
 **/

(function (exports) {
  const generateOptions = customOptions => {
    let defaultOptions = {
      item: '.post',
      pageSize: 3,
      time: 400,
      loading: {
        enabled: true,
        style: 'wave',
        color: '#f78769'
      }
    }

    const deepCombine = (defaultOptions, customOptions) => {
      for (let key in customOptions) {
        if (typeof customOptions[key] !== 'object') {
          defaultOptions[key] = customOptions[key]
        } else {
          deepCombine(defaultOptions[key], customOptions[key])
        }
      }
      return defaultOptions
    }

    return deepCombine(defaultOptions, customOptions)
  }

  const addLoadingAnimation = options => {
    let spanHTML = '<span></span>'
    let loadingHTML = `<div class="loading">${spanHTML.repeat(5)}</div>`
    if (options.loading.style === 'circle') {
      loadingHTML = `<div class="loading">${spanHTML.repeat(8)}</div>`
    }
    $(options.item)
      .parent()
      .append(loadingHTML)

    $('.loading').addClass(options.loading.style)
    $('.loading span').css('background', options.loading.color)
  }

  const removeLoadingAnimation = () => {
    if ($('.loading')) {
      $('.loading').remove()
    }
  }

  const infiniteScroll = customOptions => {
    let options = generateOptions(customOptions)

    $(document).ready(() => {
      let count = 1
      const pageSize = options.pageSize
      const totalCount = $(options.item).length

      if (totalCount > 1) {
        // check if it is post detail page

        // default settings
        $(options.item).hide()
        $(options.item)
          .slice(0, pageSize)
          .show()
        $(options.item)
          .parent()
          .css('position', 'relative')
        let isLoading = false

        const showNext = () => {
          let isBottom =
            $(document).scrollTop() >= $(document).height() - $(window).height()
          let currentPageCount = count * pageSize
          let isEnd = currentPageCount >= totalCount

          if (isBottom && !isEnd && !isLoading) {
            isLoading = true
            if (options.loading.enabled) {
              addLoadingAnimation(options)
            }

            const showContent = () => {
              count++
              $(options.item)
                .slice(0, count * pageSize)
                .show()
              isLoading = false
              removeLoadingAnimation()
            }
            setTimeout(showContent, options.time)
          }
        }
        $(window).scroll(showNext)
      }
    })
  }

  exports.infiniteScroll = infiniteScroll;
})(window);