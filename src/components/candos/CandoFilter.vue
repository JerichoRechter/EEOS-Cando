<template>
    <base-card>
      <h2>
        Search for: 
    
      </h2>
      <span class="filter-option">
        <input type="checkbox" id="Game" checked @change="setFilter"  />
        <label for="Game">Game</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="Movie" checked @change="setFilter"  />
        <label for="Movie">Movie</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="Long" checked @change="setFilter" />
        <label for="Long">Long</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="Short" checked @change="setFilter"  />
        <label for="Short">Short</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="Online" checked @change="setFilter"  />
        <label for="Online">Online</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="Offline" checked @change="setFilter"  />
        <label for="Offline">Offline</label>
      </span>
      
    </base-card>
</template>

<script>

export default{
    emits:['changed-filter'],
    data(){
        return{
            fitlers:{
                Game:true,
                Movie:true,
                Short:true,
                Offline:true,
                Long:true,
                Online:true,
                
            }
        };
    },
    methods:{
        setFilter(){
            const inputId=event.target.id;
            const isActive=event.target.checked;
            const updatedFilters={
                ...this.filters,
                [inputId]:isActive
            };
            this.filters=updatedFilters;
            this.$emit('changed-filter',updatedFilters)
        }
    }
    
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}

</style>