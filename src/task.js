//Objeto tarea con todos sus metodos(CRUD)

//importanceLabel va a ser un radio buttom

class Task {
    constructor(title, dateCreate, dateFinish, description, importanceLevel, project, complete) {
        this.title = title;
        this.dateCreate = dateCreate;
        this.dateFinish = dateFinish;
        this.description = description;
        this.importanceLevel = importanceLevel;
        this.complete = complete;

        if(project === ""){
            this.project = "Predeterminado"
        }
        else{
            this.project = project
        }
    }

    getTitle() {this.title;} 
    getDateCreate() {this.dateCreate;} 
    getDateFinish() {this.dateFinish;} 
    getDescription() {this.description;} 
    getImportanceLevel() {this.importanceLevel;} 
    getProject() {this.project;} 
    getComplete() {this.complete;} 

    setDateFinish(newDateFinish) {this.dateFinish = newDateFinish;}     
    setImportanceLevel(newImportanceLevel) {this.importanceLevel = newImportanceLevel;} 
    setProject(newProject) {this.project = newProject;} 
    setComplete(newComplete) {this.complete = newComplete;} 

    static fromObject (task){
        return new Task(task.title, task.dateCreate, task.dateFinish, task.description, task.importanceLevel, task.complete,task.project)
    }
    
}

export {Task}