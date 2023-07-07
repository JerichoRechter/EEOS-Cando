import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default{
    namespaced:true,
    state(){
        return{
            candos:[
                {
                  id: 'c1',
                  title: 'Play War Thunder',
                  categories: ['Game', 'Short', 'Online'],
                  description:
                    "You can pretend to be a panzer ace or just grind a faction to torture yourself.",
                  minTime:15
                },
                {
                  id: 'c2',
                  title: 'Play Skyrim',
                  categories: ['Game', 'Long', 'Offline'],
                  description:
                    "How could I describe this masterpiece? :)",
                  minTime:60
                  },
                {
                  id: 'c3',
                  title: 'Watch No Country for Old men',
                  categories: ['Movie', 'Long', 'Online'],
                  description:
                    "Another cult classic that I should see",
                  minTime:133
                },
                {
                  id: 'c4',
                  title: 'Watch Free State of Jones',
                  categories: ['Movie', 'Short', 'Offline'],
                  description:
                    "I should go back and finish this Civil War movie",
                  minTime:142
                },
              ]
        }
    },
    mutations,
    getters,
    actions,

}