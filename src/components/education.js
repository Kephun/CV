import React from "react";



function Education(props) {
    const { array } = props;
    
    
    return (
        <div className = 'education'>
            <h1>Education</h1>
            {array.map((element) => {
                return (
                    <div key={element.identify}>
                        <h2>
                            {element.school}
                        </h2>
                        <section>
                            {element.major}
                        </section>
                        <button id={element.identify}>X</button>
                    </div>
                )
            })}
        </div>
    )
}



export default Education;