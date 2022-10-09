
import './bootstrap';
import { createApp } from 'vue';



const app = createApp({});

import PhoneBook from './components/phonebook.vue';
import addToCreate from './components/add_to_create.vue';
app.component('phone-book', PhoneBook);
app.component('add-to-create', addToCreate);



app.mount('#app');
