<template>
  <div class="goodlist">
    
         <goodlistitem v-for="item in goodli":goodliitem="item"></goodlistitem>
     <!-- 若外面包裹div则不行 -->
  </div>
  
</template>

<script>
import goodlistitem from './goodlistitem'

export default {
  name: 'goodlist',
  props:{
      goodli:{
          type:Array,
          default(){
              return [];
          }
      }
  },
  components:{
     goodlistitem
  },
  


  }

</script>

<style>
 
.goodlist{
  display:flex;
  /* 不要在一行，根据width多行显示 */
  flex-wrap: wrap; 
  justify-content: space-around;
  background-color: var(--color-background);
}


</style>