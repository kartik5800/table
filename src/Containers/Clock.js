import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()

        }

        console.log(' 1 constructor');
    }

    tick = () => {
        console.log('tick');
        this.setState({
            time: new Date()
        })

    }


    componentDidMount = () => {
        console.log('3 componentDidMount ');
        this.timeid = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate = () => {
        console.log(' 4 componentDidUpdate');
    }

    componentWillUnmount =() => {
        console.log('componentWillUnmount');
        clearInterval(this.timeid);

    }

    render() {
        console.log(' 2 render');
        return (
            <center><br></br>
            <br></br>
            <br></br>
            <div>
                {
                    this.state.time.toLocaleTimeString()

                }
            </div>
            </center>
        );
    }
}

export default Clock;