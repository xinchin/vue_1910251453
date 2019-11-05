<template>
  <div>
    <h1>Axios</h1>
    <hr>
    <input type="text" v-model="input.name">
    <input type="text" v-model="input.email">
    <button @click="submitHandler">Submit</button>
    <button @click="cancelHandler">Cancel</button>
    <div v-for="(item,index) in contact" :key="index">
      <p>
        <span>{{item.name}}</span>
        <span>::</span>
        <span>{{item.email}}</span>
        <button @click="editHandler(index)">edit</button>
        <button @click="delHandler(index)">del</button>
      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name:'demoaxios',
  data(){
    return {
      contact:[],
      editIndex:null,
      input:{
        name:'',
        email:''
      }
    }
  },
  methods:{
    submitHandler(){
      console.log('addHandler');
      let {name, email} = this.input;
      if(!name || !email) return;

      if(this.editIndex == null){
        axios.post('http://localhost:8888/contact', this.input)
        .then((res)=>{
          this.contact.push(res.data);
          this.cancelHandler();
        })
        .catch((err)=>{
          console.log(err);
        });
      }else{
        axios.put('http://localhost:8888/contact/'+this.editIndex, this.input)
        .then((res)=>{
          this.contact[this.editIndex] = res.data;
          this.cancelHandler();
        })
        .catch((err)=>{
          console.log(err);
        });
      }
    },
    cancelHandler(){
      console.log('cancelHandler');
      this.input.name='';
      this.input.email='';
      this.editIndex = null;
    },
    editHandler(index){
      let {name, email} = this.contact[index];
      this.editIndex = index;
      this.input = {name, email};

    },
    delHandler(index){
      let target = this.contact[index];
      console.log(target);
      if(confirm('是否刪除')){
        axios.delete('http://localhost:8888/contact/' + target.id)
        .then((res)=>{
          this.contact.splice(index, 1);
          this.cancelHandler();
        })
        .catch((err)=>{
          console.log(err);
        });
      }
    }
  },
  mounted(){
    axios.get('http://localhost:8888/contact').then((res)=>{
      console.log(res);
      this.contact = res.data;
    }).catch((err)=>{
      console.log(err);
    });
  }
}
</script>
<style scoped>

</style>
