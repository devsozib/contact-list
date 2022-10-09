<template>

<div class="container-contact100">
<div class="wrap-contact100">
<form class="contact100-form validate-form" @submit.prevent="addContact()">
<span class="contact100-form-title">
  Add New Contact to Phonebook
</span>
<!-- {{ phoneNumbers.phone }} -->
<div class="wrap-input100 validate-input" data-validate="Name is required">
        <span class="label-input100">Name</span>
        <input class="input100" type="text" v-model="data.name" name="name" required placeholder="Enter name">
        <span class="focus-input100"></span>
</div>
<div class="wrap-input100 validate-input" data-validate="Nick Name is required">
    <span class="label-input100">Nick Name</span>
    <input class="input100" type="text" v-model="data.nickname"  name="nickname" placeholder="Enter nickname">
    <span class="focus-input100"></span>
</div>
<div  v-for="(input,index) in phones" :key="`phoneInput-${index}`" class="wrap-input100 validate-input" data-validate="Phone is required">
        <span class="label-input100">Phone</span>
        <input v-on:change="getPhone(input)"  class="input100" required type="text" v-model="input.phone" name="phone" placeholder="Enter phone">
        <span class="focus-input100"></span>
        <button  @click="remove(index,phones)" v-show="index || ( !index && phones.length > 1)"><i class="fa fa-minus-circle" aria-hidden="true"></i> </button>
        <button href=""  @click="add(phones)" v-show="index == phones.length-1"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>

        <!-- {{ input.phone }} -->
 </div>

<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
        <span class="label-input100">Email</span>
        <input class="input100" required type="email" v-model="data.email" name="email" placeholder="Enter email">
        <span class="focus-input100"></span>
</div>
<div class="wrap-input100 validate-input">
    <span class="label-input100">Address</span>
    <input class="input100" required type="text" v-model="data.address" name="address" placeholder="Enter address">
    <span class="focus-input100"></span>
</div>
<div class="wrap-input100 validate-input" >
    <span class="label-input100">Work</span>
    <input class="input100" required type="text" v-model="data.work" name="work" placeholder="Enter work">
    <span class="focus-input100"></span>
</div>

<div class="wrap-input100 validate-input" >
    <span class="label-input100">Website</span>
    <input class="input100" required type="text" v-model="data.website" name="website" placeholder="Enter website">
    <span class="focus-input100"></span>
</div>

<div class="wrap-input100 validate-input" >
    <span class="label-input100">Photo</span>
    <input class="input100"  type="file" name="photo">
    <span class="focus-input100"></span>
</div>


        <div class="container-contact100-form-btn">
        <div class="wrap-contact100-form-btn">
        <div class="contact100-form-bgbtn"></div>
        <button class="contact100-form-btn">
        <span>
Create New Contact
<i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
</span>
</button>
</div>
</div>
</form>
<p class="text-center"><a  href="">Your Phonebook</a></p>
</div>
</div>

</template>

<script>
export default {
    name:'add_to_create',
    data(){
        return{
           data:{
            name:"",
            nickname:"",
            phones:[{phone:''}],
            email:"",
            address:"",
            work:"",
            website:""
           }
        }
    },

    methods:{
        add(phones) {
            phones.push({})
        },
        remove(index,phones) {
            phones.splice(index,1);
        },

        getPhone(input){
          this.data.phones.phone = input;
        },

        addContact(){
            //  let number = this.data.phones;
            //  number.forEach(element){
            //     console.log(element['phone']);
            //  }
            axios.post('contact-store',this.data)
            .then((res)=>{
                 console.log(res);
            }).catch((error)=>{})

        }
    }

}
</script>

<style>

</style>
