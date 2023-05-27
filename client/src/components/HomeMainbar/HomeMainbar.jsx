import React from "react";
import {Link,useLocation,useNavigate} from 'react-router-dom'
import'./HomeMainbar.css'
import QuestionList from './QuestionList'

  
const HomeMainbar=()=>{
    const location=useLocation()
    const user=1;
    const navigate=useNavigate()
    var questionsList=[{
        _id:1,
        upVotes:3,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["java","node js","react js","mongo db"],
        userPosted:"mano",
        userId:1,
        askedOn:"jan1",
        answer:[{
            answerBody:"Answer",
            userAnswered:"kumar",
            answeredOn:"jan 2",
            userId:2,
        }]
    },{
        _id:2,
        upVotes:1,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["java","R","python"],
        userPosted:"mano",
        userId:1,
        askedOn:"jan1",
        answer:[{
            answerBody:"Answer",
            userAnswered:"kumar",
            answeredOn:"jan 2",
            userId:2,
        }]
    },{
        id:3,
        votes:3,
        noOfAnswers:0,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["java","R","python"],
        userPosted:"mano",
        userId:1,
        askedOn:"jan1",
        answer:[{
            answerBody:"Answer",
            userAnswered:"kumar",
            answeredOn:"jan 2",
            userId:2,
        }]
    }
]
   
    const redirect=()=>{
        alert("Login or signup to ask a question")
        navigate('/Auth')
    }
    const checkAuth=()=>{
        if(user===null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }
        else{
            navigate('/AskQuestion')
        }
    }
    return(
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname==='/' ? <h4>Top Questions</h4> : <h4>All Questions</h4>
                }
                <button onClick={checkAuth} className="ask-btn">Ask Question</button>
            </div>
            <div>
                {   questionsList==null?
                    <h1>Loading...</h1>:
                    <>
                    <p>{questionsList.length}questions</p>
                    <QuestionList questionsList={questionsList}/>
                    </>
                }
            </div>
            
        </div>
    )
}
export default HomeMainbar