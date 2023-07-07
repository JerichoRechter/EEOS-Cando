export default{
    addCando(state,payload){
        state.candos.push(payload);
        
    },
    setCandos(state,payload){
        state.candos=payload
    },
  
}