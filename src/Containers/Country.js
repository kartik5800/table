import React, { Component } from 'react';


//change country name


class Country extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1101,
            Countryname: 'india'
        }
    }

    changeCountryname = () => {
        this.setState({
            Countryname: 'united kingdom'
        })

    }
    render() {
        return (
            <div>
                {this.state.Countryname}
                <button onClick={() => this.changeCountryname()} >change Country
                </button>
            </div>
        );
    }
}

export default Country;
