<template>
    <div class="content">
        <div class="main">
            <h3 class="m-title">关于战队</h3>
            <p> &nbsp; &nbsp; &nbsp; &nbsp;TaL 战队成立于 2020 年 5 月 4 日，战队名取自于公司名（克拉玛
                依市思而听网络科技有限公司）中的思而听的英文“Think and
                Listen”，战队图标为 ，核心意义在于思考的同时
                也需要用心去倾听，二者是相辅相成、缺一不可的。图标最为突出的
                是 A 这个符号，它起连接作用强调思考和倾听二者的关系的同时，也
                有 Top，即顶尖的意思。在图标下方的文字“TaL”中，“a”为小写
                的“a”，而不是大写的 a，这里的另一层意思是，我们希望队员们能
                在获得成就之后，依然谦虚勤勉，砥砺前行。
                TaL 战队目前成员有 30 余人。TaL 自成立以来，在短短两个月的
                时间里，参加了多项 CTF 赛事，并都取得了优异的成绩。如，在 2020
                年的“第二届网鼎杯”赛事中，取得了新疆第 1 名、西北第 3 名、全
                国第 41 名的优异成绩，成功进入线下赛中；在 2020 年五月的“第五
                空间”赛事中，取得了第 38 名的优异成绩，也是成功地进入到了线
                下赛中。</p>
        </div>
    </div>
</template>

<style>
    .content {
        width: 100%;
        height: 500px;
        box-shadow: 0 0 5px #bbb;
        float: left;
        border-radius: 10px;
    }

    .main {
        width: 100%;
        height: 500px;
        font-size: 20px !important;
        margin: 30px auto;
    }

    .main p {
        text-indent: 2em;
        font-size: 16px;
        line-height: 40px;
        padding: 20px;
        text-align: left;
        color: #909399;
    }
</style>

<script>
    export default {
        data() {
            return {
                activeName: '1',
                value1: true,
                value2: true,
                value3: true,
            };
        }
    }
</script>