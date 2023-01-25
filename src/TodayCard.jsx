import React from 'react';

function TodayCard(props) {
    return (
        <div>
            <h2>props.conditions</h2>
            <h2>props.currentTemp</h2>
            <h3>props.lowTemp</h3>
            <h3>props.hiTemp</h3>
            <h3>props.wind</h3>
            <h3>props.humidity</h3>
        </div>
    )
}

export default TodayCard;