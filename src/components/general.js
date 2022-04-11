import React from "react";

function General(props) {
    const { array } = props
    console.log(array[0])
    return(
        <div className = 'general'>
            {array.map((element) => {
                    return (
                    <div>
                        <h1>{element.firstlast}</h1>
                        <div>{element.email} || {element.phone}</div>
                    </div>
                    )
            })}
        </div>
    )

}

export default General;