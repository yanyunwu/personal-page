import { state } from "vactapp";

export default function () {

  const tags = state([
    '前端开发',
    '在校学习',
    '准备实习'
  ])

  const intro = state([
    '我是一名大三学生',
    '从大一开始学习前端，目前快2年时间了',
    '有理想，有追求，但也有点迷茫',
    '喜欢看动漫，看科幻电影，看恐怖片',
    '希望未来能够躺平，哈哈哈'
  ])

  return (
    <div id="about" className="BodyAbout-about">
      <h3>关于我</h3>
      <div className="BodyAbout-tagBox">
        {tags.value.map(item => <span>{ item }</span>)}
      </div>
      <div className="BodyAbout-intro">
        {intro.value.map(item =>  <p>{ item }</p>)}
      </div>
    </div>
  )
}
