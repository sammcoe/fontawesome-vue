import fontawesome from '@fortawesome/fontawesome';
import Vue from 'vue';

const fa = {
  install(Vue, options) {
    Vue.component('fa', {
      props: {
        prefix: {
          type: String,
          default: '',
          required: true
        },
        icon: {
          type: String,
          default: '',
          required: true
        }
      },
      render: function (createElement) {
        return createElement('span', {
          class: {
            icon: true
          },
          domProps: {
            innerHTML: (() => {
              if (this.prefix === 'fab') {
                return fontawesome.icon(require(`@fortawesome/fontawesome-free-brands/${this.icon}`)).html[0];
              } else if (this.prefix === 'fas') {
                return fontawesome.icon(require(`@fortawesome/fontawesome-free-solid/${this.icon}`)).html[0];
              } else if (this.prefix === 'far') {
                return fontawesome.icon(require(`@fortawesome/fontawesome-free-regular/${this.icon}`)).html[0];
              } else return null;
            })()
          }
        });
      }
    });
  }
};

export default fa;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(fa);
}
