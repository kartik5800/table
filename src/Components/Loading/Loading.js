import React from 'react';

function Loading(Component) {
    return function withloadingcomponent({ isloading, data }) {
        if (isloading) {
            return (
                <div>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>

                </div>
            )
        } else {
            return (
                <Component data={data} />
            );
        }

    }


}

export default Loading;