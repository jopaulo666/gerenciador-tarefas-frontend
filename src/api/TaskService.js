class TaskService{
    constructor(){
        this.tasks = [
            {id: 1, description: "Tarefa 1", whenToDo: "02/09/2020", done: true},
            {id: 2, description: "Tarefa 2", whenToDo: "02/12/2022", done: false},
            {id: 3, description: "Tarefa 3", whenToDo: "10/10/2021", done: false}
        ]
    }

    list(){
        return this.tasks;
    }

    delete(id){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
}

export default new TaskService();