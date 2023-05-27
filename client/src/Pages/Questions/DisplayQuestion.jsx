import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import QuestionsDetails from "./QuestionsDetails";
const DisplayQuestion=()=>{
    return(
        <div className="home-container-1">
            <LeftSidebar/>
            <QuestionsDetails/>
            <div className="home-container-2">
               
            <RightSidebar/>
            </div>
           
        </div>
    )
}
export default DisplayQuestion