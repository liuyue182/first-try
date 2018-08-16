<template>
    <ul class="foot">
        <li v-for="menu in menuList">
            <router-link :to="menu.path">{{menu.name}}</router-link>
        </li>
    </ul>
</template>
<script>
    export default{
        props:['menuList']
    }
</script>
<style lang="scss">
    .foot{
        height: 1rem;
        width: 100%;
        background: rgb(33, 150, 243);
        color: #fff;
        position: fixed;
        bottom: 0;
        line-height: 1rem;
        display: flex;
        li{
            flex-grow: 1;
            text-align: center;
            a{
                color:#ccc;
                outline: none;
                &.router-link-active{
                    color:#fff;
                }
            }
        }

    }
</style>