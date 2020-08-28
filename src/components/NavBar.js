import React, { Component } from 'react';
import NavBarItem from './NavBarItem';
import { APP_NAME } from '../constants';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                { name: "Listar Tarefas", href: "/" },
                { name: "Nova Tarefa", href: "/form" }
            ]
        }
    }

    onClickHandler(item) {
        alert(item.name)
    }

    render() {
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">{APP_NAME}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(Página atual)</span></a>
                            </li>                   
                           
                        </ul>

                        {this.state.items.map(i => <NavBarItem item={i} onClick={this.onClickHandler} />)}
                    </div>
                </nav>

            </div>
        );
    }
}

export default NavBar;