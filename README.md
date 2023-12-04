# Animated Number Vue 3 & 2
![npm](https://img.shields.io/npm/dt/vue-number-animation) ![icon](https://img.shields.io/badge/Vue_3-black?logo=vue.js) ![icon](https://img.shields.io/badge/_-typescript-black?logo=typescript)

Simple & lightweight animated number plugin designed for Vue.js 3.0 & 2.x. This plugin provides animated transitions for numeric values, enhancing the visual appeal of numerical data in Vue.js applications.

![icon](https://i.ibb.co/Px607v8/image-1-1.png)

## Key Features:

>-  Vue 3 & 2 (with animejs) is supported in version 2.x.x. ![icon](https://img.shields.io/badge/Vue_3-black?logo=vue.js) ![icon](https://img.shields.io/badge/Vue_2-black?logo=vue.js) [![npm](https://img.shields.io/npm/v/vue-number-animation.svg)](https://www.npmjs.com/package/vue-number-animation)
>- Vue 2 (with gsap) is supported in version 1.x.x. ![icon](https://img.shields.io/badge/Vue_2-black?logo=vue.js) ![Static Badge](https://img.shields.io/badge/npm-1.1.2-blue)

## Demo:

Explore the demo for version 1.x.x [here](https://codesandbox.io/s/8256nwlq78).

## Installation:

To integrate the Animated Number Vue plugin into your project, follow the installation steps below.

```bash
npm install vue-number-animation
```

For Vue versions <=2.6 and vue-number-animation@2.x.x, ensure you also install `@vue/composition-api`.

## Usage:

Register the Animated Number component in your Vue application as demonstrated in the code snippet below:

```javascript
// For version 2.x.x - import the component as usual
import NumberAnimation from "vue-number-animation";

// For version 1.x.x
import Vue from "vue";
import VueNumber from "vue-number-animation";

Vue.use(VueNumber);
```

In your Vue file, utilize the Animated Number component:

```javascript
// For version 2.x.x
<NumberAnimation
    ref="number1"
	:from="100"
	:to="10000"
	:format="theFormat"
	:duration="5"
	autoplay
    easing="linear"
/>

// For version 1.x.x
<number
    tag="div"
    animationPaused
    ref="number2"
	:to="10000"
	:duration="5"
    easing="Back.easeIn"
    @complete="completed"
    @click="playAnimation"/>
```

## API:

| **Property** | **Description**     | **Type** | **Default** |
| ----------------- | ------------------- | -------- | ----------- |
| to                | Animation end point | number   | 100           |
| tag                                                                | Element wrapper                                       | string   | 'span'                                                          |
| from                                                               | Animation start point                                 | number   | 0                                                               |
| duration                                                           | Duration of the animation (seconds)                   | number   | 1                                                               |
| delay                                                              | Amount of delay (seconds) before the animation starts | number   | 0                                                               |
| easing                                                             | Ease of the animation                                 | string   | 'linear' (for version 2.x.x) / 'Power1.easeOut' (for version 1.x.x) |
| autoplay (for version 2.x.x) / animationPaused (for version 1.x.x) | Pauses animation at starting point                    | boolean  | true (for version 2.x.x) / false (for version 1.x.x)                                                           |

#### Easing:

- For version 2.x.x: Choose from various eases to control the rate of change during the animation. Refer to [animejs documentation](https://animejs.com/documentation/#linearEasing).

- For version 1.x.x: Choose from various eases to control the rate of change during the animation. Refer to [GreenSock Easing documentation](https://greensock.com/docs/Easing). Don't forget the '.' between ease name, e.g., `Circ.easeInOut`.

#### Events:

| **Event** | **Description**                                                                        |
| --------- | -------------------------------------------------------------------------------------- |
| start    | Called when the animation has started                                                  |
| complete | Called when the animation has completed                                                |
| update   | Called every time the animation updates (on every frame while the animation is active) |

#### Methods:

| **Method** | **Description**                                        |
| ---------- | ------------------------------------------------------ |
| play     | Starts the animation                                   |
| pause    | Pauses the animation                                   |
| restart  | Restarts and begins playing forward from the beginning |

[![GitHub license](https://img.shields.io/github/license/nkoik/vue-animated-number.svg)](https://github.com/nkoik/vue-animated-number/blob/master/LICENSE)
