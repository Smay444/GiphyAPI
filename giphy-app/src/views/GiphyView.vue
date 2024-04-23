<template>
    <div class="parent">
        <form @submit.prevent="searchGiphys">
            <label for="text">Search Giphy</label>
            <input type="text" v-model="searchQuery">
            <input type="submit" value="Search">
        </form>
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
            data:[],
            searchQuery: 'dog'
        }
    },
    created(){
        giphyService.getGiphys()
        .then(response => {
            //console.log(response.data.data);
            this.data = response.data.data;
            
        })
    },
    methods: {
        fetchGiphys(query){
            giphyService.getGiphys(query)
                .then(response => {
                    this.data = response.data.data;
                })
                .catch(error =>{
                    console.error(error)
                });
        },
        searchGiphys(){
            this.fetchGiphys(this.searchQuery);
        }
    }
}

</script>

<style scoped>
    .parent{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        background-color: seashell;
        
    }

  .giphy{
        border: 5px white solid;
    }
</style>


