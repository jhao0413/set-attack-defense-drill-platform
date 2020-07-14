<template>
    <div>
        <Nav/>
        <el-row class="main">
            <el-col :span="12">
                <div class="grid-content bg-purple m-left">
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item v-for="item in 6" :key="item">
                            <h3 class="medium">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light m-right">
                    
                    <h1>Drill-Platform</h1>
                    <span>开箱即用的CTF学习解决方案</span>
                    <el-row class="login-init">
                        <el-button type="primary" round>登录</el-button>
                        <el-button round>注册账户</el-button>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Nav from '../components/Nav'
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
        },
        components:{
            Nav
        }
    }
</script>

<style lang="less" scoped>
    .main {
        width: 1200px;
        height: 500px;
        margin: 30px auto;
    }

    .main .el-col {
        height: 500px;
    }

    .m-right h1 {
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