## README

A desktop application to help programmer who's English is poor like me to quick translate.

### Install

Download this project.

```sh
# clone project
git clone https://github.com/zsjSummer/demo.git
# install electron
cd demo
npm install --save-dev electron
```

If the speed is too slow, you can try the following methods.

```sh
# config the mirrors of taobao to install electron.
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
npm install electron --save-dev --registry=https://registry.npm.taobao.org
```

Start application. You should make sure all dependencies have installed.

```sh
npm start
```

### TODO List

1. - [ ] 完成全局快捷键弹出框
2. - [ ] 自动 focus 到弹出框的输入框
3. - [ ] 监听输入框的 change 自动翻译（需要延时，需要解决请求异步数据不一致问题）
4. - [ ] 语言自动检测，默认英文到中文，中文到英文
5. - [ ] 增加单词本，创建本地词库，同步到云端词库
6. - [ ] 翻译结果列表显示（针对一词多义，当前为一词一意）
7. - [ ] 支持示例句子、短语、词组等
8. - [ ] 通过本地词库查询结果
9. - [ ] 单词自动联想功能（英文纠错功能）
10. - [ ] 界面优化，展示列表的样式优化
11. - [ ] 自定义图标，dock 栏
12. - [ ] 最小化到托盘，托盘图标，设置中可勾选开机自启
13. - [ ] 深/浅主题切换
14. - [ ] 翻译结果优化（多种翻译结果合择优选择）
15. - [ ] 语言选择切换，自定义翻译 source language 和 target language
16. - [ ] ······

### Translate APIs

#### Google open API

1. en to zh_cn: http://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=en&tl=zh&q=you

2. zh_cn to en: http://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=zh&tl=en&q=你 

>Style
>
>```json
>{
>        "sentences": [
>            {
>                "trans": "你好吗",
>                "orig": "how are you",
>                "backend": 1
>            }
>        ],
>        "src": "en",
>        "confidence": 1,
>        "ld_result": {
>            "srclangs": [
>                "en"
>            ],
>            "srclangs_confidences": [
>                1
>            ],
>            "extended_srclangs": [
>                "en"
>            ]
>        }
>}
>```
>

#### YouDao open API

1. http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=计算

>Style(language auto check):
>
>```json
>{
>    "type": "ZH_CN2EN",
>    "errorCode": 0,
>    "elapsedTime": 1,
>    "translateResult": [
>           [
>               {
>                   "src": "计算",
>                   "tgt": "To calculate"
>               }
>           ]
>    ]
>}
>```
>
>Types：
>
>ZH_CN2EN 中文　=>　英语
>
>ZH_CN2JA 中文　=>　日语
>
>ZH_CN2KR 中文　=>　韩语
>
>ZH_CN2FR 中文　=>　法语
>
>ZH_CN2RU 中文　=>　俄语
>
>ZH_CN2SP 中文　=>　西语
>
>EN2ZH_CN 英语　=>　中文
>
>JA2ZH_CN 日语　=>　中文
>
>KR2ZH_CN 韩语　=>　中文
>
>FR2ZH_CN 法语　=>　中文
>
>RU2ZH_CN 俄语　=>　中文
>
>SP2ZH_CN 西语　=>　中文
>
>
