const dt = luxon.DateTime;
import { contactList } from "./data.js";

const { createApp } = Vue
    createApp({
        data(){
            return{
                contacts: contactList,
                activeContactIndex: 0,
                
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