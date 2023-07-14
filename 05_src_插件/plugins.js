import { onUpdated } from "vue"

export default {
    install(Vue){
        Vue.filter('mySlice', function(value){
            return value.slice(0, 4)
        })

        Vue.directive('fbind', {
            bind(element, binding){
                element.value = binding.value
            },
            inserted(element, binding){
                element.focus()
            },
            update(element, binding){
                element.value = binding.value
            }
        })

        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })

        Vue.prototype.hello = ()=>{alert('你好啊！')}
    }
}