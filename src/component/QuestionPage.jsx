import React from 'react'
import Question from "./Question.jsx"

export default function QuestionPage() {

    function previousQues(QuesNo){

    }

    function nextQues(QuesNo){

    }

    function finalSubmit(QuesNo){

    }


    return (
        <div>
        <div className='row d-flex justify-content-between align-items-center'>
        <div className='col-md-8 border-right d-flex flex-column' >
            <Question key={"1"} QuesNo={"1"} Ques={"What fraction of a day is 6 hour?"} Option1={"6/24"} Option2={"6"} Option3={"1/3"} Option4={"1/6"} onClickNext={nextQues} onClickPrevious={previousQues} onClickSubmit={finalSubmit}/>
            </div>
            <div className='col-md-4 border-right flex-column'>
                <div  className="overflow-auto d-flex flex-row justify-content-around flex-wrap p-3  "  style={{backgroundColor:"yellow" ,width:350,height:350,border:"2px solid black"}}>
                <button className="btn btn-primary profile-button mx-1 my-1" type="button">1</button>
                </div>
            </div>
            </div>
        </div>
    )
}
