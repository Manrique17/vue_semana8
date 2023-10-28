import { createStore } from 'vuex'

export default createStore({
  state: {
    // variable para almacenar autor
    autor: 'Abner López', 
    // array para almacenar tareas
    tareas: [
      {nombre: 'Realizar ejercicio práctico', estado: 'Pendiente'}
    ]
  },
  getters: {
    getTareas(state){
      return state.tareas
      
    }, 
    getAutor(state){
      return state.autor
    }
  },
  mutations: {
    agregarTarea(state, tarea){
      state.tareas.push(tarea);
    }, 
    eliminarTarea(state, index){
      state.tareas.splice(index, 1)
    }
  },
  actions: {
    agregarTareaAccion(context, tarea){
      // invocar a la mutacion
      context.commit('agregarTarea', tarea);
    }, 
    eliminarTareaAccion(context, tarea){
      // invocar mutations
      context.commit('eliminarTarea', tarea)
    }
  },
  modules: {
  }
})
