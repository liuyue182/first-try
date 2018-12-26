<template>
    <ul>
        <li v-for="(item,key) in data">{{item}}</li>
        <router-view/>
    </ul>
</template>
<script>
    export default {
        data(){
            return{
                data:[]
            }
        },
        mounted:function () {
            this.Axios.get('/api/data').then(res=>{
                this.data =res.data;
                console.log(res)
            })
        }
    }
</script>
<style>

</style>