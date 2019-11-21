<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>Files
        <input type="file" id="files" ref="files" multiple v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data(){
    return {
      file: ''
    }
  },

  methods: {
    submitFile(){
          let formData = new FormData();

          formData.append('image', this.file);
          // axios.post( 'http://localhost:9999/api/mytest',
          axios.post( '/apis/api/mytest',
              formData,
              {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
            }
          ).then(function(){
        console.log('SUCCESS!!');
      })
      .catch(function(){
        console.log('FAILURE!!');
      });
    },

    handleFileUpload(){
      this.file = this.$refs.files.files[0];
    }
  }
}
</script>
<style scoped>

</style>
