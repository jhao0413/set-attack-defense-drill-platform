<template>
    <div class="log">
        <el-row>
            <el-col :span="12" class="left"><img src="../assets/img/ctf.png" alt=""></el-col>
            <el-col :span="12" class="right">
                <div class="login">
                    <h2 class="login-title">用户注册</h2>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                        class="demo-ruleForm">
                        <el-form-item prop="text">
                            <el-input type="text" v-model="ruleForm.user" autocomplete="off" placeholder="请输入账号">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="text">
                            <el-input type="text" v-model="ruleForm.user" autocomplete="off" placeholder="请输入邮箱">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"  placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"  placeholder="请再次输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')" style="width:300px;">注册
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
        height: 480px;
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
    export default {
        components: {

        }
    }
</script>

<script>
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
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
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    user: '',
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    pass: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    checkPass: [{
                        validator: validatePass2,
                        trigger: 'blur'
                    }],
                    age: [{
                        validator: checkAge,
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
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