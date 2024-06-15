//Objeto Project con todos sus metodos

import { NewTask } from "./dom_new_task";
import {Task} from "./task";

function Project(title){
    this.title = title;
    this.tasks = [];

    const addTask = (task) => {
        this.tasks.forEach(task => {
            if (this.task.getDescription() === task.getDescription()){
                return "La tarea ya se encuentra registrada";
            }
        });
        this.tasks.push(task);
    };

    const deleteTask = (task) => {
        this.tasks.forEach(task => {
            if (this.task.getDescription() === task.getDescription()){
                this.tasks.splice(this.tasks.indexOf(task), 1);
            }
        });
    };

    const getTasks = () => {
        this.tasks.forEach(task => {
            task.getDescription();
            task.getLevelImportance();
            task.getDateCreate();
        })
    };


    const saveTask = () => {

        localStorage.removeItem(this.title);

        localStorage.setItem(this.title, JSON.stringify(this.tasks));//Aqui se me guardan solamente las propiedades de la clase
    }


    const chargeTask = () => {
        //NO va a existir caso en que se cargue un proyecto sin alguna tarea adentro
        //tengo q recuperar el objeto proyectos tambien


        let project = JSON.parse(localStorage.getItem(this.title))
        
        let tasks = project[title]; //aqui se obtiene todas las tareas

        tasks.forEach(t => Task.fromObject(t)) //se le devuelve a cada elemento sus respectivos metodos



    }

}