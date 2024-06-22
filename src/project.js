//Objeto Project con todos sus metodos

import { NewTask } from "./dom_new_task";
import {Task} from "./task";

function Project(titulo){
    const title = titulo;
    const tasks = [];

    const addTask = (task_) => {
        tasks.forEach(task => {
            if (task.getDescription() === task_.getDescription()){
                console.log("La tarea ya se encuentra registrada");
            }
        });
        tasks.push(task_);
    };

    const deleteTask = (task_) => {
        tasks.forEach(task => {
            if (task.getDescription() === task_.getDescription()){
                tasks.splice(tasks.indexOf(task), 1);
            }
        });
    };

    const getTasks = () => {
        tasks.forEach(task => {
            console.log(task.getDescription());
        })
    };


    const saveTask = () => {

        localStorage.removeItem(title);

        localStorage.setItem(title, JSON.stringify(tasks));//Aqui se me guardan solamente las propiedades de la clase
    }


    const chargeTask = () => {
        //NO va a existir caso en que se cargue un proyecto sin alguna tarea adentro
        let tasks_ = JSON.parse(localStorage.getItem(title))
        
        tasks.push(tasks_.forEach(t => Task.fromObjectTask(t).getTitle()))//se le devuelve a cada elemento sus respectivos metodos

    }

    //funcion para devolverle las propiedades a un objeto proyecto
    // function fromObjectProject (project){
    //     return new Project(project.title);
    // }

    return {addTask,deleteTask,getTasks,saveTask,chargeTask}

}

function fromObjectProject(title){
    return new Project(title);
}   

export {Project,fromObjectProject};