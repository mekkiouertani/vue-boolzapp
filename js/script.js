const dt = luxon.DateTime;
import { contactList } from "./data.js";

const { createApp } = Vue
    createApp({
        data(){
            return{
                contacts: contactList,
                activeContactIndex: 0,
                searchText: "",
                message: "",
            }
        },
        methods: {
            selectContact(id){
                this.activeContactIndex = this.contacts.findIndex((contact)=> contact.id === id);
            },
            sendMessage(){
                const newMsg = {
                    date: new Date(),
                    message: this.message = this.message.trim(),
                    status: 'sent'
                }
                if(this.message !== "" && this.message !== " "){
                    this.activeContact.messages.push(newMsg)
                }
                this.message = "";
            },
        },
        computed:{
            activeContact(){
                return this.contacts[this.activeContactIndex]
            },
        },
        mounted(){
            
        }
    }).mount('#app')