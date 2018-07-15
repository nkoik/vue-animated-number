# Animated Counter - Number  ![VueJS v2.x compatible](https://img.shields.io/badge/vue%202.x-compatible-green.svg)

This is a Vue number plugin. It animates the number that you pass in prop.

[![GitHub license](https://img.shields.io/github/license/nkoik/vue-animated-number.svg)](https://github.com/nkoik/vue-animated-number/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/vue-number-animation.svg)](https://www.npmjs.com/package/vue-number-animation) ![icon](https://www.programwitherik.com/content/images/2017/01/87ow-1.png)

## ✔ Demo

https://codesandbox.io/s/8256nwlq78

## ✔ Installation

Get the package:
```bash
npm install vue-number-animation
```

## ✔ Use

Register Animate Number in your app:
```js
import Vue from 'vue'
import VueNumber from 'vue-number-animation'

Vue.use(VueNumber)

```

In your Vue file you can call it like this:

```html
<number
    ref="number1"
	:from="100"
	:to="10000"
	:format="theFormat"
	:duration="5"
    :delay="2"
    easing="Power1.easeOut"/>

<number
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

| Property | Description | Type | Default |
|:--|:--|:--|:--|
| to | Animation end point | <i>Number</i> | - |

Optional Props

| Property | Description | Type | Default |
|:--|:--|:--|:--|
| from | Animation start point | <i>Number</i> | 0 |
| duration | Duration of the animation (seconds) | <i>Number</i> | 1 |
| delay | Amount of delay (seconds) before the animation starts | <i>Number</i> | 0 |
| easing | Ease of the animation | <i>String</i> | 'Power1.easeOut' |
| animationPaused | Pauses animation at starting point | <i>Boolean</i> | false |

#### Easing prop
> Choose from various eases to control the rate of change during the animation.
These are all the values that the prop gets. https://greensock.com/docs/Easing

>![eases](https://image.ibb.co/fAYNBo/EASES.png)

``` Don't forget the '.' between ease name eg. Circ.easeInOut```

Events

| Event | Description |
|:--|:--|
| @start | Called when the animation has started |
| @complete | Called when the animation has completed |
| @update | Called every time the animation updates (on every frame while the animation is active) |

Methods

| Method | Description |
|:--|:--|
| play() | Starts the animation |
| pause() | Pauses the animation |
| restart() | Restarts and begins playing forward from the beginning |

## ✔ License

MIT