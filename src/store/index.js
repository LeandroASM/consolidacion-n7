import { createStore } from "vuex";
import { v4 as uuid } from 'uuid'

export default createStore({
  state: {
    cursos: [
      {
        id: 1,
        img: "https://i.blogs.es/545cf8/es6-logo/450_1000.png",
        nombre: "JavaScript Avanzado",
        costo: 30000,
        duracion: "2 meses",
        cupos: 20,
        inscritos: 10,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion: "Curso con las nuevas actualizaciones de JavaScript.",
      },
      {
        id: 2,
        img: "https://lineadecodigo.com/wp-content/uploads/2014/04/css.png",
        nombre: "CSS para principiantes",
        costo: 10000,
        duracion: "1 mes",
        cupos: 35,
        inscritos: 23,
        completado: false,
        fecha_registro: "05/03/2022",
        descripcion: "Aprendiendo estilos con CSS desde el nivel más básico.",
      },
      {
        id: 3,
        img: "https://w7.pngwing.com/pngs/199/348/png-transparent-javascript-programmer-programming-language-computer-programming-node-js-angle-text-rectangle-thumbnail.png",
        nombre: "JavaScript Básico de 0 a 100",
        costo: 20000,
        duracion: "2 meses",
        cupos: 25,
        inscritos: 0,
        completado: true,
        fecha_registro: "05/03/2022",
        descripcion: "Programando para la web con JavaScript.",
      },
      {
        id: 4,
        img: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
        nombre: "HTML Básico",
        costo: 10000,
        duracion: "1 mes",
        cupos: 35,
        inscritos: 0,
        completado: true,
        fecha_registro: "31/01/2022",
        descripcion:"Aprende HTML 5 y crea tus primeras páginas web paso a paso con decenas de ejercicios.",
      },
      {
        id: 5,
        img: "https://logosandtypes.com/wp-content/uploads/2020/08/vue.svg",
        nombre: "Vue JS de 0 a 100",
        costo: 85500,
        duracion: "5 meses",
        cupos: 35,
        inscritos: 35,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion:"Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework.",
      },
      {
        id: 6,
        img: "https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png",
        nombre: "Estilos con SASS",
        costo: 45000,
        duracion: "1 mes",
        cupos: 40,
        inscritos: 35,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion:"Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias.",
      }
    ]
  },
  getters: {
    getCursoById: state => id => {
      return state.cursos.find(curso => curso.id == id)
    }
  },
  mutations: {
    CREATE_COURSE(state, curso){
      curso.id = uuid()
      state.cursos.push(curso)
    },
    DELETE_COURSE(state, id){
      let index = state.cursos.findIndex(curso => curso.id == id)
      state.cursos.splice(index, 1)
    },
    EDITAR_CURSO:(state,newCurso)=>{
      console.log(newCurso)
      let index = state.cursos.findIndex(prod=>prod.id == newCurso.id);
      console.log(index)
      state.cursos.splice(index,1,newCurso)
    },
  },
  actions: {
    createCourse({commit}, curso){
      commit('CREATE_COURSE', curso)
    },
    deleteCourse({commit}, id){
      commit('DELETE_COURSE', id)
    },
    editarCurso({commit},newCurso){
      commit('EDITAR_CURSO',newCurso)
    }
  },
  modules: {},
});
