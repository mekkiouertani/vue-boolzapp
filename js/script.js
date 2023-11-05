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
                dateTime: dt.now(),
            }
        },
        methods: {
            selectContact(id){
                this.activeContactIndex = this.contacts.findIndex((contact)=> contact.id === id);
            },
            sendMessage(){
                const newMsg = {
                    date: this.dateTime,
                    message: this.message = this.message.trim(),
                    status: 'sent'
                }
                if(this.message !== "" && this.message !== " "){
                    this.activeContact.messages.push(newMsg)
                }
                this.message = "";
                
                setTimeout(()=>{
                    const newMsgR = {
                        date: this.dateTime,
                        message: this.msgReceived,
                        status: 'received'
                    }
                    if(newMsg.message !== "" ){
                        this.activeContact.messages.push(newMsgR)
                        this.scrollMessageList()
                    }
                },1000)
                
            },
            filteredContact(){
                return this.contacts.filter((contact) => 
                contact.name.toLowerCase().includes(this.searchText.toLowerCase()))
            },
            deleteMessage(index){
                this.activeContact.messages.splice(index,1);
            },
            scrollMessageList() {
                const messageList = this.$refs.messageList;
                messageList.scrollTop = messageList.scrollHeight;
            }
            
            
        },
        computed:{
            activeContact(){
                return this.contacts[this.activeContactIndex]
            },
            formattedTime() {
                return this.dateTime.toFormat('HH:mm'); 
            },
            
        },
        mounted(){

        }
    }).mount('#app')