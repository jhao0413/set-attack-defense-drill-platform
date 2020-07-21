<template>
    <div class="log">
        <el-row>
            <el-col :span="12" class="left"><img src="../assets/img/ctf.png" alt=""></el-col>
            <el-col :span="12" class="right">
                <div class="login">
                    <h2 class="login-title">用户登录</h2>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                        class="demo-ruleForm">
                        <el-form-item prop="text">
                            <el-input type="text" v-model="ruleForm.user" autocomplete="off" placeholder="请输入账号/邮箱">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="text" style="margin-bottom:10px;">
                            <el-input type="text" v-model="ruleForm.code" autocomplete="off" placeholder="请输入验证码"
                                style="width:60%; float:left"></el-input>
                            <img src="../assets/img/code.jpg" alt="" style="float:left; width:30%; margin:3px 5%">
                        </el-form-item>
                        <div style="width:100%;text-align:right;margin-right:30px;line-height:40px;">
                            <h5 style="margin-right:50px">没有账号？现在注册</h5>
                        </div>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')" style="width:300px;">登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    .log {
        height: 720px;
        background: #F3F3F3;
    }

    .left {
        height: 720px;
    }

    .left img {
        margin: 240px auto;
    }

    .right {
        height: 720px;
    }

    .login {
        width: 430px;
        height: 430px;
        background: #FFFFFF;
        box-shadow: 0 0 3px #bbb;
        border-radius: 20px;
        margin: 140px auto;
    }

    .login-title {
        line-height: 100px;
    }

    .el-form-item {
        margin-bottom: 40px;
    }

    .demo-ruleForm>>>.el-form-item__content {
        margin: 0 50px !important;
    }
</style>

<script>
    import axios from 'axios'
    export default {
        data() {
            var checkUser = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    if (this.ruleForm.user !== '') {
                        this.$refs.ruleForm.validateField('user');
                    }
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    code: '',
                    user: ''
                },
                rules: {
                    username:[{
                        validator: checkUser,
                        trigger: 'blur'
                    }],
                    pass: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                },
                data1: {
                    params: {
                        username: 'admin',
                        password: 'qweasd',
                        verify_code: '123456'
                    },
                    headers: {
                        'content-type': 'text/plain:charset=UTF-8'
                    }
                }
            };
        },
        methods: {
            submitForm(formName) {
                console.log(this.ruleForm.user);
                console.log(this.ruleForm.pass);
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        axios.post('/api/login', this.data1)
                            .then(response => {
                                console.log(response);
                            });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>