define({ "api": [
  {
    "type": "post",
    "url": "{url}/api/movies/:mov_id/cancle",
    "title": "取消未支付订单",
    "name": "cancleOrder",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seat_id",
            "description": "<p>座位id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n  \"seat_id\":2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": null,\n  \"time\": \"2017-05-01T17:29:24.572Z\",\n  \"msg\": \"订单撤销成功\",\n  \"user\": {\n    \"phone\": \"18819632589\",\n    \"name\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "FAIL",
          "content": "{\n  \"status\": \"FAIL\",\n  \"data\": null,\n  \"time\": \"2017-05-01T17:57:10.900Z\",\n  \"msg\": \"座位已被预定或未被预定，撤销失败\",\n  \"user\": {\n    \"id\": 1,\n    \"phone\": \"18819632589\",\n    \"name\": null\n  }\n}",
          "type": "json"
        },
        {
          "title": "FAIL",
          "content": "{\n  \"status\": \"FAIL\",\n  \"data\": null,\n  \"time\": \"2017-05-01T17:57:10.900Z\",\n  \"msg\": \"座位不存在，撤销失败\",\n  \"user\": {\n    \"id\": 1,\n    \"phone\": \"18819632589\",\n    \"name\": null\n  }\n}",
          "type": "json"
        },
        {
          "title": "NO_PERMISSION",
          "content": "{\n  \"status\": \"NO_PERMISSION\",\n  \"data\": null,\n  \"time\": \"2017-05-01T17:57:10.900Z\",\n  \"msg\": \"撤销需本人权限\",\n  \"user\": {\n    \"id\": 1,\n    \"phone\": \"18819632589\",\n    \"name\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/movie_order.router.api.js",
    "groupTitle": "Movie"
  },
  {
    "type": "post",
    "url": "{url}/api/movies/:mov_id/order",
    "title": "点击确认选座后返回数据",
    "name": "getBookData",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vh_mov_id",
            "description": "<p>影厅-电影id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seat_id",
            "description": "<p>座位id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\t\"vh_mov_id\":1,\n\t\"seats_id\": [1],\n  \"price\": 36\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"cinema\": {\n      \"name\": \"大地影院\",\n      \"address\": \"广州天河区奥体南路12号高德美居中心家居馆3楼\"\n    },\n    \"video_hell\": {\n      \"name\": \"3号厅\"\n    },\n    \"movie\": {\n      \"name\": \"守护者：世纪战元\",\n      \"language\": \"俄语\",\n      \"type\": \"2D\",\n      \"starttime\": \"2017-05-10T02:00:00.000Z\",\n      \"endtime\": \"2017-05-10T02:00:00.000Z\",\n      \"price\": \"39\"\n    },\n    \"seats\": [\n      {\n        \"seat_id\": 4,\n        \"col_raw\": \"0排3列\"\n      },\n      {\n        \"seat_id\": 5,\n        \"col_raw\": \"0排4列\"\n      }\n    ],\n    \"tcks_id\": [\n      6,\n      7\n    ],\n    \"user\": {\n      \"phone\": \"123456789\",\n      \"pay_num\": \"123456789\"\n    }\n  },\n  \"time\": \"2017-06-08T03:20:22.773Z\",\n  \"msg\": \"座位预定成功，请支付\",\n  \"user\": {\n    \"id\": 3,\n    \"phone\": \"123456789\",\n    \"name\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NOT_AUTHORIZED",
          "content": "{\n  \"status\": \"NOT_AUTHORIZED\",\n  \"data\": null,\n  \"time\": \"2017-05-01T14:50:21.694Z\",\n  \"msg\": \"未登录\",\n  \"user\": null\n}",
          "type": "json"
        },
        {
          "title": "ERROR",
          "content": "{\n  \"status\": \"ERROR\",\n  \"data\": {\n    \"seats_id\": [  // 已经被预定的座位id\n      4,\n      5\n    ]\n  },\n  \"time\": \"2017-06-07T19:06:30.870Z\",\n  \"msg\": \"所选座位已被预定，请重新选择\",\n  \"user\": {\n    \"id\": 3,\n    \"phone\": \"123456789\",\n    \"name\": null\n  }\n}",
          "type": "json"
        },
        {
          "title": "ERROR",
          "content": "{\n  \"status\": \"ERROR\",\n  \"data\": null,\n  \"time\": \"2017-06-08T01:56:37.438Z\",\n  \"msg\": \"价格错误，应为78元\",\n  \"user\": {\n    \"id\": 3,\n    \"phone\": \"123456789\",\n    \"name\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/movie_order.router.api.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "{url}/api/movies/:mov_id/cinemas",
    "title": "获取具体某部电影+播放该电影的影院-影厅信息",
    "name": "getMovieAndPlayingDetail",
    "group": "Movie",
    "parameter": {
      "examples": [
        {
          "title": "Request API",
          "content": "api/movies/4/cinemas // 获取 id 为 4 的电影以及播放该电影的影院-影厅信息",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"mov_id\": 4,\n    \"name\": \"守护者：世纪战元\",\n    \"grade\": 4,\n    \"starttime\": \"2017-05-18T16:00:00.000Z\",\n    \"type\": \"动作 / 科幻\",\n    \"region\": \"俄罗斯\",\n    \"language\": \"俄语\",\n    \"length\": 100,\n    \"imgUrl\": \"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2437307414.webp\",\n    \"prevueUrl\": null,\n    \"description\": \"<span property=\\\"v:summary\\\" class=\\\"\\\">\\n\\n                                　　一直从事兵器研究的邪恶的克拉托夫教授欲用生物兵器达成自己的野心，在俄罗斯境内的各大城市制造了一系列大规模爆炸恐怖袭击。为了消灭邪恶势力，拯救面临生物兵器毁灭的国家，俄罗斯国防部派出了冷战时期创建的名为“爱国者”的超级英雄团队，各个英雄异于常人，身怀特技，与号称统 治世界的邪恶教授展开了一场殊死较量。\\n\\n                        </span>\",\n    \"directors\": [\n      {\n        \"name\": \"萨里·奥德赛耶\",\n        \"id\": 20\n      }\n    ],\n    \"scriptwriters\": [],\n    \"actors\": [\n      {\n        \"name\": \"艾琳娜·拉尼娜\",\n        \"id\": 21\n      }\n    ],\n    \"play_cinemas\": [\n      {\n        \"cin_id\": 1,\n        \"name\": \"大地影院\",\n        \"address\": \"广州天河区奥体南路12号高德美居中心家居馆3楼\",\n        \"detail\": [\n          {\n            \"date\": \"4月10日\",\n            \"video_hell\": [\n              {\n                \"vh_id\": 1,\n                \"name\": \"3号厅\",\n                \"price\": \"39\",\n                \"starttime\": \"16:00\",\n                \"endtime\": \"17:30\"\n              },\n              {\n                \"vh_id\": 3,\n                \"name\": \"1号厅\",\n                \"price\": \"19\",\n                \"starttime\": \"09:30\",\n                \"endtime\": \"10:30\"\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"cin_id\": 4,\n        \"name\": \"天宜影院\",\n        \"address\": \"大学城西五路华师教学区西门正对面\",\n        \"detail\": [\n          {\n            \"date\": \"4月10日\",\n            \"video_hell\": [\n              {\n                \"vh_id\": 13,\n                \"name\": \"4号厅\",\n                \"price\": \"19\",\n                \"starttime\": \"16:00\",\n                \"endtime\": \"17:30\"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  \"time\": \"2017-04-30T19:35:43.482Z\",\n  \"msg\": \"电影+播放信息获取成功\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "PARAM_ERROR",
          "content": "{\n  \"status\": \"PARAM_ERROR\",\n  \"data\": null,\n  \"time\": \"2017-04-30T12:39:24.443Z\",\n  \"msg\": \"电影不存在\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/movie.router.api.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "{url}/api/movie/:mov_id",
    "title": "获取具体某部电影的信息",
    "name": "getMovieDetail",
    "group": "Movie",
    "parameter": {
      "examples": [
        {
          "title": "Request API",
          "content": "/api/movies/2 // 获取 id 为2的电影信息",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"mov_id\": 2,\n    \"name\": \"记忆大师\",\n    \"grade\": 7.4,\n    \"starttime\": \"2017-04-27T16:00:00.000Z\",\n    \"type\": \"剧情 / 悬疑 / 惊悚 / 犯罪\",\n    \"place\": \"中国大陆\",\n    \"language\": \"汉语普通话\",\n    \"length\": 119,\n    \"imgUrl\": \"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2455156816.webp\",\n    \"prevueUrl\": null,\n    \"description\": \"<span property=\\\"v:summary\\\" class=\\\"\\\">\\n\\n                                　　故事发生在2025年，因为和妻子张代晨（徐静蕾 饰）婚姻破裂，男主角江丰（黄渤 饰）走进记忆大师医疗中心接受手术，却不料手术失误记忆被错误重载，他莫名其妙变成了“杀人凶手”。警官沈汉强（段奕宏 饰）的穷追不舍让他逐渐发现，自己脑内的错误记忆不仅是破案的关键，更是救赎自己的唯一希望。与此同时，妻子身边出现的女人陈姗姗（杨子姗 饰）、记忆中浮现出的神秘女子（许玮甯 饰），似乎也和真相有着千丝万缕的联系，一场记忆烧脑战也随之开始。\\n\\n                        </span>\",\n    \"directors\": [\n      {\n        \"name\": \"陈正道\",\n        \"id\": 9\n      }\n    ],\n    \"scriptwriters\": [\n      {\n        \"name\": \"任鹏\",\n        \"id\": 10\n      }\n    ],\n    \"actors\": [\n      {\n        \"name\": \"段奕宏\",\n        \"id\": 13\n      },\n      {\n        \"name\": \"杨子姗\",\n        \"id\": 14\n      },\n      {\n        \"name\": \"黄渤\",\n        \"id\": 11\n      },\n      {\n        \"name\": \"徐静蕾\",\n        \"id\": 12\n      }\n    ]\n  },\n  \"time\": \"2017-04-30T12:29:45.916Z\",\n  \"msg\": \"电影信息获取成功\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "PARAM_ERROR",
          "content": "{\n  \"status\": \"PARAM_ERROR\",\n  \"data\": null,\n  \"time\": \"2017-04-30T12:39:24.443Z\",\n  \"msg\": \"电影不存在\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/movie.router.api.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "{url}/api/movies/:mov_id/seats?vh_id={...}",
    "title": "获取选定影厅的座位状态信息",
    "name": "getSeatsInfo",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vh_id",
            "description": "<p>影厅id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "/api/movies/4/seats?vh_id=1",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"seats\": [\n      {\n        \"seat_id\": 1,\n        \"valid\": true,\n        \"row_col\": \"0排0列\"\n      },\n      {\n        \"seat_id\": 2,\n        \"valid\": false,\n        \"row_col\": \"0排1列\"\n      },\n      {\n        \"seat_id\": 3,\n        \"valid\": trur,\n        \"row_col\": \"0排2列\"\n      },\n      {\n        \"seat_id\": 4,\n        \"valid\": false,\n        \"row_col\": \"0排3列\"\n      },\n      ......\n      {\n        \"seat_id\": 72,\n        \"valid\": false,\n        \"row_col\": \"7排8列\"\n      }\n    ]\n  },\n  \"time\": \"2017-06-07T19:19:01.783Z\",\n  \"msg\": \"数据获取成功\",\n  \"user\": {\n    \"id\": 3,\n    \"phone\": \"123456789\",\n    \"name\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "PARAM_ERROR",
          "content": "{\n  \"status\": \"PARAM_ERROR\",\n  \"data\": null,\n  \"time\": \"2017-06-07T19:24:26.754Z\",\n  \"msg\": \"参数错误\",\n  \"user\": {\n    \"id\": 3,\n    \"phone\": \"123456789\",\n    \"name\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/movie_seat.router.api.js",
    "groupTitle": "Movie"
  },
  {
    "type": "post",
    "url": "{url}/movies/:mov_id/order/makesure",
    "title": "确认订单支付",
    "name": "makeSureTicket",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tcks_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_num",
            "description": "<p>支付账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_pwd",
            "description": "<p>支付密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>总票价</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\t\"tcks_id\":[1,2],\n\t\"pay_num\":\"123\",\n\t\"pay_pwd\":\"123\",\n\t\"price\": 78\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": null,\n  \"time\": \"2017-06-08T04:39:55.597Z\",\n  \"msg\": \"支付成功\",\n  \"user\": {\n    \"id\": 3,\n    \"phone\": \"123456789\",\n    \"name\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ERROR",
          "content": "{\n  \"status\": \"ERROR\",\n  \"data\": null,\n  \"time\": \"2017-06-08T04:47:47.301Z\",\n  \"msg\": \"价格错误，应为78元\",\n  \"user\": {\n    \"id\": 3,\n    \"phone\": \"123456789\",\n    \"name\": null\n  }\n}",
          "type": "json"
        },
        {
          "title": "PERSSION_ERROR",
          "content": "{\n  \"status\": \"PERSSION_ERROR\",\n  \"data\": null,\n  \"time\": \"2017-06-08T04:50:38.295Z\",\n  \"msg\": \"支付需订票者权限\",\n  \"user\": {\n    \"id\": 2,\n    \"phone\": \"18819253767\",\n    \"name\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/movie_order.router.api.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "{url}/api/people/:peo_id",
    "title": "获取人物详细信息",
    "name": "getPeopleInfo",
    "group": "People",
    "parameter": {
      "examples": [
        {
          "title": "Request API",
          "content": "/api/people/1",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": {\n    \"peo_id\": 1,\n    \"name\": \"彭浩翔\",\n    \"gender\": 1,\n    \"job\": \"编剧 / 制片 / 导演 / 演员 / 摄影\",\n    \"birthday\": \"1973-09-21T16:00:00.000Z\",\n    \"imgUrl\": \"https://img1.doubanio.com/img/celebrity/medium/39.jpg\",\n    \"description\": \"<span class=\\\"all hidden\\\" style=\\\"display: inline;\\\">　　彭浩翔电影集合黑色幽默、恐怖、离奇荒诞与警匪等元素。自幼热爱电影，14岁时曾用兄长的录像机自导自演短片《智勇三雄》，中学时为了看一场阿诺·施瓦辛格的电影而跟自己女友分手。毕业后曾经修读台大先修班，回港后曾在亚洲电视担任喜剧综艺科的节目编剧，并在报纸与杂志撰写影评及小说。 1995年，他为林海峰执导的电影《天空小说》撰写剧本。在1997年，他转职香港商业电台的节目主持兼且出版长篇小说《全职杀手》，并在2001年被拍成同名电影。1999年，他自资拍摄及执导短片《暑期作业》，获提名角逐台湾金马奖最佳短片及获邀参加多个国际影展。 2001年彭浩翔拍摄首部长片《买兇拍人》，获得香港电影金紫荆奖最佳编剧及获提名香港电影金像奖最佳编剧。2003年拍摄了第二部电影《大丈夫》，讲述四名小男人瞒着妻子女友嫖妓的故事，获得香港电影金像奖最佳新晋导演。2004年，他凭《公主复仇记》获邀参加东京国际电影节。2005年，《AV》讲述一群青年学生為实现自己的梦想，向青少年创业基金筹钱拍片，请来日本AV女优拍摄成人电影。 2006年拍摄的《伊莎贝拉》则成为德国第56届柏林国际电影节唯一入围竞赛单元部份的华语电影，最后该部电影的配乐人金培达获得柏林电影节最佳电影配乐银熊奖。 2007年9月上映的《出埃及记》的剧情含有港式粗言秽语的对白，而电检处却把《出埃及记》归类IIB级程度的标准，故此《出埃及记》的审检过程与电检处的审检準则受到广泛报导。2007年电影作品《破事儿》被坊间评为一部紧贴当代香港城市人生活风貌的电影。 2010年《志明与春娇》，电影讲述新修订禁烟条例实施后，烟民围在户外烟灰缸吸烟，因而产生的一段男女关系。彭浩翔与拍档麦曦茵凭此电影获得第30届香港电影金像奖最佳编剧奖。同年电影《维多利亚壹号》成為乌甸尼斯远东电影节开幕电影作全球首映，以香港楼市为题材，描述一位努力工作仍难以在楼价飞涨下买楼的女子，导致精神崩溃变成连环杀手的故事。</span>\"\n  },\n  \"time\": \"2017-04-30T13:01:17.012Z\",\n  \"msg\": \"人物信息获取成功\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "PARAM_ERROR",
          "content": "{\n  \"status\": \"PARAM_ERROR\",\n  \"data\": null,\n  \"time\": \"2017-04-30T13:04:51.255Z\",\n  \"msg\": \"人物不存在\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/people.router.api.js",
    "groupTitle": "People"
  },
  {
    "type": "post",
    "url": "{url}/api/users/login",
    "title": "用户登录",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>登录号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\t \"phone\":\"18819581710\",\n\t \"password\":\"123456789\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": null,\n  \"time\": \"2017-04-29T17:38:20.152Z\",\n  \"msg\": \"登录成功\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ERROR",
          "content": "{\n  \"status\": \"ERROR\",\n  \"data\": null,\n  \"time\": \"2017-04-29T16:31:36.223Z\",\n  \"msg\": \"账号或密码错误\",\n  \"user\": null\n}",
          "type": "json"
        },
        {
          "title": "PARAM_ERROR",
          "content": "{\n  \"status\": \"PARAM_ERROR\",\n  \"data\": null,\n  \"time\": \"2017-04-29T15:31:28.620Z\",\n  \"msg\": \"参数错误\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/user.router.api.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "{url}/api/users/logout",
    "title": "用户注销",
    "name": "logout",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Request API",
          "content": "{url}/api/users/logout",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": null,\n  \"time\": \"2017-04-29T17:38:20.152Z\",\n  \"msg\": \"注销成功\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/user.router.api.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "{url}/api/users/register",
    "title": "用户注册",
    "name": "register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>注册号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password2",
            "description": "<p>重复密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\t \"phone\":\"18819581710\",\n\t \"password\":\"123456789\",\n\t \"password2\":\"123456788\",\n\t \"code\":\"6818544\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": null,\n  \"time\": \"2017-04-29T16:41:05.182Z\",\n  \"msg\": \"注册成功，请重新登录\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ERROR",
          "content": "{\n  \"status\": \"ERROR\",\n  \"data\": null,\n  \"time\": \"2017-04-29T16:31:36.223Z\",\n  \"msg\": \"验证码错误\",\n  \"user\": null\n}",
          "type": "json"
        },
        {
          "title": "USER_EXITS",
          "content": "{\n  \"status\": \"USER_EXITS\",\n  \"data\": null,\n  \"time\": \"2017-04-29T15:31:28.620Z\",\n  \"msg\": \"该号码已注册\",\n  \"user\": null\n}",
          "type": "json"
        },
        {
          "title": "PARAM_ERROR",
          "content": "{\n  \"status\": \"PARAM_ERROR\",\n  \"data\": null,\n  \"time\": \"2017-04-29T15:31:28.620Z\",\n  \"msg\": \"参数错误\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/user.router.api.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "{url}/api/users/register/sms",
    "title": "获取短信验证码",
    "name": "sendSms",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>注册号码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\t\"phone\":\"18819253766\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "OK",
          "content": "{\n  \"status\": \"OK\",\n  \"data\": null,\n  \"time\": \"2017-04-29T14:56:39.724Z\",\n  \"msg\": \"验证码发送成功\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "OPERATE_ERROR",
          "content": "{\n  \"status\": \"OPERATE_ERROR\",\n  \"data\": null,\n  \"time\": \"2017-04-29T15:31:28.620Z\",\n  \"msg\": \"验证码发送少于一分钟，发送失败\",\n  \"user\": null\n}",
          "type": "json"
        },
        {
          "title": "USER_EXITS",
          "content": "{\n  \"status\": \"USER_EXITS\",\n  \"data\": null,\n  \"time\": \"2017-04-29T15:31:28.620Z\",\n  \"msg\": \"该号码已注册\",\n  \"user\": null\n}",
          "type": "json"
        },
        {
          "title": "ERROR",
          "content": "{\n  \"status\": \"ERROR\",\n  \"data\": null,\n  \"time\": \"2017-04-29T15:31:28.620Z\",\n  \"msg\": \"验证码发送失败\",\n  \"user\": null\n}",
          "type": "json"
        },
        {
          "title": "PARAM_ERROR",
          "content": "{\n  \"status\": \"PARAM_ERROR\",\n  \"data\": null,\n  \"time\": \"2017-04-29T15:31:28.620Z\",\n  \"msg\": \"参数错误\",\n  \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDocs/user.router.api.js",
    "groupTitle": "User"
  }
] });
