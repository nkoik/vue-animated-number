import { countFullstops } from './helpers'
import anime from 'animejs/lib/anime.es.js'

function easeCheck(easing: string): string {
  if (countFullstops(easing) !== 1) {
    throw new Error('Invalid ease type. (eg. easing="linear")')
  }
  return easing
}

export function animate (obj: Record<string, string | number>, options: Record<string, any>, key = 'tweenedNumber'): anime.AnimeInstance {
  return anime({
    targets: obj,
    [key]: options[key],
    easing: options.easing,
    update: options.onUpdate,
    complete: options.onComplete,
    begin: options.onStart,
    ...options
})
  // return gsap.to(obj, {
  //   [key]: options[key],
  //   ease: easeCheck(options.ease),
  //   ...options
  // })
}