import Number from './Number.vue'

const VueNumber = {
  install: function (Vue) {
    Vue.component('number', Number)
  }
}

export default VueNumber

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueNumber)
}
