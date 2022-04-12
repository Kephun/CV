import React from "react";

function General(props) {
    const { array } = props
    const display = array.information.arrayG
    return(
        <div className = 'general'>
            {display.map((element) => {
                    return (
                        <ul key={element.identify}>{element.firstlast}
                            <li>{element.phone}</li>
                            <li>{element.email}</li>
                            <button onClick={array.test}>fauofhaw</button>
                        </ul>
                    )
            })}
        </div>
    )

}

export default General;