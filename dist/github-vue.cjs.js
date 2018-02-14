'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));

var GithubVue = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.userInfo.name ? _c('div', { staticClass: "card is-round", class: { borderless: _vm.noBorder, hcard: !_vm.vertical, vcard: _vm.vertical } }, [_c('div', { staticClass: "card-content" }, [_c('div', { staticClass: "tile is-ancestor", class: _vm.verticalCard }, [_c('div', { staticClass: "tile is-vertical" }, [_c('div', { staticClass: "tile is-parent" }, [_vm.avatar ? _c('div', { staticClass: "tile is-child has-text-right is-5" }, [_c('figure', { staticClass: "image is-48x48 is-pulled-right sm-margin" }, [_c('img', { attrs: { "src": _vm.userInfo.avatarUrl, "alt": "github avatar" } })])]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "tile is-child" }, [_c('div', { staticClass: "title is-4 has-text-black", class: _vm.centerName }, [_vm._v(" " + _vm._s(_vm.userInfo.name) + " ")]), _vm._v(" "), _c('div', { staticClass: "subtitle is-6s has-text-primary", class: _vm.centerName }, [_c('a', { attrs: { "href": _vm.userInfo.url } }, [_vm._v("@" + _vm._s(_vm.userInfo.login))])])])]), _vm._v(" "), _c('div', { staticClass: "tile is-parent" }, [_vm.bio ? _c('div', { staticClass: "tile is-child has-text-centered" }, [_c('p', { staticClass: "subtitle is-6 has-text-black" }, [_vm._v(_vm._s(_vm.userInfo.bio))])]) : _vm._e()]), _vm._v(" "), _vm.hireable || _vm.company || _vm.email ? _c('div', { staticClass: "tile is-parent is-vertical has-text-centered" }, [_c('div', { staticClass: "tile is-child" }, [_vm.hireable ? _c('article', [_c('i', { staticClass: "fas fa-check-square has-text-success" }), _vm._v(" "), _c('b', [_vm._v(" Available for hire.")])]) : _vm._e(), _vm._v(" "), _vm.company ? _c('article', [_c('i', [_vm._v(_vm._s(_vm.userInfo.company))])]) : _vm._e(), _vm._v(" "), _vm.email ? _c('article', [_vm._v(_vm._s(_vm.userInfo.email))]) : _vm._e()])]) : _vm._e()]), _vm._v(" "), !_vm.vertical ? _c('div', { staticClass: "is-divider-vertical no-pad" }) : _vm._e(), _vm._v(" "), _vm.vertical ? _c('div', { staticClass: "is-divider no-pad" }) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "tile is-child" }, [_c('div', { staticClass: "level sm-margin" }, [_c('div', { staticClass: "level-item has-text-centered" }, [_c('div', [_c('p', { staticClass: "title has-text-black" }, [_vm._v(_vm._s(_vm.userInfo.repositories.totalCount))]), _vm._v(" "), _c('p', { staticClass: "heading has-text-black" }, [_vm._v("REPOS")])])]), _vm._v(" "), _c('div', { staticClass: "level-item has-text-centered" }, [_c('div', [_c('p', { staticClass: "title has-text-black" }, [_vm._v(_vm._s(_vm.userInfo.followers.totalCount))]), _vm._v(" "), _c('p', { staticClass: "heading has-text-black" }, [_vm._v("FOLLOWERS")])])]), _vm._v(" "), _c('div', { staticClass: "level-item has-text-centered" }, [_c('div', [_c('p', { staticClass: "title has-text-black" }, [_vm._v(_vm._s(_vm.userInfo.following.totalCount))]), _vm._v(" "), _c('p', { staticClass: "heading has-text-black" }, [_vm._v("FOLLOWING")])])])]), _vm._v(" "), _c('div', { staticClass: "is-divider sm-margin" }), _vm._v(" "), _c('div', { staticClass: "heading has-text-centered has-text-black" }, [_vm._v("TOP REPOSITORIES")]), _vm._v(" "), _c('table', { staticClass: "table sm-margin" }, [_c('tbody', _vm._l(_vm.userInfo.pinnedRepositories.nodes, function (repo) {
      return _c('tr', { key: repo.name }, [_c('td', [_c('a', { staticClass: "has-text-primary", attrs: { "href": repo.url } }, [_vm._v(" " + _vm._s(repo.name) + " ")])]), _vm._v(" "), _c('td', { staticClass: "has-text-centered" }, [_c('span', { staticClass: "tag", style: { backgroundColor: repo.primaryLanguage.color, color: _vm.invertColor(repo.primaryLanguage.color, true) } }, [_vm._v(" " + _vm._s(repo.primaryLanguage.name) + " ")])]), _vm._v(" "), _c('td', [_c('div', { staticClass: "is-flex" }, [_c('i', { staticClass: "fas fa-star sm-margin has-text-warning" }), _vm._v(" " + _vm._s(repo.stargazers.totalCount) + " ")])])]);
    }))])])])])]) : _vm._e();
  }, staticRenderFns: [],
  props: {
    avatar: {
      type: Boolean,
      default: false
    },
    bio: {
      type: Boolean,
      default: false
    },
    company: {
      type: Boolean,
      default: false
    },
    email: {
      type: Boolean,
      default: false
    },
    hireable: {
      type: Boolean,
      default: false
    },
    organization: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    token: {
      type: String,
      default: ''
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data: function () { return ({
    userInfo: {}
  }); },
  computed: {
    verticalCard: function verticalCard() {
      return {
        'is-vertical': this.vertical
      };
    },
    centerName: function centerName() {
      return {
        'center-text': !this.avatar
      };
    }
  },
  created: function created() {
    var this$1 = this;

    var userQuery = "query {\n      viewer {\n        login\n      }\n    }";

    this.gitQuery(userQuery).then(function (response) {
      var currentUser = response.data.data.viewer.login,
          dataQuery = "query { \n            user(login: \"" + currentUser + "\") {\n              avatarUrl,\n              bio,\n              company,\n              email,\n              isHireable\n              login,\n              name,\n              organization(login: \"" + currentUser + "\") {\n              \tname\n              },\n              url,\n              followers(first: 1){\n                totalCount\n              },\n              following(first: 1){\n                totalCount\n              },\n              repositories(first: 1){\n                nodes{\n                  name,\n                  description,\n                  primaryLanguage {\n                    name,\n                    color\n                  },\n                  stargazers(first: 1){\n                    totalCount\n                  }\n                  url\n                },\n                totalCount\n              },\n              pinnedRepositories(first: 3){\n                nodes{\n                  name,\n                  description,\n                  primaryLanguage {\n                    name,\n                    color\n                  },\n                  stargazers(first: 1){\n                    totalCount\n                  }\n                  url\n                },\n                totalCount\n              }\n            }\n          }";
      return this$1.gitQuery(dataQuery);
    }).then(function (response) {
      if (!response.data.error) {
        this$1.userInfo = response.data.data.user;
        console.log(JSON.stringify(this$1.userInfo));
      } else { throw new Error(response.data.error); }
    }).catch(function (e) {
      console.info(e);
    });
  },
  methods: {
    gitQuery: function gitQuery(query) {
      return axios.post('https://api.github.com/graphql', {
        query: query
      }, {
        headers: {
          Authorization: ("Bearer " + (this.token))
        }
      });
    },
    invertColor: function invertColor(hex, bw) {
      if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
      }
      var r = parseInt(hex.slice(0, 2), 16),
          g = parseInt(hex.slice(2, 4), 16),
          b = parseInt(hex.slice(4, 6), 16);
      if (bw) {
        return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
      }
      // invert color components
      r = (255 - r).toString(16);
      g = (255 - g).toString(16);
      b = (255 - b).toString(16);
      // pad each with zeros and return
      return "#" + padZero(r) + padZero(g) + padZero(b);
    }
  }
};

module.exports = GithubVue;
