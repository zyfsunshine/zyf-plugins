import Dropdown from './dropdown.vue'
let dropdown = {}
// 方法的第一个参数是传入的Vue，第二个是自定义的插件参数
dropdown.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am bounce.js'
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  // bouncePanel.name 组件的name属性
  Vue.component(Dropdown.name, Dropdown)
}
 
export default dropdown