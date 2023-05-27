import React from "react";
import './RightSidebar.css';
import comment from '../../assets/comment-solid.svg'
import pen from '../../assets/pen-solid.svg'
const Widget=()=>{
    return(
        <div className="Widget">
            <h1>The overflow blog</h1>
           <div className="right-sidebar-div-1">
           <div className="right-sidebar-div-2">
             <img src={pen} alt="pen" width='18'/>
             <p style={{fontSize:"13px"}}>Observability is key to the future of software (and your devops career)</p>
           </div>
           <div className="right-sidebar-div-2">
             <img src={pen} alt="pen" width='18'/>
             <p style={{fontSize:"13px"}}>Podcast 374: How valuable is your screen name?</p>
           </div>
           </div>
           <h1>Featured on Meta</h1>
           <div className="right-sidebar-div-1">
           <div className="right-sidebar-div-2">
             <img src={comment} alt="pen" width='18'/>
             <p style={{fontSize:"13px"}}>Review queue workflows - Final release....</p>
           </div>
           <div className="right-sidebar-div-2">
             <img src={comment} alt="pen" width='18'/>
             <p style={{fontSize:"13px"}}>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
           </div>
           <div className="right-sidebar-div2">
            <p style={{fontSize:"13px"}}>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
           </div>
           </div>
           <h1>Hot Meta Posts</h1>
           <div className="right-sidebar-div-1">
           <div className="right-sidebar-div-2">
            <p style={{fontSize:"13px"}}>38</p>
             <p style={{fontSize:"13px"}}>Why was this spam flag declined, yet the question marked as spam?</p>
           </div>
           <div className="right-sidebar-div-2">
            <p style={{fontSize:"13px"}}>20</p>
             <p style={{fontSize:"13px"}}>What is the best course of action when a user has high enough rep to...</p>
           </div>
           <div className="right-sidebar-div-2">
            <p style={{fontSize:"13px"}}>14</p>
             <p style={{fontSize:"13px"}}>Is a link to the "How to ask" help page a useful comment?</p>
           </div>
           
           </div>

        </div>
    )
}
export default Widget