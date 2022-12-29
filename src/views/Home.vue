<script>
  export default {
    data() {
      return {
        infos: [],
        newInfo: {
          name: "",
          age: "",
          status: "",
          address: "",
          email: ""
        },
        currentInfo: {},
        editing: false
      };
    },
    created() {
      this.infos = JSON.parse(localStorage.getItem("infos")) || [];
    },
    methods: {
      addInfo() {
        if (this.newInfo.name && this.newInfo.age  && this.newInfo.status  && this.newInfo.address && this.newInfo.email) {
          this.infos.push({
            ...this.newInfo,
            id: Date.now()
          });
          this.newInfo = {
            name: "",
            age: "",
            status: "",
           address: "",
            email: ""
          };
          this.saveInfos();
        }
      },
      editInfo(info) {
        this.editing = true;
        this.currentInfo = { ...info };
      },
      updateInfo() {
        if (this.currentInfo.name && this.currentInfo.age && this.currentInfo.status && this.currentInfo.address && this.currentInfo.email) {
          const index = this.infos.findIndex(
            info => info.id === this.currentInfo.id
          );
          this.infos.splice(index, 1, this.currentInfo);
          this.currentInfo = {};
          this.editing = false;
          this.saveInfos();
        }
      },
      deleteInfo(info) {
        const index = this.infos.findIndex(c => c.id === info.id);
        this.infos.splice(index, 1);
        this.saveInfos()
      },

      saveInfos(){
        localStorage.setItem('infos', JSON.stringify(this.infos))
      }
    }
}
</script>

<template >

<main class="home">
        <div class="col-md-4 offset-md-4">
         <h1> <button class="btn btn-primary" >For more places to travel <br>Register now to be updated of my latest best destination</button></h1>
      <form @submit.prevent="addInfo">
        <hr>
        <h1>Register Now</h1>
        <div class="card-body bg-dark text-white mb-6npm run dev rounded border border-pink font-monospace fs-6">
          <div class="mb-5 rounded border border-yellow font-monospace fs-5">
        <label for="name">Name:</label>
        <input v-model="newInfo.name" type="text" id="name" required />
        </div>
        <div class="mb-5 rounded border border-pink font-monospace fs-5">
        <label for="age">Age:</label>
        <input v-model="newInfo.age" type="text" id="age" required />
        </div>
        <div class="mb-5 rounded border border-pink font-monospace fs-5">
        <label for="status">Status:</label>
        <input v-model="newInfo.status" type="text" id="status" required />
        </div>
          <div class="mb-5 rounded border border-pink font-monospace fs-5">
        <label for="address">Address:</label>
        <input v-model="newInfo.address" type="text" id="address" required />
      </div>
      <div class="mb-5 rounded border border-pink font-monospace fs-5">
        <label for="email">Email:</label>
        <input v-model="newInfo.email" type="email" id="email" required />
      </div>
     <button class="btn btn-success" type="submit">Register Information</button>
    </div>
      </form>      
    </div> 
    <div class="card-body bg-secondary text-dark">
      <div class="mb-5 rounded border border-pink font-monospace fs-5">
        <h1><button class="btn btn-success"> User Information</button></h1>
      <ul  v-for="info in infos" :key="info.id">
        <li>
          {{ info.name }} - {{ info.age }} - {{ info.status }} - {{ info.address }} - {{ info.email }}
          <button class="btn btn-primary" @click="editInfo(info)">Edit</button>
          <button class="btn btn-danger" @click="deleteInfo(info)">Delete</button>
        </li>
      </ul>
    </div>
   
      <form v-if="editing" @submit.prevent="updateInfo">
        <h1><button class="btn btn-success"> Edit Information</button></h1>
        <div class="mb-5 rounded border border-pink font-monospace fs-5">
        <label for="name">Name:</label>
        <input v-model="currentInfo.name" type="text" id="name" required />
        </div>
        <div class="mb-5 rounded border border-pink font-monospace fs-5">
        <label for="age">Age:</label>
        <input v-model="currentInfo.age" type="text" id="age" required />
      </div>
        <div class="mb-5 rounded border border-pink font-monospace fs-5">
        <label for="status">Status:</label>
        <input v-model="currentInfo.status" type="text" id="status" required />
      </div>
        <div class="mb-5 rounded border border-pink font-monospace fs-5">
        <label for="address">Address:</label>
        <input v-model="currentInfo.address" type="text" id="address" required />
        </div>
        <div class="mb-5 rounded border border-pink font-monospace fs-5">
        <label for="email">Email:</label>
        <input v-model="currentInfo.email" type="email" id="email" required />
      </div>
        <button  class="btn btn-success" type="submit">Update Information</button>
        <button  class="btn btn-primary" type="btn" @click="cancelEdit">Cancel</button>
      </form>
    </div>

    </main>
  </template>

