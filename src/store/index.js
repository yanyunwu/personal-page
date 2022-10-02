import {defineState} from 'vactapp'

/**
 * tips:
 * 我的作品列表配置项在components/BodyWork.jsx中
 */

export default defineState({
  // 可以为远程地址，也可以为脚手架对应的地址
  backgroundImg: 'https://hzau-online.oss-cn-hangzhou.aliyuncs.com/bg3.jpg',
  // backgroundImg: require('@/assets/main.gif'),

  // logo附近的内容
  logoName: {
    upper: '我叫',
    lower: '周同学'
  },

  // 主页标题
  title: '细水长流',
  // 副标题
  subTitle: '这里是周同学的主页',

  // 关于我的配置
  aboutInfo: {
    tags: [
      '前端开发',
      '在校学习',
      '准备实习'
    ],
    intro: [
      '我是一名大三学生',
      '从大一开始学习前端，目前快2年时间了',
      '有理想，有追求，但也有点迷茫',
      '喜欢看动漫，看科幻电影，看恐怖片',
      '希望未来能够躺平，哈哈哈'
    ]
  },

  // 底部配置
  footerInfo: {
    qq: '2480721346',
    mail: '2480721346@qq.com',
    year: 2022,
    name: '周同学',
    bnum: '鄂ICP备2022014967号-1' // 备案号
  }
})
