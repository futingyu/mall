<template>
  <div id="home">
      <navbar class="home-nav"><div slot='center'>购物街</div></navbar>

      <scroll class="wrap" ref='scro' :probetype="3" :pullup="true" @showtop="homeshowtop" @pullupup='homepull'>

        <homeswiper :banner1="banners"></homeswiper>
        <recommendview :recommend1="recommends"></recommendview>
        <featureview></featureview>
        <tabcontrol :titles="['流行', '新款', '精选']" class="tabcon" @tabclk="tabclk"></tabcontrol>
        <goodlist :goodli="goodshow"></goodlist>

      </scroll>
  
      <backtop @click.native="clktop" v-show="isshow"></backtop>
    <!-- 组件不支持事件监听 -->
        
  </div>
  
</template>

<script>
import homeswiper from './childcomponents/homeswiper.vue'
import recommendview from './childcomponents/recommendview.vue'
import featureview from './childcomponents/featureview.vue'

import navbar from '../../components/common/navbar/navbar.vue'
import tabcontrol from '../../components/content/tabcontrol.vue'
import goodlist from '../../components/content/goodlist.vue'
import scroll from '../../components/common/scoller/scroll.vue'
import backtop from '../../components/content/backtop.vue'

import {getHomeMultiData,getHomegoods} from '../../network/home.js'


export default {
  name: 'home',
  components:{
    navbar,
    homeswiper,
    recommendview,
    featureview,
    tabcontrol,
    goodlist,
    scroll,
    backtop  
  },
  data(){
    return{
      banners:[],
      recommends:[],
      // 数据结构设计
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      curtype:'pop',
      isshow:false
    }
  },
  computed:{
     goodshow(){
       return this.goods[this.curtype].list
     }
  },
  created(){
      this.getHomeMultiData();
      this.getHomegoods('pop');
      this.getHomegoods('new');
      this.getHomegoods('sell');
  },
  
  methods:{
     //事件相关
     tabclk(index){
           console.log(index);
           switch(index){
             case 0:
                this.curtype='pop';
                break;
             case 1:
                this.curtype='new';
                break;
             case 2:
                this.curtype='sell';
                break;
           }
     },

    clktop(){
      this.$refs.scro.scrolltop(0,0,500)//500ms中之内返回顶部
    },
    homeshowtop(position){
      
          this.isshow=(-position.y)>1000;
    },
   
    homepull(){
      this.getHomegoods(this.curtype);
      //重新计算图片异步请求完成后可滚动的高度
      this.$refs.scro.bscroller.refresh();
      
    }, 

    // 网络请求相关
      getHomeMultiData(){
            getHomeMultiData().then(
             res=>{       
                 this.banners=res.data.banner.list;
                 this.recommends=res.data.recommend.list;
               }
           )
      },
      getHomegoods(type){
        const page1=this.goods[type].page+1;
        getHomegoods(type,page1).then(
           res=>{
              
              this.goods[type].list.push(...res.data.list);
              this.goods[type].page+=1;
              this.$refs.scro.bscroller.finishPullUp();
           }
        )
      }



  }
}
</script>

<style >
  #home{
    padding-top: 44px;
     height: 100vh;
     /* 不加这个滚动条中的内容就不会显示？？？？？ */
    position: relative;
    /* 在使用滚动条需要计算高度时子绝父相 */
  }
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
     position: fixed;
    /* 会脱标 */
     left:0;
    right: 0;
    top:0;  
    z-index: 9;
    /* 防止被盖住 */
  }
  .tabcon{
    position: sticky;
    /* 加了betterscroll之后这个会失效，因为不是原生的滚动了 */
    top:44px;
    /* 44px时固定 */
  }  
 .wrap{
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom: 49px;
  left:0;
  right:0;
} 
</style>