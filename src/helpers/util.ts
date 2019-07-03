export function getEle(selector: string): Element[] {
  const ele = document.querySelectorAll(selector)
  if (ele.length > 0) {
    const results: Element[] = []
    ele.forEach(item => results.push(item))
    return results
  }

  throw new Error(`cannot find ${selector} element`)
}

export function throttle(fn: Function, wait: number) {
  let isCalled = false

  return function(...args: any[]) {
    if (!isCalled) {
      fn(...args)
      isCalled = true

      setTimeout(function() {
        isCalled = false
      }, wait)
    }
  }
}
