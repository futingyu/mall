<template>
  <div id="app">
    <div id=tarbbar>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style>
  
    #tarbbar{ 
      display:flex;
       background-color: #f6f6f6; 
      /* flex布局 */
       position:fixed; 
      /* 固定定位 */
       right:0; 
       left:0; 
       bottom:0;   
       box-shadow:0 -3 1px rgba(100,100,100,.8)
       /* 此处好像没有起作用 */
    } 
  
</style>
