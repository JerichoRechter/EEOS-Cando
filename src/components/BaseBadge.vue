<template>
    <span class="badge" :class="category">
    {{ text }}
    </span>
</template>

<script>
export default{
    props:['category','title'],
    computed:{
        text(){
            return this.title;

        }
    }


}</script>
<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

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