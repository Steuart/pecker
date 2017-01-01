<template>
    <div id="app">
        <el-row class="content">
            <el-col :span="4" class="left">
                <el-menu default-active="2" class="" theme="dark">
                    <div class="userinfo">
                        <img src="./images/header.jpg"/>
                        <p>ChicMis</p>
                    </div>
                    <el-input
                        placeholder="搜索"
                        icon="search"
                        v-model="input2"
                    >
                    </el-input>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>
                            sasa
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <router-link class="myRouter" to="/index">
                                <el-menu-item index="1-1">index</el-menu-item>
                            </router-link>
                            <router-link class="myRouter" to="/home">
                                <el-menu-item index="1-2">home</el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                </el-menu>
            </el-col>

            <el-col :span="20" class="right">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              msg: 'Use Vue 2.0 Today!',
                value1:0,
                value2:50,
                value3:42,
                radio:1
            }
        },
        components:{

        },
        methods: {
        }
    }
</script>

<style>
    html{
        font-size: 62.5%;
        margin: 0;
        padding: 0;
        font-family: Helvetica, sans-serif;
        height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        height: 100%;
    }
    #app,.content,.left,.right {
        height: 100%;
    }
    .el-menu {
        background-color: #222D32;
        height: 100%;
    }
    .el-input {
        margin-top: 2rem;
    }
    @media screen and (max-width: 500px) {
        .el-menu{
            display: none;
        }
    }
    .left-switch {
        font-size: 2rem;
        position: absolute;
        top:1rem;
        left: 18%;
    }
    .userinfo {
        text-align: center;
    }
    .userinfo img {
        margin-top: 1rem;
        width: 8rem;
        border-radius:8rem;
    }
    .userinfo p {
        color: rgba(41, 231, 179, 0.99);
        font-size: 1.6rem;
    }
    .el-input {
        margin-top: 0;
    }
    .myRouter {
        text-decoration:none;
    }
</style>
