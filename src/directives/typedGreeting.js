import Typed from 'typed.js'

export function initTypedGreeting(el, text) {
  if (!el || !text) return null

  return new Typed(el, {
    strings: [text],
    typeSpeed: 50,
    startDelay: 300,
    showCursor: false
  })
}
