import React from "react";

function Work(props) {
    const { array } = props
    
    return (
        <div className = 'work'>
            <h1>Experience</h1>
            {array.map((element) => {
                return (
                    <div key={element.identify}>{element.company}</div>
                )
            })}
        </div>
    )
}

export default Work;