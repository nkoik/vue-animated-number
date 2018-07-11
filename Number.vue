<template>
    <span v-on="$listeners" v-bind="$attrs">{{ tweenedNumber }}</span>
</template>

<script>
import {TweenLite} from 'gsap'
// Returns the number of full stop in given string.
const countFullstops = (str) => str.replace(/[^.]/g, '').length

export default {
  name: 'number',
  props: {
    from: {
      type: [Number, String],
      default: 0
    },
    to: {
      type: [Number, String],
      required: true,
      default: 0
    },
    format: {
      type: Function,
      default: (num) => parseInt(num)
    },
    duration: {
      type: Number,
      default: 1 // Duration of animation in seconds
    },
    easing: {
      type: String,
      default: 'Power1.easeOut'
    },
    delay: {
      type: Number,
      default: 0 // Delay the animation in seconds
    },
    animationPaused: Boolean // Stops animation before start
  },
  data() {
    return { 
      fromProp: this.from
    }
  },
  computed: {
    tweenedNumber () {
      return this.format(this.fromProp)
    }
  },
  methods: {
    tween (value) {
      const vm = this
      const tLite = TweenLite
        .to(vm.$data, vm.duration, {
          fromProp: value,
          paused: vm.animationPaused,
          ease: vm.easeCheck(),
          onStart: () => vm.$emit('start'),
          onComplete: () => vm.$emit('complete'),
          onUpdate: () => vm.$emit('update'),
          delay: vm.delay // In seconds
        })
      vm.tween.tLite = tLite
    },
    play () {
      this.tween.tLite.play()
    },
    pause () {
      this.tween.tLite.pause()
    },
    restart () {
      this.tween.tLite.restart()
    },
    easeCheck () {
      const vm = this
      if (countFullstops(vm.easing) !== 1) {
        throw new Error('Invalid ease type. (eg. easing="Power1.easeOut")')
      }
      return vm.easing
    }
  },
  watch: {
    to (newValue) {
      this.tween(newValue)
    }
  },
  mounted() {
    this.tween(this.to)
  }
}
</script>

<style>

</style>
