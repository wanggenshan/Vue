require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonp([1],{

/***/ 150:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_index__ = __webpack_require__(92);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* default */]);

// 引入modules


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* default */].Store({
  modules: {
    index: __WEBPACK_IMPORTED_MODULE_3__modules_index__["a" /* default */]
  },
  plugins: [__WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger___default()()]
}));

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_awesome_typescript_loader_useCache_true_app_ts__ = __webpack_require__(78);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(150)
}
var normalizeComponent = __webpack_require__(9)
/* script */
/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_awesome_typescript_loader_useCache_true_app_ts__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-501b3b24", Component.options)
  } else {
    hotAPI.reload("data-v-501b3b24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_property_decorator__ = __webpack_require__(14);








var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor___default()(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property___default()(target, key, r), r;
};

var debug = __webpack_require__(46)('log:App');
// 必须使用装饰器的方式来指定components
var App = function (_Vue) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(App, _Vue);

    function App() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, App);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (App.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(App)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(App, [{
        key: "onLaunch",

        // app hook
        value: function onLaunch() {
            var opt = this.$root.$mp.appOptions;
            // debug('onLaunch', opt)
            // Api.login().then(res => {
            //   debug('login', res)
            // })
        }
    }, {
        key: "onShow",
        value: function onShow() {
            debug('onShow');
        }
    }, {
        key: "onHide",
        value: function onHide() {
            debug('onHide');
        }
    }, {
        key: "mounted",
        value: function mounted() {
            debug('mounted');
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_8_vue_property_decorator__["a" /* Vue */]);
App = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_vue_property_decorator__["b" /* Component */])({
    mpType: 'app'
})], App);
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fly; });
/* unused harmony export wxApiToPromise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



var fly = new __WEBPACK_IMPORTED_MODULE_1_flyio_dist_npm_wx___default.a();
var cookies = {};
var HOST = 'https://127.0.0.1'; // 更改
// 设置baseUrl
fly.config.baseURL = "https://api.chaping.tv/";
//添加请求拦截器
fly.interceptors.request.use(function (request) {
    //给所有请求添加自定义header
    request.headers["Cookie"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["map"])(cookies, function (v, k) {
        return k + '=' + v;
    }).join(';');
    //打印出请求体
    // console.log(request.body)
    //终止请求
    //var err=new Error("xxx")
    //err.request=request
    //return Promise.reject(new Error(""))
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
});
//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(function (response) {
    if (response.request.url.indexOf(HOST) == 0) {
        var hcks = response.headers['set-cookie'] || response.headers['Set-Cookie'];
        if (hcks != null) {
            hcks.forEach(function (v) {
                var ck = v.split(';')[0].split('=');
                cookies[ck[0]] = ck[1];
            });
        }
    }
    //只将请求结果的data字段返回
    return response.data;
}, function (err) {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
});
function wxApiToPromise(api, arg1) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var opt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["merge"])({
            success: function success(r) {
                resolve(r);
            },
            fail: function fail(e) {
                reject(e);
            }
        }, arg1);
        api(opt);
    });
}
// const Api = {
//   login() {
//     return wxApiToPromise(wx.login, {}).then(res => {
//       // console.log(res.code)
//       return res
//     })
//   },
//   testForm() {
//     return postForm(HOST, { a: 1 })
//   }
// }
/* unused harmony default export */ var _unused_webpack_default_export = (fly);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCategoryProduct; });
/* unused harmony export search */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(82);

// 获取顶部tab分类
var getCategories = function getCategories() {
    return __WEBPACK_IMPORTED_MODULE_0__api__["a" /* fly */].request("api/shop/categories");
};
// 获取tab详情
var getCategoryProduct = function getCategoryProduct(id) {
    return __WEBPACK_IMPORTED_MODULE_0__api__["a" /* fly */].request("api/shop/sub-category-products/" + id);
};
// 搜索接口
var search = function search(q) {
    return __WEBPACK_IMPORTED_MODULE_0__api__["a" /* fly */].request("api/shop/search-product", { q: q });
};

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_index_js__ = __webpack_require__(70);


var isApp = false; //尝试mpvue-entry
var MyApp = void 0;
/* app-only-begin */
isApp = true;
// 添加小程序hooks http://mpvue.com/mpvue/#_4
__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["b" /* Component */].registerHooks([
// app
'onLaunch', 'onShow', 'onHide',
// pages
'onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']);
__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["a" /* Vue */].config.productionTip = false;
// 挂载store
__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["a" /* Vue */].prototype.$store = __WEBPACK_IMPORTED_MODULE_1__store_index_js__["a" /* default */];
/* app-only-end */
if (isApp) {
    // 在这个地方引入是为了registerHooks先执行
    MyApp = __webpack_require__(71).default;
} else {
    // MyApp = require('./index.vue')
}
var app = new __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["a" /* Vue */](MyApp);
app.$mount();

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_index__ = __webpack_require__(83);


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var state = {
    categories: [],
    products: {}
};
var mutations = {
    updateCategories: function updateCategories(state, categories) {
        state.categories = categories;
    },
    updateCategoryProduct: function updateCategoryProduct(state, products) {
        state.products = products;
    }
};
var actions = {
    // 获取目录
    getCategories: function getCategories(_ref) {
        var commit = _ref.commit;

        return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var data;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data_index__["a" /* getCategories */])();

                        case 2:
                            data = _context.sent;

                            console.log("data...", data);
                            commit("updateCategories", data.data);

                        case 5:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    },

    // 获取详情
    getCategoryProduct: function getCategoryProduct(_ref2, id) {
        var commit = _ref2.commit;

        return __awaiter(this, void 0, void 0, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
            var data;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data_index__["b" /* getCategoryProduct */])(id);

                        case 2:
                            data = _context2.sent;

                            console.log("data...", data);
                            commit("updateCategoryProduct", data.data);

                        case 5:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    mutations: mutations,
    state: state,
    actions: actions
});

/***/ })

},[84]);
//# sourceMappingURL=app.js.map