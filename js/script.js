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
                msgReceived: "Ok!",
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
                
                setTimeout(()=>{
                    const newMsgR = {
                        date: new Date(),
                        message: this.msgReceived,
                        status: 'received'
                    }
                    this.activeContact.messages.push(newMsgR)
                },1000)
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