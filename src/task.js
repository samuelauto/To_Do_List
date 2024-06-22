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

    getTitle() {return console.log(this.title);} 
    getDateCreate() {return this.dateCreate;} 
    getDateFinish() {return this.dateFinish;} 
    getDescription() {return this.description;} 
    getImportanceLevel() {return this.importanceLevel;} 
    getProject() {return this.project;} 
    getComplete() {return this.complete;} 

    setDateFinish(newDateFinish) {this.dateFinish = newDateFinish;}     
    setImportanceLevel(newImportanceLevel) {this.importanceLevel = newImportanceLevel;} 
    setProject(newProject) {this.project = newProject;} 
    setComplete(newComplete) {this.complete = newComplete;} 

    static fromObjectTask (task){
        return new Task(task.title, task.dateCreate, task.dateFinish, task.description, task.importanceLevel, task.complete,task.project)
    }
    
}

export {Task}