## README
### 接口
#### 谷歌翻译
1. 英文转中文: http://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=auto&tl=zh&q=you
2. 中文转英文: http://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=auto&tl=en&q=你 
>格式：
>
>```json
>{
>    "sentences": [
>        {
>            "trans": "你好吗",
>            "orig": "how are you",
>            "backend": 1
>        }
>    ],
>    "src": "en",
>    "confidence": 1,
>    "ld_result": {
>        "srclangs": [
>            "en"
>        ],
>        "srclangs_confidences": [
>            1
>        ],
>        "extended_srclangs": [
>            "en"
>        ]
>    }
>}
>```
>
#### 有道翻译
1. http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=计算
>格式(语言自动检测)：
>
>```json
>{
>    "type": "ZH_CN2EN",
>    "errorCode": 0,
>    "elapsedTime": 1,
>    "translateResult": [
>        [
>            {
>                "src": "计算",
>                "tgt": "To calculate"
>            }
>        ]
>    ]
>}
>```
>Types：
>ZH_CN2EN 中文　»　英语
>ZH_CN2JA 中文　»　日语
>ZH_CN2KR 中文　»　韩语
>ZH_CN2FR 中文　»　法语
>ZH_CN2RU 中文　»　俄语
>ZH_CN2SP 中文　»　西语
>EN2ZH_CN 英语　»　中文
>JA2ZH_CN 日语　»　中文
>KR2ZH_CN 韩语　»　中文
>FR2ZH_CN 法语　»　中文
>RU2ZH_CN 俄语　»　中文
>SP2ZH_CN 西语　»　中文