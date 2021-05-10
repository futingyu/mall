<template>

  <div  class="wrapper">
    <div>
        <slot></slot>
    </div>     
  </div>
  
</template>

<script>
import bscroll from 'better-scroll'

export default {
  name: 'scroll',
  props:{
    probetype:{
      type:Number,
      default(){
        return 0;
      }
    },
    pullup:{
      type:Boolean,
      default:false
    }

  },
  data(){
    return{
       bscroller:null
    }
  },
//   挂载完毕后滚动
  mounted(){
      let wrapper = document.querySelector('.wrapper')
      this.bscroller=new bscroll( wrapper,{click:true,probeType:this.probetype,pullUpLoad:this.pullup}); //这样div才可以监听点击事件 

      this.bscroller.on('scroll',(position)=>{          
          this.$emit('showtop',position);
      })
      //上拉加载更多
      this.bscroller.on('pullingUp',()=>{
           this.$emit('pullupup');
           
      })
  },
  methods:{
      scrolltop(x,y,time){
            this.bscroller.scrollTo(x,y,time);
      }
  }
 
  

  }

</script>

<style>
 



</style>