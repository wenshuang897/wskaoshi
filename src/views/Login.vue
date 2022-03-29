<template>
  <div class="login">
    <div class="myform">
      <div class="title">
        <h3>Login from</h3>
      </div>
      <el-form :model="formdata" :rules="rules" class="jjj">
        
                  <!-- <i class="el-icon-user-solid svg-icon"></i> -->
              <el-form-item prop="user">
                <el-input placeholder="用户名" v-model="formdata.user"> </el-input>
            </el-form-item>
       
        <el-form-item>
          <el-input placeholder="密码" v-model="formdata.pw"> <i class="el-icon-s-goods"></i></el-input>
          <!--  -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitfn">
            登录</el-button
          >
        </el-form-item>
      </el-form>
        <div class="footer">
            <span> username:admin</span><span>password:any</span>
        </div>
    </div>
  </div>
</template>
<script>
import instance from "../api/index";
export default {
  name: "Login",
  data() {
    // 自定义正则验证
    let userfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return;
      return callback(new Error("用户格式不对"));
    };
    let pwfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) return;
      return callback(new Error("用户格式不对"));
    };
    return {
      formdata: {
        user: "admin",
        pw: "123456"
      },
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pw: [{ validator: pwfn, trigger: "blur" }]
      },
      newdebouncefn: null //用于接受防抖封装后的业务函数
    };
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn,2000);
    //    就是饭都封装后的新的业务函数
  },
  methods: {
    submitfn(){
      //   点击提交业务
      this.newdebouncefn();
    },
    async loginfn() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      let {data} = await instance.post("/login", {user,pw })
        console.log(data)
        if(data.message =='fail')return this.$message.error("登陆失败")
        if(data.message =='success'){
             // 存token
             localStorage.setItem("token",data.data.token)
            this.$message({
                type:"success",
                message:"登录成功",
                duration:2000,
                onClose:()=>{ 
                    this.$router.push({name:"haha"})
                }
               
            })
        }
    }
  }
};
</script>
<style scoped>
.login {
  background-color: #2d3a4b;
  width: 100vw;
  height: 100vh;
}
.forminput{
    align-items: center;
    display: flex;
}
.login  .jjj{
     background-color: #2d3a4b;
}

.login .title {
  width: 370px;
  text-align: center;
  color: #fff;
  position: absolute;
  left: 50%;
  margin-left: -185px;
  top: -80px;
}
.login .myform {
box-sizing: border-box;
 background: #2d3a4b;
  box-sizing: border-box;
  width: 370px;
  height: 260px;
  padding: 20px 20px 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -185px;
  margin-top: -130;
}

.login .btn {
  width: 100%;
}
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.footer span{
    margin-right: 20px;
    color:#fff;
    font-size: 14px;
}
</style>
