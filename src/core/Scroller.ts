import { ScrollerConfig, CustomScrollerConfig } from '../types'
import mergeConfig from './mergeConfig'
import Spinner from './Spinner'
import { throttle } from '../helpers/util'
import Posts from './Posts'

export default class Scroller {
  private config: ScrollerConfig
  private posts: Posts
  private spinner!: Spinner

  constructor(config: CustomScrollerConfig) {
    this.config = mergeConfig(config)
    this.posts = new Posts(this.config.post)
  }

  init() {
    this.posts.partialHide(this.config.showNum)
    this.initSpinner()
    this.addListener()
  }

  private initSpinner() {
    this.spinner = new Spinner(this.posts.wrapper(), this.config)
    this.spinner.init()
  }

  private addListener() {
    let count: number = 1
    let timer: number | null

    window.addEventListener(
      'scroll',
      throttle(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop // mobile compatible
        const scrollHeight = document.documentElement.scrollHeight
        const viewportHeight = window.innerHeight // instead of clientHeight for android compatible
        const REMAINED_GAP = 50
        const reachBottom =
          scrollTop >= scrollHeight - viewportHeight - REMAINED_GAP

        const currentShowCount = count * this.config.showNum
        let isLastPost = currentShowCount >= this.posts.size()

        if (reachBottom && !isLastPost) {
          this.spinner.show()

          if (!timer) {
            timer = setTimeout(() => {
              count++
              this.posts.show(count * this.config.showNum)
              this.spinner.hide()
              timer = null
            }, this.config.loadTime)
          }
        }
      }, 50)
    )
  }
}
