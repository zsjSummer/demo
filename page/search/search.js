window.onload = function () {
    Vue.directive('focus', {
        // 当绑定元素插入到 DOM 中。
        inserted: function (el) {
            // 聚焦元素
            el.focus()
        },
    });
    new Vue({
        el: '#search',
        data() {
            return {
                searchText: '',
                trans: '',
                showResult: false,
                timeout: null,
            }
        },
        mounted: function () {
        },
        methods: {
            /**
             * 通过谷歌翻译
             */
            search: function () {
                var _this = this;
                if (_this.searchText == '') {
                    _this.showResult = false;
                    _this.trans = '';
                    return;
                }
                var sl = 'en';
                var tl = 'zh';
                if (/.*[\u4e00-\u9fa5]+.*/.test(_this.searchText)) {
                    sl = 'zh';
                    tl = 'en';
                }
                var googleUrl = 'http://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&';
                googleUrl = googleUrl + 'sl=' + sl + '&tl=' + tl + '&q=' + _this.searchText;
                fetch(googleUrl, {
                    method: 'GET',
                    cache: 'no-cache',
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response.status);
                    return response.json();
                }).then(function (myJson) {
                    _this.showResult = true;
                    _this.trans = myJson.sentences[0].trans;
                    // console.log(myJson.sentences);
                }).catch(function (e) {
                    _this.searchByYoudao();
                });

            },
            /**
             * 通过有道翻译进行翻译
             */
            searchByYoudao() {
                var _this = this;
                var youdaoUrl = 'http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=';
                youdaoUrl += _this.searchText;
                fetch(youdaoUrl, {
                    method: 'GET',
                    cache: 'no-cache',
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(function (response) {
                    if (response.status != 200) {
                        status = -1;
                    }
                    return response.json();
                }).then(function (myJson) {
                    _this.showResult = true;
                    _this.trans = myJson.translateResult[0][0].tgt;
                });
            }
        },
        watch: {
            searchText(curVal, oldVal) {
                // 实现input连续输入，只发一次请求
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.search(curVal);
                }, 300);
            }
        }
    })
}