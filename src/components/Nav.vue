<template>
<div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">赛事中心</el-menu-item>
        <el-menu-item index="3">技能树</el-menu-item>
        <el-menu-item index="4">历年真题</el-menu-item>
        <el-menu-item index="5">工具</el-menu-item>
        <el-menu-item index="6">排行榜</el-menu-item>
    </el-menu>
    <div class="line"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="less" scoped>
.el-menu{
    width: 100%;
}
</style>