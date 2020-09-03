import React, { Component } from 'react';

class TaskListTable extends Component {
    render() {
        return (
            <table>
                <TableHeader/>
                <TableBody/>
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Status</th>
                <th>Descrição</th>
                <th>Data</th>
                <th>Ações</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}

export default TaskListTable;