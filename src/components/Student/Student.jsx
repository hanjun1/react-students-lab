import React from 'react';
import Score from '../Score/Score'

function Student(props) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h4>Bio: {props.bio}</h4>
            <h4>Results:</h4>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Score</th>
                </tr>
                {props.scores.map(score => 
                    <Score date={score.date} score={score.score} />    
                )}
            </table>
        </div>
    )
}

export default Student;