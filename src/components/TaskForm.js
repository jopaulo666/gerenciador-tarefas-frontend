import React, { Component } from 'react';
import TaskService from '../api/TaskService';
import { Redirect } from 'react-router-dom';

class TaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: {
                id: 0,
                description: "",
                whenToDo: ""
            },
            redirect: false,
            butttonName: "Cadastrar"
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    }

    componentDidMount() {
        const editId = this.props.match.params.id;
        if (editId) {
            const task = TaskService.load(~~editId);
            this.setState({task: task, butttonName: "Editar"});
        }
    }
    

    onSubmitHandler(event) {
        event.preventDefault();
        TaskService.save(this.state.task);
        this.setState({redirect: true});
    }

    onInputChangeHandler(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.setState(prevState => ({ task: {...prevState.task, [field]: value} }));
        console.log(this.state.task);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>
        }

        return (
            <div>
                <h1>Cadastro de Tarefas</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="description">Descrição</label>
                        <input type="text"
                            className="form-control"
                            name="description"
                            value={this.state.task.description}
                            placeholder="Descrição da tarefa" 
                            onChange={this.onInputChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="whenToDo">Data</label>
                        <input type="date"
                            className="form-control"
                            name="whenToDo"
                            value={this.state.task.whenToDo}
                            placeholder="Data da tarefa" 
                            onChange={this.onInputChangeHandler}/>
                    </div>
                    <button type="submit" class="btn btn-primary" title="Cadastrar">{this.state.butttonName}</button>
                    &nbsp;
                    <button type="button" class="btn btn-secondary" title="Cancelar">Cancelar</button>
                </form>
            </div>
        );
    }
}

export default TaskForm;