import React, { Component } from 'react';

class City extends Component {
    render() {
        return (
            <div>
                <>
                {/* <p> {this.props.name} </p> */}
                {
                    this.props.name === 'gujrat' ? 'surat' :
                    this.props.name === 'rajasthan' ? 'jaipur' :  ''

                }
                </>
            </div>
          
        );
    }
}

export default City;