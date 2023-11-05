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
                showInfoMsg: false,

            }
        },
        methods: {
            selectContact(id){
                this.activeContactIndex = this.contacts.findIndex((contact)=> contact.id === id);
            },
            sendMessage(){
                const newMsg = {
                    date: dt.now().toFormat('HH:mm'),
                    message: this.message = this.message.trim(),
                    status: 'sent'
                }
                if(this.message !== "" && this.message !== " "){
                    this.activeContact.messages.push(newMsg)
                }
                this.message = "";
                
                setTimeout(()=>{
                    const newMsgR = {
                        date: dt.now().toFormat('HH:mm'),
                        message: this.msgReceived,
                        status: 'received'
                    }
                    this.activeContact.messages.push(newMsgR)
                },1000)
            },
            filteredContact(){
                return this.contacts.filter((contact) => 
                contact.name.toLowerCase().includes(this.searchText.toLowerCase()))
            },
            showClickInfoMsg(index){
                if(index === this.activeContact.messages){
                    this.showInfoMsg = this.showInfoMsg === true ? false : true 
                }
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