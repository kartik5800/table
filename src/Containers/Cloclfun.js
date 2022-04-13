import React, { useEffect, useState } from 'react';

function Cloclfun(props) {
    const [time, settime] = useState(new Date()); //constructor

    const tick = () => {
        settime(new Date());
    }
    useEffect(
        () => {
            const timeid = setInterval(() => tick(), 1000);
            // componentDidMount , componentDidUpdate

            return () => {
                clearInterval(timeid); //componentWillUnmount
            }
        },

        [time]);
        
    // rendor
    return (


        <div>
            {time.toLocaleTimeString()}

        </div>
    );
}

export default Cloclfun;