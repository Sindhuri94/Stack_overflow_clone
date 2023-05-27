import React from "react";
const WidgetTags=()=>{
    const tags=['c' ,'c++' ,'css' ,'firebase','html','java','javascript','mern','mongodb','next.js','mysql','php','python','Reactjs']
    return(
        <div className="wiget-tags">
            <h3>Watched tags</h3>
            <div className="widget-tags-div">
                {
                    tags.map((tag)=>
                    (
                        <p key={tag}>{tag}</p>
                    ))
                }

            </div>

        </div>
    )
}
export default WidgetTags