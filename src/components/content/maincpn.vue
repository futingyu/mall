<template>
  
    <tabbar>
           <tabbaritem path="/home" textcolor="red">
             <img slot="icon" src="../../assets/imgs/tarbbar/home.svg" alt="">
             <img slot="icon_active" src="../../assets/imgs/tarbbar/home1.svg" alt="">
             <div slot="text">首页</div>        
           </tabbaritem>

          <tabbaritem path="/catagory">  
             <img slot="icon" src="../../assets/imgs/tarbbar/catagory1.svg" alt="">
             <img slot="icon_active" src="../../assets/imgs/tarbbar/catafory.svg" alt="">
             <div slot="text">分类</div>        
           </tabbaritem>

           <tabbaritem path="/shopcar">
             <img slot="icon" src="../../assets/imgs/tarbbar/shopcar.svg" alt="">
             <img slot="icon_active" src="../../assets/imgs/tarbbar/shopcar1.svg" alt="">
             <div slot="text">购物车</div>        
           </tabbaritem>

           <tabbaritem path="/my">
             <img slot="icon" src="../../assets/imgs/tarbbar/my.svg" alt="">
             <img slot="icon_active" src="../../assets/imgs/tarbbar/my1.svg" alt="">
             <div slot="text">我的</div>        
           </tabbaritem>
       </tabbar>
  
</template>

<script>
import tabbar from "../common/tarbbar/tabbar.vue"
import tabbaritem from"../common/tarbbar/tabbaritem.vue"

export default {
  name: 'maincpn',
  components:{
    tabbar,
    tabbaritem
  }

  
}
</script>

<style>
  
    
  
</style>