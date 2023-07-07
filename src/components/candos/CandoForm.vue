<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" v-model.trim="title"/>
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea id="description" rows="5" v-model.trim="description"></textarea>
        </div>
        <div class="form-control">
            <label for="minTime">Minimum time 1 session takes</label>
            <input type="text" id="minTime" v-model.number="minTime" />
        </div>
        <div class="form-control">
            <h3>Categories</h3>
            <div>
                <input type="checkbox" id="Game" value="Game" v-model="categories">
                <label for="Game">Game</label>
            </div>
            <div>
                <input type="checkbox" id="Movie" value="Movie" v-model="categories">
                <label for="Movie">Movie</label>
            </div>
            <div>
                <input type="checkbox" id="Short" value="Short" v-model="categories">
                <label for="Short">Short</label>
            </div>
            <div>
                <input type="checkbox" id="Long" value="Long" v-model="categories">
                <label for="Long">Long</label>
            </div>
            <div>
                <input type="checkbox" id="Online" value="Online" v-model="categories">
                <label for="Online">Online</label>
            </div>
            <div>
                <input type="checkbox" id="Offline" value="Offline" v-model="categories">
                <label for="Offline">Offline</label>
            </div>
        </div>
        <base-button>Add to Candos list</base-button>
    </form>
</template>

<script>
export default{
    emits:['saved-data'],
    data(){ 
        return{
            title:'',
            description:'',
            minTime:null,
            categories:[],

        }
    },
    methods:{
        
        submitForm(){
            const formData={
                title: this.title,
                description:this.description,
                minTime:this.minTime,
                categories:this.categories
            };
            console.log(formData)
            this.$emit('saved-data',formData);

        }
    }
}
</script>

<style scoped>

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #069737;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #069737 solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}</style>