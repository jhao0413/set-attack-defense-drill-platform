<template>
    <div>
        <el-row class="nav">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <h3 class="title">SET-Attack-Defense-Drill-Platform</h3>
                </div>
            </el-col>
            <el-col :span="10">
                <div class="grid-content bg-purple">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                        @select="handleSelect">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="2">赛事中心</el-menu-item>
                        <el-menu-item index="3">技能树</el-menu-item>
                        <el-menu-item index="4">历年真题</el-menu-item>
                        <el-menu-item index="5">工具</el-menu-item>
                        <el-menu-item index="6">排行榜</el-menu-item>
                    </el-menu>
                    <div class="line"></div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple login">登录</div>
            </el-col>
        </el-row>

        <el-row class="main">
            <el-col :span="12">
                <div class="grid-content bg-purple m-left">
                    <h1>Drill-Platform</h1>
                    <span>开箱即用的CTF学习解决方案</span>
                    <el-row class="login-init">
                        <el-button type="primary" round>登录</el-button>
                        <el-button round>注册账户</el-button>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light m-right">
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item v-for="item in 6" :key="item">
                            <h3 class="medium">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
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

    .login {
        line-height: 60px;
    }

    .main {
        width: 1200px;
        height: 500px;
        margin: 30px auto;
    }

    .main .el-col {
        height: 500px;
    }

    .m-left h1 {
        margin-top: 150px;
        line-height: 80px;
        font-size: 40px;
    }

    .login-init {
        margin-top: 50px;
    }

    .el-button {
        font-size: 18px;
    }

    .el-carousel{
        margin-top: 150px;
    }

    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>