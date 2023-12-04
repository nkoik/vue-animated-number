<script lang="ts">
import {
  defineComponent,
  PropType,
  h,
  reactive,
  watch,
  toRefs,
} from "vue-demi";
import { animate } from "../utils/animate";

export default defineComponent({
  props: {
    from: {
      type: [String, Number] as PropType<number>,
      default: 0,
    },
    to: {
      type: [String, Number] as PropType<number>,
      default: 100,
    },
    format: {
      type: Function as PropType<(num: number | string) => number | string>,
      default: (num: number) => num,
    },
    duration: {
      type: Number as PropType<number>,
      default: 1,
    },
    easing: {
      type: String as PropType<string>,
      default: "linear",
    },
    delay: {
      type: Number as PropType<number>,
      default: 0,
    },
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: "span",
    },
    autoplay: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  emits: ["start", "complete", "update"],
  // @ts-ignore
  setup(props, { emit, expose }) {
    const state: Record<string, string | number> = reactive({
      tweenedNumber: props.from,
      displayNumber: props.format(props.from),
    });
    function animateWrapper(val: number = props.to) {
      return animate(state, {
        tweenedNumber: val,
        duration: props.duration * 1000,
        easing: props.easing,
        delay: props.delay,
        autoplay: props.autoplay,
        onUpdate: () => {
          state.displayNumber = props.format(state.tweenedNumber);
          emit("update");
        },
        onStart: () => emit("start"),
        onComplete: () => emit("complete", state.displayNumber),
      });
    }
    let animatedInstance = animateWrapper();
    function play(): void {
      animatedInstance.play();
    }
    function pause(): void {
      animatedInstance.pause();
    }
    function restart(): void {
      animatedInstance.restart();
    }
    watch(
      () => props.to,
      (newVal: number) => {
        // @ts-ignore
        animatedInstance.remove(state);
        animatedInstance = animateWrapper(newVal);
      }
    );

    expose({
      ...toRefs(state),
      play,
      pause,
      restart,
    });
    return () => h(props.tag, state.displayNumber);
  },
});
</script>
