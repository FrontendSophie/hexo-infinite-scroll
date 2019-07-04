import Scroller from './core/Scroller'
import { CustomScrollerConfig } from './types'
import './index.less'
import './loaders.min.css'
;(window as any).infiniteScroll = (config: CustomScrollerConfig) => {
  const scroller = new Scroller(config)
  scroller.init()
}
