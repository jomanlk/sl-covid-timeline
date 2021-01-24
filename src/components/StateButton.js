import { useState } from 'react';

const StateButton = (props) => {
    let [isToggled, setIsToggled] = useState(false);
    return (
        <button
            onClick={() => {
                setIsToggled(!isToggled);
            }}
            type="button"
            className="btn btn-success"
        >
            I am {isToggled ? '' : 'not'} toggled
        </button>
    );
};

export default StateButton;
