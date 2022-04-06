import React from "react";

function General(props) {
    const { array } = props
    console.log(array)
    return (
        <div>
            {array.map((element) => {
                return (
                    <div key={element.identify}>
                        {element.firstlast}
                        {element.email}
                        {element.phone}
                    </div>
                )
            })}
        </div>
    )
}

export default General;