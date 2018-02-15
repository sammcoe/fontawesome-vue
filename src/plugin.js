import GithubVue from './GithubVue.vue';

module.exports = {

  install: function (Vue, options) {

    Vue.component('github-vue', GithubVue);

  }

};