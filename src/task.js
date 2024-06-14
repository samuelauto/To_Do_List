//Objeto tarea con todos sus metodos(CRUD)

function Task(title,dateCreate,dateFinish,description,importanceLevel,project,complete){
    this.title = title;
    this.dateCreate = dateCreate;
    this.dateFinish = dateFinish;
    this.description = description;
    this.importanceLevel = importanceLevel;
    this.project = project;
    this.complete = complete;

    const getTitle = () => this.title;
    const getDateCreate = () => this.dateCreate;
    const getDateFinish = () => this.dateFinish;
    const getDescription = () => this.description;
    const getImportanceLevel = () => this.importanceLevel;
    const getProject = () => this.project;
    const getComplete = () => this.complete;

    const setDateFinish = (newDateFinish) => this.dateFinish = newDateFinish;
    const setImportanceLevel = (newImportanceLevel) => this.importanceLevel = newImportanceLevel;
    const setProject = (newProject) => this.project = newProject;
    const setComplete = (newComplete) => this.complete = newComplete;

    return{getTitle,getDateCreate,getDateFinish,getDescription,getImportanceLevel,getProject,getComplete,setDateFinish,setProject,setComplete,setImportanceLevel}

}

export {Task}