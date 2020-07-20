<template>
  <div class="about">
    <Nav />
    <el-row class="about-main" :gutter="20">
      <el-col class="ab1" :span="16" :offset="4">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="about-menu menu" id="menu">
              <router-link v-for="(item,index) in liList" :to="item.link" :key="item.title" v-bind:class="{ isactive:index==current}">
                <h3 v-on:click="addClass(index)">{{item.title}}</h3>
              </router-link>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="about-content">
              <router-view />
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .about-main {
    margin-top: 30px;
    margin-bottom: 20px;
    margin-right: 0 !important;
  }

  .ab1 {
    height: 500px;
    border-radius: 4px;
  }

  /* .about-menu {
    height: 200px;
    box-shadow: 0 0 3px #bbb;
  } */

  .about-content {
    height: 500px;
    /* box-shadow: 0 0 3px #bbb; */
  }

  .menu {
        text-align: left;
        float: left;
    }

    .menu h3 {
        line-height: 60px;
    }

    .menu a{
        color: #BDBDBD;
        text-decoration: none;
    }

    .router-link-active {
        color: #BDBDBD;
        text-decoration: none;
    }

    .isactive {
        font-size: 28px;
        color: #424242 !important;
    }
</style>

<script>
  import Nav from '../components/Nav'
  export default {
    components: {
      Nav
    },
    data: function () {
            return {
                isActive: true,
                current: 0,
                liList: [{
                    title: "关于公司",
                    link: "content"
                }, {
                    title: "关于战队",
                    link: "content1"
                }, {
                    title: "关于平台",
                    link: "content2"
                }],
            }
        },
        methods: {
            addClass: function (index) {
                this.current = index;
            }
        }
  }
</script>