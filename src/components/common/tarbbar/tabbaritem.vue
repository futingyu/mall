<template>

    <div class="tabbaritem" @click="clk">
         <div v-if="!isactive">
          <slot name="icon"></slot>
          </div>
         <div v-else> 
        <slot name="icon_active"></slot>
         </div>
      <div :style="active">  <slot name="text"></slot> </div>
    </div>

</template>

<script>
export default {
  name: 'tabbaritem',
  props: {
       path:String,
       textcolor:{
         type:String,
         default:"red"
       }

  } , 
  // data(){
  //    return{
  //   //   isactive:false
  //    }
  // },
  computed:{
     isactive(){
       return this.$route.path.indexOf(this.path)!==-1;//当前活跃的路由是否和本组件的path属性一致
     },
     active(){
       return this.isactive? {color:this.textcolor}:{}
     }

  },
  methods:{
    clk(){
      //console.log(this.path)
     this.$router.push(this.path);
    }
  }
}
</script>

<style>
  /* .active{
    color: crimson;
  } */
   .tabbaritem{
     flex:2;
     text-align: center;
     /* 水平居中 */
     height:49px;
   }

   .tabbaritem img{
       width:24px;
       height:24px;
       margin-top: 3px;
       vertical-align: middle;
       /* 去除图片低端默认留下的3个px空间 */
   }
  
</style>
