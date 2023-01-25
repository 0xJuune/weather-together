import React from 'react';

function DayCard(props) {
    return (
        <div>
            <h2>props.conditions</h2>
            <h3>props.lowTemp</h3>
            <h3>props.hiTemp</h3>
        </div>
    )
}

export default DayCard;