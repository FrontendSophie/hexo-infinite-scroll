import { getEle } from '../helpers/util'

export default class Posts {
  private posts: Element[]

  constructor(selector: string) {
    this.posts = getEle(selector)
  }

  partialHide(startIndex: number) {
    if (this.posts) {
      this.posts.forEach((post, index) => {
        if (index > startIndex) {
          post.classList.add('is-hidden')
        }
      })
    }
  }

  show(count: number) {
    this.posts.forEach((post, index) => {
      if (index < count) {
        post.classList.remove('is-hidden')
      }
    })
  }

  size(): number {
    return this.posts.length
  }

  wrapper(): HTMLElement {
    const wrapper = this.posts[0].parentElement
    if (wrapper) {
      return wrapper
    } else {
      throw new Error(`cannot find post wrapper`)
    }
  }
}
