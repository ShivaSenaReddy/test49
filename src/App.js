import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './Header';
import Robot from './Robot';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {'robots':[],'searchbox':''}
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ 'robots': data }));
    }
    searchChange=(event)=> {
        console.log(event.target.value);
        this.setState({ 'searchbox': event.target.value })
        console.log(this.state);
       
       /* const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase();
        })
        console.log(filteredRobots+'gg');*/
    }
    render() {
     
       
        let filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchbox.toLowerCase())
        })
        let RoboArray = this.state.robots;
        let Robots = filterRobots.map((robot) => {
            return < Robot name={robot.name}
                email={robot.email}
                id={robot.id}
            />
        })
        return (
            <div className="App">
                <Header searchChange={this.searchChange} />
                {Robots}
            </div>
        );
    }
}

export default App;
