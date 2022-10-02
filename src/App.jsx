import {defineState, watch} from 'vactapp'
import IndexHeader from './components/IndexHeader'
import IndexHome from "@/components/IndexHome";
import IndexBody from "@/components/IndexBody";
import IndexFooter from "@/components/IndexFooter";
import IndexLoading from "@/components/IndexLoading";
import './assets/css/App.css'
import store from "@/store";


function App() {

  /** 初始化响应式数据 */
  const data = defineState({
    headerFixed: false,
    scrolNumber: 0,
    windowHeight: 0,
    loading: true
  })

  function scrollToTop(e)  {
    data.scrolNumber = e.target.scrollTop
  }

  function windowGetHeight() {
    data.windowHeight = document.documentElement.clientHeight
  }

  window.addEventListener('load', () => {
    data.loading = false
  })

  window.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app')
    app.addEventListener('scroll', scrollToTop)
    windowGetHeight()
    window.addEventListener('resize', windowGetHeight)
  })

  watch(() => data.scrolNumber > data.windowHeight - 90, (o, n) => {
    data.headerFixed = n;
  })

  return (
    <div id="app" style={{'background-image': `url(${store.backgroundImg})`}}>
      <div className="container">
        <IndexHeader fixed={data.headerFixed} />
        <IndexHome/>
        <IndexBody/>
        <IndexFooter/>
      </div>
      <IndexLoading loading={data.loading} />
    </div>
  )
}


export default <App />
