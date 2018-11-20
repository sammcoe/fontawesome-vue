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
              const types = {
                fab: 'brands',
                fas: 'solid',
                far: 'regular',
              };
              
              if (typeof types[this.prefix] !== 'undefined'){
                return fontawesome.icon(
                        require(`@fortawesome/fontawesome-free-brands/${this.icon}`)
                       ).html[0];
              }
              
              return null;
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
