import React from "react";

function Education(props) {
    const { array } = props
    return (
        <ul>
            {array.map((Education) => {
                return (
                <div>
                    <div>{Education.school}</div>
                    <div>{Education.major}</div>
                </div>
                )})
            }
        </ul>
    )
}

export default Education;