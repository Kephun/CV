import React from "react";

function Education(props) {
    const { array } = props;
    console.log(array)
    return (
        <div>
            {array.map((element) => {
                return (
                    <div key={element.identify}>
                        {element.school}
                        {element.major}
                    </div>
                )
            })}
        </div>
    )
}

export default Education;