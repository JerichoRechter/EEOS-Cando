<template>
    <li>
        <h3>{{ title }}</h3>
        <h4>{{ minTime }}/minps</h4>
        <div>
            <base-badge v-for="category in categories" :key="category" :category="category" :title="category">  </base-badge>
        </div>
        <div class="actions">
            <base-button  @click="deleteCando(candoIndex)" style="background-color: #008834" >Delete this cando</base-button>
            <base-button  style="background-color: #008834" link :to="candoLink">More</base-button>
        </div>
    </li>
</template>
<script>

export default{
    
    props:['id','title','categories','minTime'],
    computed:{
        candoLink(){
            return '/cando/'+this.id

        },
        candoIndex(){
        return this.id
        }
        
    },
    methods:{
      deleteCando(payload){
        const selectedCando=payload

        fetch(`https://cando-nexus-default-rtdb.europe-west1.firebasedatabase.app/candos/${selectedCando}.json/`,{
            method:'DELETE'});
      }
    },
   
    
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #008834;
  border-radius: 12px;
  padding: 1rem;
  color: white;
  background-color: rgb(118, 132, 255);
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>