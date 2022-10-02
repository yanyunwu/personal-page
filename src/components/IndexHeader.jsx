import {defineState} from "vactapp";
import store from '../store'


export default class {
  constructor() {
    this.data = defineState({
      aList: [
        {
          name: '首页',
          to: '#header'
        },
        {
          name: '关于',
          to: '#about'
        },
        {
          name: '作品',
          to: '#work'
        },
        {
          name: '日志'
        }
      ]
    })
  }

  render() {
    return (
      <div id="header" style="height: 90px;">
        <div className={this.props.fixed ? 'IndexHeader-headerFixed IndexHeader-header' : 'IndexHeader-header'}>
          <div className="IndexHeader-logo">
            <img className="IndexHeader-logoImg" src={require('@/assets/image/delicious.png')} />
            <span className="IndexHeader-logoName">
              <div>{ store.logoName.upper }</div>
              <div>{ store.logoName.lower }</div>
            </span>
          </div>
          <div className="IndexHeader-navLinkList">
            {this.data.aList.map(item => <a href={item.to}>{ item.name }</a>)}
          </div>
        </div>
      </div>
    )
  }


}

