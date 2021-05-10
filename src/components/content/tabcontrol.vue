<template>

  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="index" class="tabitem" :class="{active:currentindex==index}" @click="clk(index)">
      <span>{{item}}</span>
    </div>
  </div>
    
</template>

<script>


export default {
  name: 'tabcontrol',
  props:{
    titles:{  
      type:Array,
      default(){
          return [];
      }
    }
  },
  data(){
      return {
          currentindex:0
      }
  },
  methods:{
      clk(index){
          this.currentindex=index;
          this.$emit('tabclk',index);
      }
  }
  
}
</script>

<style>
  .tabcontrol{
      display:flex;
      background-color: var(--color-background);
      z-index: 9;
  }
  .tabitem{
      flex:1;
      text-align: center;
      height:44px;
      line-height:44px;
  }

 .active{
     color:var(--color-high-text);
 }   
 
 .active span{
     border-bottom:2px solid  var(--color-high-text);
 }
</style>