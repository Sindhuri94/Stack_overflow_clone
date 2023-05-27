import React from "react";
import QuestionDetails from "./QuestionsDetails";
import Avatar from "../../components/Avatar/Avatar";
import {Link} from 'react-router-dom'
const DisplayAnswer=({question})=>{
    return(
        <div>
           {
            question.answer.map((ans)=>(
                <div className="display-ans" key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="questioin-actions-user">
                        <div>
                            <button type="button">Share</button>
                            <button type="button">Delete</button>
                        </div>
                        <div>
                            <p>answered{ans.answeredOn}</p>
                            <Link to={'/User/${question.userId}'} className="user-link" style={{color:'#0086d8'}}>
                                <Avatar backgroundColor="green" px='8px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                <div>
                                    {ans.userAnswered}
                                </div>
                            </Link>
                        </div>


                    </div>
                </div>
            ))
           }
        </div>
    )
}
export default DisplayAnswer