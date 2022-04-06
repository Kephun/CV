import React from "react";

function Work(props) {
    const { array } = props
    
    return (
        <div>
            {array.map((element) => {
                return (
                    <div>
                        {element.company}
                    </div>
                )
            })}
        </div>
    )
}

export default Work;