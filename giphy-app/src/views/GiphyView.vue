<template>
    <div class="parent">
        <p></p>
        <giphy-item v-for="item in data" v-bind:key="item.id" v-bind:item="item" class="giphy"></giphy-item>
    </div>
</template>

<script>
import giphyService from '../services/GiphyService';
import GiphyItem from '../components/GiphyItem.vue';
export default{
    components:{
        GiphyItem
    },
    data(){
        return{
            data:[]
        }
    },
    created(){
        giphyService.getGiphys()
        .then(response => {
            //console.log(response.data.data);
            this.data = response.data.data;
            
        })
    }
}

</script>

<style scoped>
    .parent{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        background-color: black;
        
    }

  .giphy{
        border: 5px white dotted;
    }
</style>


