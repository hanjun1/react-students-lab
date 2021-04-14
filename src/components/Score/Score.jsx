import React from 'react';

function Score(props) {
    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.score}</td>
        </tr>
    )
}

export default Score;