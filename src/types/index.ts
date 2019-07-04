import { LOADER_INNER_DIVS } from '../helpers/constants'

export interface ScrollerConfig {
  post: string
  showNum: number
  loadTime: number
  style: keyof typeof LOADER_INNER_DIVS
  color: string
}

export type CustomScrollerConfig = {
  [P in keyof ScrollerConfig]?: ScrollerConfig[P]
}

export interface Scroller {
  init(): void
}

export interface Spinner {
  init(): void
  show(): void
  hide(): void
}

export interface Posts {
  partialHide(startIndex: number): void
  show(count: number): void
  size(): number
  wrapper(): HTMLElement
}
