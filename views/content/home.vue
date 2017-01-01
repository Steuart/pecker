<template>
    <div class="b">
        <div v-on:click="show">home</div>
        <h1>{{msg}}</h1>
    </div>
</template>
<style>
    .b{
        background-color: #56ff4e;
    }
</style>
<script>
    import API from '../api';

    let data={
        msg:"cCCC"
    };

    export default{
        data(){
            return data;
        },
        methods:{
            show() {
                let that = this;
                API.test(function(res){
                    that.msg=res;
                    console.log(that.msg);
                });
            }
        }
    }
</script>
