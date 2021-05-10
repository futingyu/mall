<template> 
        <swiper>
            <swiper-item v-for="item in banner1" >
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
   
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index.js'

export default {
  name: 'homeswiper',
  props:{
            banner1:{
                type:Array,
                default() {
                    return []
                }
            }
        },

  components:{
    Swiper,
    SwiperItem
  }
} 
</script>

