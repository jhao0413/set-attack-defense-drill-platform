<template>
    <div>
        <el-row class="nav">
            <el-col :span="14">
                <div>
                    <h3 class="title">“知行”网络空间安全人才培养体系</h3>
                </div>
            </el-col>
            <el-col :span="10">
                <div>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                        @select="handleSelect">
                        <el-menu-item index="1"><router-link to="/" class="text">首页</router-link></el-menu-item>
                        <el-menu-item index="2">赛事中心</el-menu-item>
                        <el-menu-item index="3">技能树</el-menu-item>
                        <el-menu-item index="4">历年真题</el-menu-item>
                        <el-menu-item index="5">工具</el-menu-item>
                        <el-menu-item index="6">排行榜</el-menu-item>
                    </el-menu>
                    <div class="line"></div>
                </div>
            </el-col>
        </el-row>
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
    .nav {
        height: 60px;
        border-bottom: solid 1px #e6e6e6;
    }

    .nav div {
        height: 70px;
    }

    .title {
        line-height: 60px;
    }

    .text{
        text-decoration: none;
    }
</style>
