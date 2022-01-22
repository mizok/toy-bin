/*! For license information please see main.db1a23e2950c8296a1b5.js.LICENSE.txt */
(function(){var __webpack_modules__={"./src/js/main.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\nfunction counterCore(ele, arr) {\n  var arrRandom = function arrRandom() {\n    return arr[Math.floor(arr.length * Math.random())];\n  };\n\n  ele.each(function (i, o) {\n    var cells = $(o).find('[class*=\"__cell\"]');\n    var refresh = $(o).find('[class*=\"__btn\"]');\n\n    var refreshFunc = function refreshFunc() {\n      cells.each(function (index, cell) {\n        $(cell).find('[class*=\"__text\"]').text(arrRandom());\n      });\n      cells.each(function (index, cell) {\n        $(cell).find('[class*=\"__text\"]').css('opacity', 0.3);\n      });\n    };\n\n    var timer;\n\n    var countdownRefresh = function countdownRefresh() {\n      var delayInitail = 20;\n\n      var func = function func() {\n        return setTimeout(function () {\n          refreshFunc();\n          delayInitail += 20;\n\n          if (delayInitail < 300) {\n            timer = func();\n          } else {\n            clearTimeout(timer);\n            cells.each(function (index, cell) {\n              $(cell).find('[class*=\"__text\"]').css('opacity', 1);\n            });\n          }\n        }, delayInitail);\n      };\n\n      timer = func();\n    };\n\n    refreshFunc();\n    refresh.on('click', function (e) {\n      e.preventDefault();\n      clearTimeout(timer);\n      countdownRefresh();\n    });\n  });\n}\n\nfunction initZhTwAlphabet() {\n  var ele = $('.zh-tw-alphabet');\n  var arr = ['ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ', 'ㄍ', 'ㄎ', 'ㄏ', 'ㄐ', 'ㄑ', 'ㄒ', 'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ', 'ㄙ', 'ㄧ', 'ㄨ', 'ㄩ', 'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ'];\n  counterCore(ele, arr);\n}\n\nfunction initZhTwVacabularyPicking() {\n  var ele = $('.zh-tw-vocabulary-picking');\n  var arr = ['烏龜', 'IPhone', 'Chrome', '樂透彩', '台北101', 'NEUX', '劉信義', '高爾夫', '獎牌', '三明治', '音響', '運動鞋', '第二次世界大戰', '洗衣粉', '溜冰', 'NEUX', '劉信義', '風箏', '外套', '鍵盤', '滑鼠', '插頭', '原住民', '聖母峰', '台語', '彩虹', '酒', '磁鐵', '手錶', '郵差', '警察', '總統', '籃球', '口罩', '皮鞋', 'NEUX', '劉信義'];\n  counterCore(ele, arr);\n}\n\nfunction initZhTwLyricPicking() {\n  var ele = $('.zh-tw-lyric-picking');\n  var arr = ['太陽', '星星', '月亮', '水', '河', '天堂', '翅膀', '傲慢', '雨', '夢', '離開', '殺', '浪', '簡單', '蝦', '東西', '手心', '知道', '死了', '痛快', '煙', '好想', '丟掉', '手錶', '外套', '絕對', '動物', '彩虹', '情歌', '風箏', '病', '思念', '陌生人', '燃燒', '勇敢', '悲劇', '生命'];\n  counterCore(ele, arr);\n}\n\nfunction initSiteContentSwitcher() {\n  var ele = $('.site-content-switcher');\n  ele.each(function (i, o) {\n    var item = $(o).find('.site-content-switcher__item');\n    item.eq(0).addClass('site-content-switcher__item--active');\n\n    var func = function func(id) {\n      item.removeClass('site-content-switcher__item--active');\n      item.filter($(id)).addClass('site-content-switcher__item--active');\n    };\n\n    $(o).data('switch', func);\n  });\n}\n\nfunction initMenuBtn() {\n  var ele = $('.menu-btn');\n  ele.each(function (i, o) {\n    $(o).on('click', function (e) {\n      e.preventDefault();\n      e.stopPropagation();\n      $('#menu').fadeIn(500);\n    });\n  });\n}\n\nfunction initMenuCloseBtn() {\n  var ele = $('.menu-close-btn');\n  ele.each(function (i, o) {\n    $(o).on('click', function (e) {\n      e.preventDefault();\n      e.stopPropagation();\n      $('#menu').fadeOut(500);\n    });\n  });\n}\n\nfunction initMenuList() {\n  var ele = $('.menu-list');\n  ele.each(function (i, o) {\n    $(o).find('a').on('click', function (e) {\n      e.preventDefault();\n      e.stopPropagation();\n      var id = $(e.currentTarget).attr('href');\n      $('#site-content-switcher').data('switch')(id);\n      $('#menu').fadeOut(500);\n    });\n  });\n}\n\nfunction initMenu() {\n  var ele = $('.menu');\n  ele.each(function (i, o) {\n    $('body').on('click', function (e) {\n      $(o).fadeOut(500);\n    });\n    $(o).on('click', function (e) {\n      e.stopPropagation();\n    });\n  });\n}\n\nfunction initComponents() {\n  initMenuBtn();\n  initMenuCloseBtn();\n  initSiteContentSwitcher();\n  initMenuList();\n  initMenu();\n  initZhTwAlphabet();\n  initZhTwVacabularyPicking();\n  initZhTwLyricPicking();\n}\n\n$(function () {\n  initComponents();\n});\n\n//# sourceURL=webpack://webpack_playground/./src/js/main.js?")},"./src/scss/main.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_playground/./src/scss/main.scss?")}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var r=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(e,n,r,i){if(!n){var t=1/0;for(a=0;a<deferred.length;a++){n=deferred[a][0],r=deferred[a][1],i=deferred[a][2];for(var c=!0,_=0;_<n.length;_++)(!1&i||t>=i)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](n[_])}))?n.splice(_--,1):(c=!1,i<t&&(t=i));c&&(deferred.splice(a--,1),e=r())}return e}i=i||0;for(var a=deferred.length;a>0&&deferred[a-1][2]>i;a--)deferred[a]=deferred[a-1];deferred[a]=[n,r,i]},__webpack_require__.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={main:0};__webpack_require__.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,t,c=r[0],_=r[1],a=r[2],o=0;for(i in _)__webpack_require__.o(_,i)&&(__webpack_require__.m[i]=_[i]);if(a)var u=a(__webpack_require__);for(n&&n(r);o<c.length;o++)t=c[o],__webpack_require__.o(e,t)&&e[t]&&e[t][0](),e[c[o]]=0;return __webpack_require__.O(u)},r=self.webpackChunkwebpack_playground=self.webpackChunkwebpack_playground||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}(),__webpack_require__.O(void 0,["vendor"],(function(){return __webpack_require__("./src/js/main.js")}));var __webpack_exports__=__webpack_require__.O(void 0,["vendor"],(function(){return __webpack_require__("./src/scss/main.scss")}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();