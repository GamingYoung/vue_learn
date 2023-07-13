export const a = {
    mounted() {
        console.log('mixin中mounted提示')
    }
}

export const b = {
    data() {
        return{
            a:1,
            b:2
        }
    }
}