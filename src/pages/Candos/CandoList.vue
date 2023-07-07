<template>
    <section>
        <cando-filter @changed-filter="setFilters"></cando-filter>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button @click="loadCandos">Refresh</base-button>
            <base-button link to="/add">Add a cando</base-button>
        </div>

        <ul >
           <cando-item v-for="cando in filteredCandos" 
           :key="cando.id"
           :id="cando.id"
           :title="cando.title"
           :categories="cando.categories"
           :minTime="cando.minTime"
           ></cando-item>
        </ul>
    </base-card>
        
    </section>
</template>

<script>
import CandoItem from '../../components/candos/CandoItem.vue'
import CandoFilter from '../../components/candos/CandoFilter.vue'
export default{
    components:{
        CandoItem,
        CandoFilter

    },
    data(){
        return{
            activeFilters:{
                Game:true,
                Movie:true,
                Short:true,
                Offline:true,
                Long:true,
                Online:true,

            }
        }

    },
    computed:{
        filteredCandos(){
            const candos=this.$store.getters['candos/candos'];
            return candos.filter(cando=>{
                if (this.activeFilters.Game && cando.categories.includes('Game')){
                    return true;
                }
                if (this.activeFilters.Movie && cando.categories.includes('Movie')){
                    return true;
                }
                if (this.activeFilters.Online && cando.categories.includes('Online')){
                    return true;
                }
                if (this.activeFilters.Offline && cando.categories.includes('Offline')){
                    return true;
                }
                if (this.activeFilters.Long && cando.categories.includes('Long')){
                    return true;
                }
                if (this.activeFilters.Short && cando.categories.includes('Short')){
                    return true;
                }
                return false;

                
            })
        },
        
    },
    created(){
        this.loadCandos();
    },
    methods:{
        setFilters(updatedFilters){
            this.activeFilters=updatedFilters;

        },
        loadCandos(){
            this.$store.dispatch('candos/loadCandos');
        },
        
    }
    
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}</style>