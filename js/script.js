import { contactList } from "./data.js";

const { createApp } = Vue
    createApp({
        data(){
            return{
                contacts: contactList,
                activeContact: 0,
                
            }
        },
        methods: {
            
        },
        computed:{

        },
        mounted(){
             console.log(this.contacts);
        }
    }).mount('#app')