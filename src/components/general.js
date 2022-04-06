import React from "react";

function General(props) {
    const { array } = props

    return (
        <div>
            {array.map((element) => {
                return (
                    <div>
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