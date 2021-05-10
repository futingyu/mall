<template> 

    <div class="recommendview">

     <div v-for="item in recommend1" class="recommenditem">
         <a :href="item.link">
             <img :src="item.image">
             <div>{{item.title}}</div>
         </a>
     </div>

    </div> 
   
</template>

<script>


export default {
  name: 'reommendview',
  props:{
            recommend1:{
                type:Array,
                default() {
                    return []
                }
            }
        },

 
} 
</script>

<style scoped>
 .recommendview{
     display:flex;
     text-align: center;
     padding-top: 10px;
 }
 .recommenditem{
     flex:1
 }
 .recommenditem img{
     
     width:70px;
     height:70px;
 }
</style>
