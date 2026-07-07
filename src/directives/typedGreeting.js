import Typed from 'typed.js'

export function initTypedGreeting(el, text) {
  if (!el || !text) return null

  return new Typed(el, {
    strings: [text],
    typeSpeed: 70,
    startDelay: 100,
    showCursor: true
  })
}
