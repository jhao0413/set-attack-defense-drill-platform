<template>
    <div>
        <Nav />
        <el-row class="main">

            <el-row>
                <el-col class="init" :span="12">
                    <div class="grid-content bg-purple m-left">
                        <el-carousel :interval="4000" type="card" height="200px">
                            <el-carousel-item v-for="item in bannerList">
                                <img style="height:100%; width:100%" :src="item.img" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <el-col class="init" :span="12">
                    <div class="grid-content bg-purple-light m-right">

                        <h3>“知行”网络空间安全人才培养体系</h3>
                        <span>提供一站式在线网络安全教育学习方案</span>
                        <el-row class="login-init">
                            <el-button type="primary" round><router-link to="/login" class="text">登录</router-link></el-button>
                            <el-button round><router-link to="/register" class="text1">注册账户</router-link></el-button>
                        </el-row>
                    </div>
                </el-col>
            </el-row>

            <h2 style="line-height:50px">教学内容</h2>

            <el-row class="content1"  v-for="(item,index) in classList" >
                <el-col :class="[index%2!=0 ? 'content1-left' : '']" :span="16" class="content-text">
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                </el-col>
                <el-col :span="8" class="content-img1"><img :src="item.img" alt=""></el-col>
            </el-row>

            <el-row class="sort" :gutter="20">
                <h2 style="line-height:50px">平台特点</h2>
                <el-col :span="8" v-for="item in sortList">
                    <div class="grid-content">
                        <div class="demo-fit">
                            <div class="block">
                                <el-avatar shape="square" :size="100"  :src="item.img"></el-avatar>
                                <!-- <h5 class="title">Title</h5> -->
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            
        </el-row>
        <Footer/>
    </div>
</template>

<script>
    import Nav from '../components/Nav'
    import Footer from '../components/footer'
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                bannerList:[{
                    img: require('../assets/img/渗透测试2.png') 
                },{
                    img: require('../assets/img/渗透测试4.png') 
                },{
                    img: require('../assets/img/web.png') 
                },{
                    img: require('../assets/img/re(1).png') 
                }],
                classList:[{
                    title: 'Web',
                    content: '随着WEB2.0的发展，基于WEB环境的互联网应用越来越广泛，企业的各种应用都假设在WEB平台上，与此同时，WEB网站面临的风险也越来越大，常见的漏洞主要有SQL注入，XSS，CSRF，SSRF等。本课程将带领你全面学习WEB基础课程，包括互联网协议，后台开发语言，代码审计等，让你从web小白晋升为web高手',
                    img: require('../assets/img/h1.png') 
                },{
                    title: 'HACKPWN',
                    content: 'PWN，即漏洞挖掘和利用，通过对程序文件执行流，系统架构，程序源码分析，逆向分析等方法，来寻找和分析可利用漏洞，并构造自动化利用工具，主要方向为二进制漏洞研究，在真实环境中对不同系统架构的分析，以及程序弱点的分析，来寻找程序缺陷，同时研究不同漏洞模型的利用手法，为安全研究岗路线的学习提供入门级指导',
                    img:require('../assets/img/h2.png') 
                },{
                    title: '渗透测试',
                    content: '渗透测试，是为了证明网络防御按照预期计划正常运行而提供的一种机制，即寻找网络系统安全漏洞。思而听网络科技公司下设的渗透测试部门，在该平台针对中学生打造了一套渗透测试培训方案，引导中学生了解渗透测试，让中学生经过学习之后能够掌握一定的渗透测试知识及相关技能，为以后进入信息安全等行业打下基础。',
                    img:require('../assets/img/h3.png') 
                },{
                    title: 'MISC',
                    content: 'MISC（Miscellaneous），中文即杂项，是切入 CTF 竞赛领域，培养兴趣的最佳入口。Misc 考察基本知识，对安全技能的各个层面都有不同程度的涉及，可以在很大程度上启发思维。Misc的题目包括隐写，数据还原，流量分析、社会工程等。MISC入门简单并不像PWN\REVERSE等需要深厚的理论基础，学习时通常以工具使用和经典题型练习入手，就可以在短时间内让你体验到CTF竞赛的魅力。',
                    img:require('../assets/img/h4.png') 
                },{
                    title: 'Re',
                    content: 'RE（Reverse Engineering），即逆向工程，是一种探究应用程序内部组成结构以及工作原理的技术。运用逆向分析技术，我们可以轻松窥探程序内部结构，掌握其工作原理。可以对恶意软件破解分析的同时，还可以在程序测试阶段发现问题后直接修改文件或者内存解决这些问题、或为程序添加新功能，使程序更加灵活强大。',
                    img:require('../assets/img/h5.png') 
                }],
                sortList:[{
                    img:require('../assets/img/4.png')
                },{
                    img:require('../assets/img/9.png')
                },{
                    img:require('../assets/img/12.png')
                },{
                    img:require('../assets/img/10.png')
                },{
                    img:require('../assets/img/6.png')
                },{
                    img:require('../assets/img/7.png')
                }]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            addClass: function (index) {
                this.current = index;
            }
        },
        components: {
            Nav,
            Footer
        }
    }
</script>

<style lang="less" scoped>
.text{
    color: #FFF;
    text-decoration: none;
}

.text1{
    color: #606266;
    text-decoration: none;
}

    .main {
        width: 1200px;
        margin: 30px auto;
    }

    .init {
        height: 500px;
    }

    .m-right h3 {
        margin-top: 150px;
        line-height: 80px;
        font-size: 26px;
    }

    .login-init {
        margin-top: 50px;
    }

    .el-button {
        font-size: 18px;
    }

    .el-carousel {
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

    .content1 {
        height: 300px;
        margin: 50px auto;
        border-radius: 10px;
        box-shadow: 0 0 2px #bbb;
    }

    .content1 .el-col {
        height: 300px;
    }

    .content1-left{
        float: right;
    }

    .content-text {
        padding: 20px;
        text-align: left;
    }

    .content-text h3 {
        line-height: 50px;
    }

    .content-text p {
        line-height: 40px;
    }

    .content-img1 {
        float: right;
        background-size: 100% 100%;
        border-radius: 10px;
    }

    .content-img1 img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .sort .el-col {
        height: 200px;
        margin: 10px auto;
    }

    .sort .bg-purple-dark {
        height: 200px;
        // background: #99a9bf;
    }

    .sort .bg-purple {
        height: 200px;
        padding-top: 1px;
        // background: #d3dce6;
    }

    .sort .bg-purple-light {
        height: 200px;
        // background: #e5e9f2;
    }

    .sort .grid-content {
        height: 200px;
        border-radius: 4px;
        min-height: 36px;
    }

    .sort .row-bg {
        padding: 10px 0;
        // background-color: #f9fafc;
    }

    .el-avatar{
        background: #FFF;
    }

    .demo-fit{
        margin: 20px auto;
    }

    .demo-fit h5{
        line-height: 40px;
    }
</style>