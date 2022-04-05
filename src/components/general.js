import React from "react";

function General(props) {
    const { array } = props
    return (
        <ul>
            {array.map((general) => {
                return (
                <div>
                    <div>{general.firstlast}</div>
                    <div>{general.email}</div>
                    <div>{general.phone}</div>
                </div>
                )})
            }
        </ul>
    )
}

export default General;