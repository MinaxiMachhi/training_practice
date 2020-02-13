<template>
<div>
    {{name}}
    <props-demo-child :name="name" :user="user"></props-demo-child>
</div>
</template>
<script>
import propsDemoChild from "@/components/props-demo-child.vue";
export default {
    data(){
        return{
            name:'Minaxi machhi',
            user:{
              firstname:'Minaxi',
              workplace:'bacancy'
            }
        }
    },
    components: {
      propsDemoChild
    }
}
</script>