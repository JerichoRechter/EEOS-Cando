<template>
    <section>
        <base-card>
          <h2>{{ selectedTitle }}</h2>
          <h1>{{ selectedTime }}/minps</h1>
         


        </base-card>
    </section>
    <section>
        <base-card>
           <base-badge v-for="category in selectedCando.categories" :key="category" :type="category" :title="category" :class="category">
           {{ category }}
           </base-badge>
           <p>
            {{ selectedDescription }}
           </p>
        </base-card>
    </section>
    
  
</template>

<script>
export default{
    props:['id'],
data(){
    return{
        selectedCando:null
    };
},
created(){
    this.selectedCando=this.$store.getters['candos/candos'].find(cando=>cando.id===this.id);
},
computed:{
    selectedTitle(){
        return this.selectedCando.title
    },
    selectedTime(){
        return this.selectedCando.minTime
    },
    selectedDescription(){
        return this.selectedCando.description
    },
    


}

};
</script>
<style>
.Offline {
  background-color: rgb(29, 23, 114);
  color: white;
}

.Online {
  background-color: #a51c1c;
  color: white;
}

.Short{
  background-color: #8f8f8f;
  color: white;
}
.Long{
  background-color: #2b2b2b;
  color: white;
}
.Game{
  background-color: #3bd13b;
  color: white;
}
.Movie{
  background-color: #c0d129;
  color: white;
}

</style>
