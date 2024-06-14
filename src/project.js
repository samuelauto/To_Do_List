//Objeto Project con todos sus metodos

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
            this.tasks.getDescription();
            this.tasks.getLevelImportance();
            this.tasks.getDateCreate();
        })
    };

}