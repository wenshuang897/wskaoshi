let Mock = require("mockjs")
let data = [
    {id:0,title:"中国npm进项原声集广告",aouthor:" TrystanCocolatte ",num:11,relpay:11},
    {id:1,title:"中国npm进项原声集广告5552",aouthor:" TrystanCocolatte ",num:15,relpay:11},
    {id:2,title:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",aouthor:"hjkjkj",num:46384,relpay:28},
    {id:3,title:"Node.js 2021年开发者报告解读：健康稳步的发展中",aouthor:" supperchong ",num:78654,relpay:11},
    {id:4,title:"【2021/11/26】请大家遵纪守法，勿发布不合规内容",aouthor:"hjkjkj",num:168867,relpay:15},
    {id:5,title:"请问大家用什么框架搭建静态服务器比较好啊？k",aouthor:" embbnux ",num:176927,relpay:11},
    {id:6,title:"冒个泡，过完年面试奇虎360、",aouthor:"我是hjkjkj",num:11},
    {id:7,title:"[noty.js] 沉迷造轮子，无法自拔！又写了一个通知组件~",aouthor:" h-cenggel ",num:5984,relpay:42},
    {id:8,title:"nextjs tailwind graphql graphcms cms 项目分享",aouthor:" daGaiGuanYu ",num:56987,relpay:8},
    {id:9,title:"大家开发都用什么框架呢？",aouthor:"我是hjkjkj",num:11},
    {id:10,title:"Visual Studio、VSCode、CLion、Lightly， C语言新手应该如何选择 IDE？",aouthor:" LuckyZhangWeiwei ",num:48621,relpay:21},
    
]
Mock.mock("/api/homeindex","get",function(config){
    console.log(config)
    return data
})
// 删除
Mock.mock(/\/api\/homeindex\/\d/,"delete",function(config){
console.log(config.url)
let arr = config.url.split("/")
let id = arr.pop()
 data.splice(id,1)
// //  凹陷数据解决方案
//  data = data.map(function(item,id){
//     //  返回一个对象
//         return{
//             id,
//             name:item.name,
//             text:item.text
//         }
//   })
    return data
})
