# Animated Number Vue 2 & 3

`Simple, lightweight animated number plugin for Vue.js 2.x & 3.0`
[![GitHub license](https://img.shields.io/github/license/nkoik/vue-animated-number.svg)](https://github.com/nkoik/vue-animated-number/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/vue-number-animation.svg)](https://www.npmjs.com/package/vue-number-animation) ![icon](https://www.programwitherik.com/content/images/2017/01/87ow-1.png)

##### Vue 2 (with gsap) -> vue-number-animation@ 1.x.x

#### Vue 2 & 3 (with animejs) -> vue-number-animation@ 2.x.x

## ✔ Demo @1.x.x

https://codesandbox.io/s/8256nwlq78

## ✔ Installation

Get the package:
For Vue <=2.6 & vue-number-animation@2.x.x, you need to install @vue/composition-api.

```bash
npm install vue-number-animation
```

## ✔ Use

Register Animate Number in your app:

```js
//For @2.x.x
import VueNumberAnimation from "vue-number-animation";

//For @1.x.x
import Vue from "vue";
import VueNumber from "vue-number-animation";

Vue.use(VueNumber);
```

In your Vue file you can call it like this:

```js
// For @2.x.x
<VueNumberAnimation
    ref="number1"
	:from="100"
	:to="10000"
	:format="theFormat"
	:duration="5"
	autoplay
    easing="linear"
/>

// For @1.x.x
<number
    tag="div"
    animationPaused
    ref="number2"
	:to="10000"
	:duration="5"
    easing="Back.easeIn"
    @complete="completed"
    @click="playAnimation"/>

<script>
export default {
    // Sets the format of the number
    methods: {
        theFormat(number) {
            return number.toFixed(2);
        },
        completed() {
            console.log('Animation ends!');
        },
        playAnimation() {
            this.$refs.number2.play()
        }
    }
}
</script>
```

### API

Required Prop

| Property | Description         | Type          | Default |
| :------- | :------------------ | :------------ | :------ |
| to       | Animation end point | <i>Number</i> | -       |

Optional Props

| Property                                 | Description                                           | Type           | Default                                   |
| :--------------------------------------- | :---------------------------------------------------- | :------------- | :---------------------------------------- |
| tag                                      | Element wrapper                                       | <i>String</i>  | 'span'                                    |
| from                                     | Animation start point                                 | <i>Number</i>  | 0                                         |
| duration                                 | Duration of the animation (seconds)                   | <i>Number</i>  | 1                                         |
| delay                                    | Amount of delay (seconds) before the animation starts | <i>Number</i>  | 0                                         |
| easing                                   | Ease of the animation                                 | <i>String</i>  | @1.x.x 'Power1.easeOut' - @2.x.x 'linear' |
| @1.x.x animationPaused - @2.x.x autoplay | Pauses animation at starting point                    | <i>Boolean</i> | false                                     |

#### Easing prop with animejs @2.x.x

> Choose from various eases to control the rate of change during the animation.
> These are all the values that the prop gets. https://animejs.com/documentation/#linearEasing

##### Easing prop @1.x.x

> Choose from various eases to control the rate of change during the animation.
> These are all the values that the prop gets. https://greensock.com/docs/Easing

```
Don't forget the '.' between ease name eg. Circ.easeInOut
```

Events

| Event     | Description                                                                            |
| :-------- | :------------------------------------------------------------------------------------- |
| @start    | Called when the animation has started                                                  |
| @complete | Called when the animation has completed                                                |
| @update   | Called every time the animation updates (on every frame while the animation is active) |

Methods

| Method    | Description                                            |
| :-------- | :----------------------------------------------------- |
| play()    | Starts the animation                                   |
| pause()   | Pauses the animation                                   |
| restart() | Restarts and begins playing forward from the beginning |

## ✔ License

MIT
