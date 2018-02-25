## Note: As of right now, the dynamic import isn't playing well with Nuxt and/or Webpack.  This results in each entire icon pack being included in the bundle isntead of individual icons.  I'm not sure right now if I should or how I can solve this-- check out the [Nuxt Fontawesome module](https://github.com/vaso2/nuxt-fontawesome), which works well with a little extra setup.

# fontawesome-vue
This is a Vue plugin to make rendering Font Awesome 5 SVG Icons simple in Vue applications.

**fontawesome-vue** is SSR friendly and works easily as a plugin component for Nuxt applications.

## Installation
`npm install fontawesome-vue`

## Usage
Placing the component into a Vue application is as simple as importing it:
`import fa from 'fontawesome-vue'`
and adding the tag:
`<fa prefix="fab" icon="faTwitter"/>`

### prefix
Font Awesome 5 has seperated the icons into distinct icon packs, they are:
#### Font Awesome Solid - fas
#### Font Awesome Brands - fab
#### Font Awesome Regular - far

### icon
The icon attribute simply takes the name of the icon you want to use, as it appears in the Font Awesome libarary-- with one exception.
Instead of kebab case, use camel case.  For example:
`faTwitter` instead of `fa-twitter`

## Nuxt
This package was developed specifically with Nuxt in mind.  Setup in a Nuxt project as a plugin is quick and straightforward.

### 1. Plugin File
Create a file in `~/plugins` called `fontawesome-vue.js` and add these lines of code:
```
import Vue from 'vue';
import fa from 'fontawesome-vue';

Vue.use(fa);
```

### 2. Nuxt Config
Add the following `vendor` and `plugins` pieces to your `nuxt.config.js` files:
```
module.exports = {
  ...
  build: {
    ...
    vendor: ['fontawesome-vue']
  },
  plugins: ['~/plugins/fontawesome-vue']
  ...
}
```

You will now be able to use the `fa` component throughout your application.
