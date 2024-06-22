//import "./style.css";
import {Task} from './task'
import {Project,fromObjectProject} from './project'


function Main(){

    const projects = []
    const project = Project("distinto default");
    project.addTask(new Task("prueba4","21/5/6789","12/6/8","Cuarta Tarea","No Prioritario","distinto default","No completo"));
    project.saveTask();
    //projects.push(project);
    const project2 = Project("otro mas");
    project2.addTask(new Task('prueba5',"23,56,7845","12/01/89","Quinta prueba","Muy Importante","otro mas","completado"));
    project2.saveTask();
    //projects.push(project2);

    for(let i=0;i<localStorage.length;i++){
        const key = localStorage.key(i)
        const project = fromObjectProject(key);
        console.log(localStorage.getItem(key));
        project.chargeTask();
        project.getTasks();
        projects.push(project);
    }

    for(let i=0;i<2;i++){
        console.log(projects[i]);
    }


    //Creacion de un proyecto por defecto si no existe ninguno
    // if (localStorage.getItem('default') !== null){
    //     //Existe el proyecto default en local storage, se esta cargando la pagina por segunda vez, necesidad de leer todos los proyectos
    //     let elements = localStorage.length;
    //     for(let i=0;i<elements;i++){
    //         const key = localStorage.key(i); //esto me devuelve el titulo del proyecto, con esto recreo el objeto proyecto 
    //         //const values = localStorage.getItem(key); //Esto me devuelve las tares, con esto recreo el objeto tareas
    //         //const tasks = JSON.parse(values);//convierte el JSON string en un arreglo nuevamente
    //         const project = fromObjectProject(key);
    //         project.chargeTask();
    //     }
    // }
    // else{
    //     const project = Project('default');
    //     let task1 = new Task("prueba1","21/6/2024","29/6/2024","Primera Tarea","Prioritatio","","no_complete");
    //     let task2 = new Task("prueba2","22/6/2024","1/7/2024","Segunda Tarea","Menos Prioritario","","completo");
    //     let task3 = new Task("prueba3","23/7/1899","1/1/2024","Tercera Prueba","Menos Prioritario","","Not Complete");

    //     project.addTask(task1);
    //     project.addTask(task2);
    //     project.addTask(task3);
    //     project.addTask(task1);
    //     project.saveTask();
    //     projects.push(project);
    //     console.log(projects);
    // }
    
    //Ilustrar por consola si se guardaron las cosas en el local storage
    //console.log(localStorage.getItem('default'));






    // console.log(projects[0].getTasks());
    // console.log(projects);
    // console.log(projects[0].getTasks());
}

Main()