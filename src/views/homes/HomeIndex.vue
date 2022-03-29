<template>
    <div>
        <div class="title">文章列表</div>
        <div class="top">
             <div  @click="addfn"  class="addbtn">编辑添加字段各种规则验证示例</div>
              <div  class="addbtn hh">本地导出表格</div>
             <el-input v-model="input" placeholder="请输入文章标题" class="input"></el-input>
              <el-select v-model="value" placeholder="请选择类型">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
             <el-button type="success">查询</el-button>
               <el-button type="warning">重置</el-button>

        </div>
       
       <el-table :data="arrs">
           <el-table-column prop="title" label="文章标题">
           </el-table-column>
           <el-table-column prop="aouthor" label="作者">
           </el-table-column>
           <el-table-column prop="num" label="浏览量">
           </el-table-column>
           <el-table-column prop="relpay" label="回复">
           </el-table-column>
           <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
       </el-table>
        <!-- 弹窗 -->
       <el-dialog  :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="品牌名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="浮点" :label-width="formLabelWidth">
            <el-input v-model="form.text" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input v-model="form.text" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="机构地址" :label-width="formLabelWidth">
            <el-input v-model="form.text" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="管理员手机号" :label-width="formLabelWidth">
            <el-input v-model="form.text" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.text" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="fnsure">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script>
import instance from "../../api/index"
export default {
    name:"HomeIndex",
    data(){
        return{
            arrs:null,
              form:{
                name:"zhangsan",
                text:'客户',
                id:"0"
            },
            options:{
                label:"找平结束",
                key:"技术交流"
            },

            // title:'',
            debounceedit:null, //新业务防抖封装
            debouncedelete:null,
            formLabelWidth:"120px",
            dialogFormVisible:false
         
        }
    },
    created(){
        this.getHomeIndex()
    },
    methods:{
        handleDelete(a,b){
             //    用户行为
            console.log(a,b)
           
            this.$confirm("确定删除吗","提示",{
                confirmButtonText:"确定",
                cancelButtonText:"取消",
                type:"warning",
            }).then(()=>{
                // 确定可回调函数
                console.log("删除了")
                this.deleteHomeIndex(a)
               
            }).catch(()=>{
                console.log("你取消了")
            })

        },
        async getHomeIndex(){
            let {data} = await instance.get("/homeindex") 
            console.log(data)
            this.arrs = data
        },
        // 删除业务
        async deleteHomeIndex(index){
            let {data} = await instance.delete("/homeindex/"+index)
            console.log(data)
             this.getHomeIndex()
        },
        
        // 添加
         addfn(i){
            console.log(i)
            this.i = i
            this.form.name = '',
            this.form.text = ''
            this.dialogFormVisible = !this.dialogFormVisible
        },
    }
}
</script>
<style scoped>
.top{
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
}
.input{
    width: 130px;
    height: 32px;
}
.addbtn{
    background: #0082f1;
    font-size: 12px;
    width: 212px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    color: #fff;
}
.hh{
    width: 100px;
}
.title{
    height: 38px;
    line-height: 38px;
    margin-bottom: 10px;;

}
</style>