import { countFullstops } from './helpers'
import anime from 'animejs/lib/anime.es.js'

function easeCheck(easing: string): string {
  if (countFullstops(easing) > 0) {
    console.error('Invalid ease type. Please use anime.js ease types.')
    return 'linear'
  }
  return easing
}

export function animate (obj: Record<string, string | number>, options: Record<string, any>, key = 'tweenedNumber'): anime.AnimeInstance {
  return anime({
    targets: obj,
    [key]: options[key],
    easing: easeCheck(options.easing),
    update: options.onUpdate,
    complete: options.onComplete,
    begin: options.onStart,
    ...options
  })
}