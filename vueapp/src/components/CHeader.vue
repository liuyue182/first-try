<template>
    <div class="header">
        <span class="header-home">首页</span>
        <h1 class="header-title">Moive</h1>
    </div>
</template>
<script>

</script>
<style lang="scss">
    .header{
        height: 1rem;
        width: 100%;
        background: rgb(33, 150, 243);
        color: #fff;
        line-height: 1rem;
        position: fixed;
        top: 0;
        &-home{
           font-size: 20px;
        }
        &-title{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>