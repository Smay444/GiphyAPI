<template>
    <div>
        <p>Giphy View</p>
    </div>
</template>

<script>
import giphyService from '../services/GiphyService';

export default{
    data(){
        return{
            data:[]
        }
    },
    created(){
        giphyService.getGiphys()
        .then(response => {
            console.log(response);
            
        })
    }
}

</script>

<style>

</style>


