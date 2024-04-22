<template>
    <div>
        <iframe :src="mySrc" width="200" height="200" 
        frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p>
            <a href="https://giphy.com/gifs/nehumanesociety-funny-dog-3o7527pa7qs9kCG78A">{{ this.item.id }}</a>
        </p>
    </div>
</template>

<script>
export default{
    props:['item'],
    data(){

    },
    computed: {
        mySrc(){
            return "https://giphy.com/embed/" + this.item.id;
        }
    }
}
</script>

<style>


</style>