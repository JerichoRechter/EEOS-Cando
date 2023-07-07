<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default{
    props:{
        mode:{
            type:String,
            required:false,
            default:null,

        },
        link:{
            type:Boolean,
            required:false,
            default:false
        },
        to:{
            type:String,
            required:false,
            default:'/'
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: rgba(4, 139, 56, 0.836);
  border: 1px solid rgba(0, 85, 38, 0.26);
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: rgba(0, 85, 38, 0.26);
  border-color:rgba(0, 85, 38, 0.26);
}

.flat {
  background-color: transparent;
  color: rgba(0, 85, 38, 0.26);
  border: none;
}

.outline {
  background-color: transparent;
  border-color: rgba(0, 85, 38, 0.26);
  color: rgba(0, 85, 38, 0.26);
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: rgba(0, 85, 38, 0.26);
}

</style>