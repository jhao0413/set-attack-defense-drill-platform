<template>
    <el-row class="footer">
        <el-col :span="16" :offset="4">
            <el-col class="footer-title" :span="17">
                <h2>“知行”网络空间安全人才培养体系</h2>
                <el-col :span="4"><router-link to="/about/content" class="text">关于“知行”</router-link></el-col>
                <el-col :span="4">关于学院</el-col>
                <el-col :span="4">讲师招募</el-col>
                <el-col :span="4">用户协议</el-col>
                <el-col :span="8">客服热线：400-666-6666</el-col>
                <el-col class="copyright" :span="24">©2020 思而听网络科技有限公司 公司地址：新疆克拉玛依市克拉玛依区前进小区53栋B1-8号商铺</el-col>
            </el-col>
            <el-col class="group" :span="7">
                <el-col class="group" :span="12">
                    <img src="../assets/img/group.jpg" alt="">
                <span>学习交流群</span>
                </el-col>
                <el-col class="group" :span="12">
                    <img src="../assets/img/group.jpg" alt="">
                <span>学习交流群</span>
                </el-col>
            </el-col>
        </el-col>
        
    </el-row>
</template>

<style scoped>

.text{
    color: #909399;
    text-decoration: none;
}

.footer{
    height: 200px;
    color: #909399;
    background: #000;
}

.footer-title{
    height: 180px;
    text-align: left;
}

.footer-title h2{
    line-height: 120px;
}

.copyright{
    line-height: 50px;
}

.group{
    color: #909399;
}

.group img{
    width: 120px;
    border-radius: 10px;
    margin: 40px 10px 5px;
    float: left;
}
</style>