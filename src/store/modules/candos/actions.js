export default{
     async addCando(context,data){
        const candoID=Math.ceil(Math.random()*1000000)
        const candoData={
            
            title:data.title,
            description:data.description,
            categories:data.categories,
            minTime:data.minTime,
        };

        ///CAUTION THIS IS A TEMPLATE TO BE USED FOR REQUESTS. IF ANYONE BUT ME (MEFKA) USES THIS, 
        //I WILL BE ABLE TO SEE YOUR IP AND HOUSE. YOU WERE WARNED
        ///const response=await fetch(`https://cando-nexus-default-rtdb.europe-west1.firebasedatabase.app/candos/${candoID}.json/`,{
        ///    method:'PUT',body:JSON.stringify(candoData)
        ///});
        ///Use your own database for the data,default is my firebase
        const response=await fetch(`https://cando-nexus-default-rtdb.europe-west1.firebasedatabase.app/candos/${candoID}.json/`,{
            method:'PUT',body:JSON.stringify(candoData)
        });
        const responseData= await response.json();
        context.commit('addCando',{...candoData,id:candoID}
        );


    },
    async loadCandos(context){
        const response=await fetch(`https://cando-nexus-default-rtdb.europe-west1.firebasedatabase.app/candos.json`)
    const responseData=await response.json();
    const candos=[];
    for(const key in responseData){
        const cando={
            id:key,
            title:responseData[key].title,
            description:responseData[key].description,
            categories:responseData[key].categories,
            minTime:responseData[key].minTime,
        };
        candos.push(cando);

    }
    context.commit('setCandos',candos);
    }
    
}