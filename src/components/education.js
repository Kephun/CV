import React from "react";

function Education(props) {
    const { array } = props;

    return (
        <div>
            {array.map((element) => {
                return (
                    <div>
                        {element.school}
                        {element.major}
                    </div>
                )
            })}
        </div>
    )
}

export default Education;