import {defineState} from "vactapp";
import store from "@/store";


export default function () {

  const data = store.footerInfo

  return (
    <div className="IndexFooter-footer">
      <div className="IndexFooter-friend">
        <h6>友情链接</h6>
      </div>
      <div className="IndexFooter-concat">
        <h6>与我联系</h6>
        <div><a href="#">QQ：{data.qq}</a></div>
        <div><a href="#">邮箱：{data.mail}</a></div>
      </div>
      <div className="IndexFooter-record">
        <h6>© {data.year} {data.name}</h6>
        <div><a href="#">{data.bnum}</a></div>
      </div>
    </div>
  )
}
