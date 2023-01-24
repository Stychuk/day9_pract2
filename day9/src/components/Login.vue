<template>
    <div>
        <input v-model="input" type="text" placeholder="ім'я студента" required />
        <button @click="login" class="butt">Ввійти</button>
    </div>
 </template>
 
 
 <script>
 const API_HOST = process.env.API_HOST;

 export default {
    data() {
        return {
            input: '',
        }
    },
    methods: {
        login() {
            this.axios.get(`${API_HOST}/students/name/`+this.input).then((response) => {
                if((response.data === null) || (response.data.name == "CastError")) {
                    return
                }
                this.$store.commit('setUser', response.data)
                this.$router.push('/');
            })
        }
    }
 }
 </script>
 
 
 <style>
 .butt {
    background-color: yellow;
    border: 3px solid rgb(0, 0, 0);
    padding: 1px 5px;
    margin-top: 15px;
    margin-left: 15px;
    }
 </style>