let Mock = require("mockjs")
Mock.mock("/api/login","post",function(config){
    console.log('config.body',config)
  //后台拿到的参数都是字符串
    let obj = JSON.parse(config.body)
    console.log(obj)
    let user = obj.user
    let pw = obj.pw
    if(user==="admin"&&pw=="123456"){
        return{
            status:200,
            message:"success",
            data:{user:"admin",pw:"123456",token:"123456789asd"}
        }
    }else{
        return{
            status:200,
            message:"fail",
            data:{message:"用户密码错误"}
        }
    }
})