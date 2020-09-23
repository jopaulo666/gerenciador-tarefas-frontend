import React, { Component } from 'react';
import AuthService from '../api/AuthService';
import Alert from './Alert';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            alert: null,
            processing: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);        
    }

    handleSubmit(event) {
        event.preventDefault();
        AuthService.login(this.state.username, this.state.password);
        this.setState({alert: "Login inválido"});
    }

    handleInputChanged(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.setState({[field]: value});
    }

    render() {
        return (
            <div className="text-center">
                <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                <h1 className="h3 mb-3 font-weight-normal">Faça login</h1>
                {this.state.alert !== null ? <Alert message={this.state.alert} /> : "" }
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="username">Usuário: </label>
                        <input 
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChanged} 
                            value={this.state.username}
                            name="username"
                            placeholder="Nome de usuário"/>
                    </div>

                    <div className="form-group">
                        <label className="sr-only" htmlFor="password">Senha: </label>
                        <input 
                            type="password" 
                            className="form-control"
                            onChange={this.handleInputChanged} 
                            value={this.state.password}
                            name="password"
                            placeholder="Senha de usuário"/>
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                        disabled={this.state.processing}>Login</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
                </form>
                
            </div>
        );
    }
}

export default Login;