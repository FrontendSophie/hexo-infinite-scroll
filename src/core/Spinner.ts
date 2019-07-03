import { ScrollerConfig } from '../types'
import { LOADER_INNER_DIVS } from '../helpers/constants'

export default class Spinner {
  private el: Element
  private selector: HTMLElement
  private config: ScrollerConfig
  private isShowing: boolean

  constructor(selector: HTMLElement, config: ScrollerConfig) {
    this.el = document.createElement('div')
    this.el.classList.add('loader-inner', config.style, 'is-hidden')
    this.selector = selector
    this.config = config
    this.isShowing = false
  }

  init() {
    this.initSpinner()
    this.render()
  }

  private initSpinner() {
    const { style, color } = this.config
    let divHTML = `<div style="background-color: ${color}"></div>`
    const repeatNum = LOADER_INNER_DIVS[style]
    this.el.innerHTML = `${divHTML.repeat(repeatNum)}`
  }

  show() {
    if (!this.isShowing) {
      this.el.classList.remove('is-hidden')
      this.isShowing = true
      // use property to check instead of classList, so when scrolling even show() is called many times but will not be implemented
    }
  }

  hide() {
    if (this.isShowing) {
      this.el.classList.add('is-hidden')
      this.isShowing = false
    }
  }

  private render() {
    this.selector.classList.add('is-relative')
    this.selector.appendChild(this.el)
  }
}
