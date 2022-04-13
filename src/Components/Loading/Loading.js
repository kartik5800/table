import React from 'react';

function Loading(Component) {
    return function withloadingcomponent({isloading, data}) {
        if (isloading) {
            return (
                <p>loading . . . . .</p>
               
            )
        } else {
            return(
                <Component data={data} />
            );
        }

    }


}

export default Loading;