import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import TaskListTable from './components/TaskListTable';

class App extends Component {
  //constructor(props){
  //super(props)
  //}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="container" style={{marginTop: 20}}>
            <TaskListTable/>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
