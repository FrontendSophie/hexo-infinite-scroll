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
    this.posts = new Posts(this.config.postClass)
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
        const {
          scrollTop,
          scrollHeight,
          clientHeight
        } = document.documentElement
        const REMAINED_GAP = 50
        const reachBottom =
          scrollTop >= scrollHeight - clientHeight - REMAINED_GAP

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
