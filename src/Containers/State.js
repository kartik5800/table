import React, { Component } from 'react';

//cahnge state name

class State extends Component {
    constructor(props){
        super(props);

        this.state={
            id: 101,
            statename: 'rajasthan'
        }

    }

    changeStatename =() => {
        this.setState({
            statename: 'gujrat'
        })
    }
statename
    render() {
        return (
            <div>
                {this.state.statename}<br></br>
                <button onClick={() => this.changeStatename()}> change state

                </button>
            </div>
        );
    }
}

export default State;
