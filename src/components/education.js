import React from "react";

function Education(props) {
    const { array } = props;
    console.log(array)
    return (
        <div className = 'education'>
            <h1>Education</h1>
            {array.map((element) => {
                return (
                    <div key={element.identify}>
                        {element.school}<br/>
                        {element.major}
                    </div>
                )
            })}
        </div>
    )
}

export default Education;