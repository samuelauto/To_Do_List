//import "./style.css";
import {Task} from './task'
import {Project,fromObjectProject} from './project'


function Main(){

    const projects = [];

    //Creacion de un proyecto por defecto si no existe ninguno
    if (localStorage.getItem('default') !== null){
        //Existe el proyecto default en local storage, se esta cargando la pagina por segunda vez, necesidad de leer todos los proyectos
        let elements = localStorage.length;
        for(let i=0;i<elements;i++){
            const key = localStorage.key(i); //esto me devuelve el titulo del proyecto, con esto recreo el objeto proyecto 
            //const values = localStorage.getItem(key); //Esto me devuelve las tares, con esto recreo el objeto tareas
            //const tasks = JSON.parse(values);//convierte el JSON string en un arreglo nuevamente
            const project = fromObjectProject(key);
            project.chargeTask();
        }
    }
    else{
        const project = Project('default');
        let task1 = new Task("prueba1","21/6/2024","29/6/2024","Primera Tarea","Prioritatio","","no_complete");
        let task2 = new Task("prueba2","22/6/2024","1/7/2024","Segunda Tarea","Menos Prioritario","","completo");
        let task3 = new Task("prueba3","23/7/1899","1/1/2024","Tercera Prueba","Menos Prioritario","","Not Complete");

        project.addTask(task1);
        project.addTask(task2);
        project.addTask(task3);
        project.saveTask();
        projects.push(project);
    }
}

Main()