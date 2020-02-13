<template>
<div>
    Inside child
    {{workplace}}<br>
    {{name}}
    <button @click="seen=!seen">toggle</button> 
    <!-- in v-show style display="none" & in v-if it remove the whole element -->
    <p v-show="seen"> Minaxi</p>
</div>
</template>
<script>
export default {
    name: 'props-demo-child',
    props:['name','user'],
    data(){
        return{
            workplace:'bacancy',
            seen:true

        }
    },
    mounted() {
        console.log("=========name", this.name);
        console.log("=========workplace", this.user);
    }
}
</script>