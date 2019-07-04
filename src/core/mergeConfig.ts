import { ScrollerConfig, CustomScrollerConfig } from '../types'

export default function mergeConfig(
  config: CustomScrollerConfig
): ScrollerConfig {
  const DEFAULT_CONFIG = {
    post: '.post',
    showNum: 3,
    loadTime: 400,
    style: 'line-scale',
    color: '#f78769'
  }

  return Object.assign(DEFAULT_CONFIG, config)
}
