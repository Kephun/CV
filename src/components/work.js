import React from "react";

function Work(props) {
    const { array } = props
    return (
        <ul>
            {array.map((work) => {
                return (
                    <div>
                        <div>{work.company}</div>
                    </div>
                )})
            }
        </ul>
    )
}

export default Work;