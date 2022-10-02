import {state} from "vactapp";

const workList = state([
  {
    id: 1,
    href: 'https://github.com/yanyunwu/vact',
    image: 'https://gw.alipayobjects.com/mdn/prod_resource/afts/img/A*G7DXRKTdIckAAAAAAAAAAAAAARQnAQ',
    title: 'vact前端响应式框架',
    intro: '一个个人开发的简单的前端框架'
  },
  {
    id: 2,
    href: 'https://juejin.cn/user/484201547707518',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015d1a57f89383a84a0e282b819a35.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666094447&t=cfe6d880a561a66e792db7cc5a38741a',
    title: '掘金',
    intro: '欢迎关注我的掘金'
  },
  {
    id: 3,
    href: 'https://github.com/yanyunwu',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsrc.onlinedown.net%2Fimages%2Fpc_imges%2Fpc_5%2F2017181126195426425744194800_600_0.jpg&refer=http%3A%2F%2Fsrc.onlinedown.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666094268&t=1b99748e367764bd522c578843decfaf',
    title: 'github',
    intro: '我的github'
  },
  {
    id: 4,
    href: 'https://www.yuque.com/yanyunwu',
    image: 'https://gw.alipayobjects.com/mdn/prod_resource/afts/img/A*kS1hRJajFFYAAAAAAAAAAAAAARQnAQ',
    title: '语雀',
    intro: '欢迎来到我的数字花园'
  }
])

function WorkListItem(props) {
  return (
    <a href={props.href} className="BodyWork-workListItem">
      <img src={props.image} />
      <div className="BodyWork-workListItemIntro">
        <h4>{props.title}</h4>
        <p>{props.intro}</p>
        <div/>
      </div>
    </a>
  )
}

export default function () {
  return (
    <div id="work" className="BodyWork-work">
      <h3>我的作品</h3>
      <div className="BodyWork-workList">
        {workList.value.map(item => <WorkListItem href={item.href} image={item.image} title={item.title} intro={item.intro} />)}
      </div>
    </div>
  )
}
