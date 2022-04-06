import React from "react";

function Work(props) {
    const { array } = props
    console.log(array)
    return (
        <div>
            {array.map((element) => {
                return (
                    <div key={element.identify}>
                        {element.company}
                    </div>
                )
            })}
        </div>
    )
}

export default Work;