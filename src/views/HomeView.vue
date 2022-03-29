<template>
  <div class="home">
    <div>
    <el-container>
      <el-aside style="background-color:#2d3a4b" class="aside">
        <el-menu background-color="#2d3a4b" text-color="#fff" :router="true">
          <el-menu-item class="item" style="background:#0079d9">
            <span slot="title" >elementui 管理后台</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-thumb"></i>
              <span slot="title">首页</span>
            </template>
          </el-submenu>
          <!-- 二级菜单 -->
          <el-submenu index="3" class="item">
            <template slot="title">
              <i class="el-icon-price-tag"></i>
              <span slot="title">文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" class="blue">文章列表</el-menu-item>
              <el-menu-item index="3-2" class="blue">多层级路由示例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-header style="text-align: right; font-size: 12px">
            <div class="hearder-right">
              <i class="el-icon-bell" style="margin-right: 15px"></i>
              <el-dropdown>
              <i class="el-icon-arrow-down" style="color:#fff"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>推出系统</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>admin</span>
            </div>
            
    </el-header>
          
          <!-- 下拉 -->
          <!-- <div>
            <el-dropdown>
              <img src="@/assets/logo.png" alt="" class="img" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>推出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div> -->
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import instance from "@/api/index";

export default {
  name: "HomeView",
  components: {
   
  },
  created(){

  },
  methods:{
    async fn(){
       let {data} = await instance.get("/home" )
      
    }
   
  }

};
</script>
<style scoped>
.aside {
  height: 100vh;
}
.aside .item {
  color: #fff;
  background-color: #0079d9;
}
.blue{
  background-color: #0079d9;
}

.aside .item span {
  color: #fff;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.header{
    /* display: flex; */
    /* justify-content: space-between; */
    align-items: center;
    line-height: 60px;
    background: #0079d9;
    color: #fff;
}
.hearder-right{
  float: right;
}
.fr{
  float: right;
}
</style>
