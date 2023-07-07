<template>
    <section>
        <base-card>
        <h2>Add a Cando</h2>
        <cando-form @saved-data="saveData"></cando-form>
        </base-card>

    </section>
</template>
<script>
import CandoForm from '../../components/candos/CandoForm.vue';
export default{
    components:{
        CandoForm
    },
    methods:{
        saveData(data){
            this.$store.dispatch('candos/addCando',data);
            this.$router.push('/cando')

        }
    }
}
</script>