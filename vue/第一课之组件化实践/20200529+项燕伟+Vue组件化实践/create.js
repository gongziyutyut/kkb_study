import Vue from 'vue'
import Notice from '@/components/notice'

function create (component, options) {
  const Notice = Vue.extend(component)
  const notice = new Notice({propsData: options}).$mount()
  document.body.appendChild(notice.$el)
  notice.remove = () => {
    document.body.removeChild(notice.$el)
  }
  return notice
} 
/* 杨哥喊你来搬砖 */

export default {
  install (Vue) {
    Vue.prototype.$notice = (options) => {
      return create(Notice, options)
    }
  }
}