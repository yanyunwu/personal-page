import { defineState, watch, defineComponent } from 'vactapp'
import IndexHeader from './components/IndexHeader'
import IndexHome from "@/components/IndexHome";
import IndexBody from "@/components/IndexBody";
import IndexFooter from "@/components/IndexFooter";
import IndexLoading from "@/components/IndexLoading";
import './assets/css/App.css'
import store from "@/store";


const App = defineComponent(function ({life}) {

  /** 初始化响应式数据 */
  const data = defineState({
    headerFixed: false,
    scrollNumber: 0,
    windowHeight: 0,
    loading: true
  })

  let scrollToTop = (e) => {
    data.scrollNumber = e.target.scrollTop
  }

  function windowGetHeight() {
    data.windowHeight = document.documentElement.clientHeight
  }

  window.addEventListener('load', () => data.loading = false)

  life.mounted(() => {
    const app = document.getElementById('app')
    app.addEventListener('scroll', scrollToTop)
    windowGetHeight()
    window.addEventListener('resize', windowGetHeight)
  })

  // 监听高度变化
  watch(() => data.scrollNumber > data.windowHeight - 90, (o, n) => {
    data.headerFixed = n;
  })

  return (
    <div>
      <div className="container">
        <IndexHeader fixed={data.headerFixed} />
        <IndexHome/>
        <IndexBody/>
        <IndexFooter/>
      </div>
      <IndexLoading loading={data.loading} />
    </div>
  )
})

export default <App />
